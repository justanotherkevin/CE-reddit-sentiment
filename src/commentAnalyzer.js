const natural = require("natural");
const { SummarizerManager } = require("node-summarizer");

class RedditCommentAnalyzer {
  constructor() {
    this.sentimentAnalyzer = new natural.SentimentAnalyzer(
      "English",
      natural.PorterStemmer,
      "afinn"
    );
    this.tokenizer = new natural.WordTokenizer();
  }

  async analyzeComments(comments) {
    // Process each comment
    const processedComments = await Promise.all(
      comments.map(async (comment) => {
        const sentiment = this.analyzeSentiment(comment.text);
        const keyPoints = await this.extractKeyPoints(comment.text);

        return {
          text: comment.text,
          upvotes: comment.score,
          sentiment: sentiment,
          keyPoints: keyPoints,
          weight: this.calculateWeight(comment.score),
        };
      })
    );

    // Group by sentiment
    const groupedResults = this.groupBySentiment(processedComments);

    // Sort each group by weighted importance
    return this.sortAndFormatResults(groupedResults);
  }

  analyzeSentiment(text) {
    const tokens = this.tokenizer.tokenize(text);
    const score = this.sentimentAnalyzer.getSentiment(tokens);

    // Categorize sentiment
    if (score > 0.2) return "positive";
    if (score < -0.2) return "negative";
    return "neutral";
  }

  async extractKeyPoints(text) {
    try {
      // If text is too short, return it as is
      if (text.length < 100) {
        return text;
      }

      const summarizer = new SummarizerManager();
      const summary = await summarizer.summarize(text, 2); // Get 2 sentences
      return summary;
    } catch (error) {
      console.error("Error extracting key points:", error);
      return text.slice(0, 150) + "..."; // Fallback to truncated text
    }
  }

  calculateWeight(upvotes) {
    // Log scale for upvotes to prevent extremely popular comments from overwhelming others
    return Math.log(Math.abs(upvotes) + 1);
  }

  groupBySentiment(comments) {
    return comments.reduce(
      (groups, comment) => {
        if (!groups[comment.sentiment]) {
          groups[comment.sentiment] = [];
        }
        groups[comment.sentiment].push(comment);
        return groups;
      },
      { positive: [], negative: [], neutral: [] }
    );
  }

  sortAndFormatResults(groupedComments) {
    const formatGroup = (comments) => {
      return comments
        .sort((a, b) => b.weight - a.weight)
        .map((comment) => ({
          keyPoints: comment.keyPoints,
          upvotes: comment.upvotes,
          weight: comment.weight,
        }));
    };

    return {
      positive: formatGroup(groupedComments.positive),
      negative: formatGroup(groupedComments.negative),
      neutral: formatGroup(groupedComments.neutral),
    };
  }
}

module.exports = RedditCommentAnalyzer;
