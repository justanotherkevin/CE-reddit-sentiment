// RedditParser.js
/**
 * A lightweight parser for Reddit's JSON API responses
 */
class RedditParser {
  /**
   * Parse a Reddit JSON API response into a structured format
   * @param {Object} response - Raw JSON response from Reddit's API
   * @returns {Object} Parsed Reddit data
   */
  static parse(response) {
    const [postListing, commentListing] = response || [];

    return {
      post: this.parsePost(postListing),
      comments: this.parseComments(commentListing),
    };
  }

  /**
   * Parse post data from a listing
   * @param {Object} listing - Post listing object
   * @returns {Object} Parsed post data
   */
  static parsePost(listing) {
    const post = listing?.data?.children?.[0]?.data;
    if (!post) return null;

    return {
      id: post.id,
      title: post.title,
      author: post.author,
      selftext: post.selftext,
      score: post.score,
      created_utc: post.created_utc,
      num_comments: post.num_comments,
      permalink: post.permalink,
      url: post.url,
    };
  }

  /**
   * Parse comments from a listing
   * @param {Object} listing - Comment listing object
   * @returns {Array} Array of parsed comments
   */
  static parseComments(listing) {
    const comments = [];
    const children = listing?.data?.children || [];

    for (const child of children) {
      const comment = this.parseComment(child);
      if (comment) {
        comments.push(comment);
      }
    }

    return comments;
  }

  /**
   * Parse a single comment
   * @param {Object} commentData - Raw comment data
   * @returns {Object} Parsed comment data
   */
  static parseComment(commentData) {
    const comment = commentData?.data;
    if (!comment || comment.body === "[deleted]") return null;

    return {
      id: comment.id,
      author: comment.author,
      body: comment.body,
      score: comment.score,
      created_utc: comment.created_utc,
      permalink: comment.permalink,
      depth: comment.depth,
      replies: comment.replies ? this.parseComments(comment.replies) : [],
    };
  }
}

window.RedditParser = RedditParser;
