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
      // If text is too short or has too few sentences, return it as is
      const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
      if (text.length < 200 || sentences.length < 3) {
        return text;
      }

      const summarizer = new SummarizerManager(text, Math.min(2, sentences.len  gth));
      try {
        const summaryObj = await summarizer.getSummaryByRank();
        return summaryObj.summary;
      } catch (summaryError) {
        // If summarization fails, try frequency-based approach as fallback
        const freqSummary = summarizer.getSummaryByFrequency();
        return freqSummary.summary;
      }
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
