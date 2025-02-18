const RedditCommentAnalyzer = require("../commentAnalyzer");

describe("RedditCommentAnalyzer", () => {
  let analyzer;

  beforeEach(() => {
    // Creates a fresh analyzer instance before each test
    analyzer = new RedditCommentAnalyzer();
  });

  describe("analyzeSentiment", () => {
    it("should classify positive sentiment correctly", () => {
      const text = "This is amazing and wonderful!";
      expect(analyzer.analyzeSentiment(text)).toBe("positive");
    });

    it("should classify negative sentiment correctly", () => {
      const text = "This is terrible and horrible.";
      expect(analyzer.analyzeSentiment(text)).toBe("negative");
    });

    it("should classify neutral sentiment correctly", () => {
      const text = "This is okay.";
      expect(analyzer.analyzeSentiment(text)).toBe("neutral");
    });
  });

  describe("calculateWeight", () => {
    it("should calculate logarithmic weight correctly", () => {
      expect(analyzer.calculateWeight(100)).toBeCloseTo(Math.log(101));
      expect(analyzer.calculateWeight(0)).toBe(0);
      expect(analyzer.calculateWeight(-10)).toBeCloseTo(Math.log(11));
    });
  });

  describe("groupBySentiment", () => {
    it("should group comments by sentiment correctly", () => {
      const comments = [
        { sentiment: "positive", text: "great", weight: 1 },
        { sentiment: "negative", text: "bad", weight: 1 },
        { sentiment: "neutral", text: "okay", weight: 1 },
        { sentiment: "positive", text: "awesome", weight: 1 },
      ];

      const grouped = analyzer.groupBySentiment(comments);

      expect(grouped.positive).toHaveLength(2);
      expect(grouped.negative).toHaveLength(1);
      expect(grouped.neutral).toHaveLength(1);
    });
  });

  describe("analyzeComments", () => {
    it("should analyze and group multiple comments correctly", async () => {
      const comments = [
        {
          text: "This is amazing!",
          score: 100,
        },
        {
          text: "This is terrible.",
          score: 50,
        },
        {
          text: "This is okay.",
          score: 25,
        },
      ];

      const results = await analyzer.analyzeComments(comments);

      expect(results).toHaveProperty("positive");
      expect(results).toHaveProperty("negative");
      expect(results).toHaveProperty("neutral");

      // Verify structure of results
      Object.values(results).forEach((group) => {
        group.forEach((comment) => {
          expect(comment).toHaveProperty("keyPoints");
          expect(comment).toHaveProperty("upvotes");
          expect(comment).toHaveProperty("weight");
        });
      });
    });

    it("should handle empty comments array", async () => {
      const results = await analyzer.analyzeComments([]);

      expect(results.positive).toHaveLength(0);
      expect(results.negative).toHaveLength(0);
      expect(results.neutral).toHaveLength(0);
    });
  });

  describe("extractKeyPoints", () => {
    it("should return original text for short content", async () => {
      const text = "This is a short comment. It has two sentences.";
      const keyPoints = await analyzer.extractKeyPoints(text);
      expect(keyPoints).toBe(text);
    });

    it("should extract key points from longer text", async () => {
      const text =
        "The new AI model has shown remarkable progress in natural language processing. " +
        "Researchers found that it performs particularly well on complex reasoning tasks. " +
        "The model uses a novel architecture that combines attention mechanisms with sparse coding. " +
        "This breakthrough could lead to significant improvements in various AI applications. " +
        "The team plans to release their findings in a peer-reviewed journal next month.";
      const keyPoints = await analyzer.extractKeyPoints(text);

      expect(keyPoints).toBeTruthy();
      expect(typeof keyPoints).toBe("string");
      expect(keyPoints.length).toBeLessThan(text.length);
    });

    it("should handle short text appropriately", async () => {
      const text = "Short comment.";
      const keyPoints = await analyzer.extractKeyPoints(text);

      expect(keyPoints).toBeTruthy();
    });
  });
});
