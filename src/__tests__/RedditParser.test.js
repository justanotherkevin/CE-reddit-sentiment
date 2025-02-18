const RedditParser = require('../RedditParser');

describe('RedditParser', () => {
  describe('parse', () => {
    it('should parse both post and comments correctly', () => {
      const mockResponse = [
        {
          data: {
            children: [{
              data: {
                id: 'post123',
                title: 'Test Post',
                author: 'testUser',
                selftext: 'Test content',
                score: 100,
                created_utc: 1613579200,
                num_comments: 5,
                permalink: '/r/test/comments/post123',
                url: 'https://reddit.com/r/test/post123'
              }
            }]
          }
        },
        {
          data: {
            children: [{
              data: {
                id: 'comment123',
                author: 'commenter1',
                body: 'Test comment',
                score: 50,
                created_utc: 1613579300,
                permalink: '/r/test/comments/post123/comment123',
                depth: 0,
                replies: {
                  data: {
                    children: [{
                      data: {
                        id: 'reply123',
                        author: 'replier1',
                        body: 'Test reply',
                        score: 25,
                        created_utc: 1613579400,
                        permalink: '/r/test/comments/post123/reply123',
                        depth: 1,
                        replies: ''
                      }
                    }]
                  }
                }
              }
            }]
          }
        }
      ];

      const result = RedditParser.parse(mockResponse);

      // Test post parsing
      expect(result.post).toEqual({
        id: 'post123',
        title: 'Test Post',
        author: 'testUser',
        selftext: 'Test content',
        score: 100,
        created_utc: 1613579200,
        num_comments: 5,
        permalink: '/r/test/comments/post123',
        url: 'https://reddit.com/r/test/post123'
      });

      // Test comments parsing
      expect(result.comments).toHaveLength(1);
      expect(result.comments[0]).toEqual({
        id: 'comment123',
        author: 'commenter1',
        body: 'Test comment',
        score: 50,
        created_utc: 1613579300,
        permalink: '/r/test/comments/post123/comment123',
        depth: 0,
        replies: [{
          id: 'reply123',
          author: 'replier1',
          body: 'Test reply',
          score: 25,
          created_utc: 1613579400,
          permalink: '/r/test/comments/post123/reply123',
          depth: 1,
          replies: []
        }]
      });
    });

    it('should handle null response', () => {
      const result = RedditParser.parse(null);
      expect(result.post).toBeNull();
      expect(result.comments).toHaveLength(0);
    });
  });

  describe('parsePost', () => {
    it('should parse post data correctly', () => {
      const mockListing = {
        data: {
          children: [{
            data: {
              id: 'post123',
              title: 'Test Post',
              author: 'testUser',
              selftext: 'Test content',
              score: 100,
              created_utc: 1613579200,
              num_comments: 5,
              permalink: '/r/test/comments/post123',
              url: 'https://reddit.com/r/test/post123'
            }
          }]
        }
      };

      const result = RedditParser.parsePost(mockListing);
      expect(result).toEqual({
        id: 'post123',
        title: 'Test Post',
        author: 'testUser',
        selftext: 'Test content',
        score: 100,
        created_utc: 1613579200,
        num_comments: 5,
        permalink: '/r/test/comments/post123',
        url: 'https://reddit.com/r/test/post123'
      });
    });

    it('should handle null listing', () => {
      expect(RedditParser.parsePost(null)).toBeNull();
    });
  });

  describe('parseComments', () => {
    it('should parse comments correctly', () => {
      const mockListing = {
        data: {
          children: [{
            data: {
              id: 'comment123',
              author: 'commenter1',
              body: 'Test comment',
              score: 50,
              created_utc: 1613579300,
              permalink: '/r/test/comments/post123/comment123',
              depth: 0,
              replies: ''
            }
          }]
        }
      };

      const result = RedditParser.parseComments(mockListing);
      expect(result).toHaveLength(1);
      expect(result[0]).toEqual({
        id: 'comment123',
        author: 'commenter1',
        body: 'Test comment',
        score: 50,
        created_utc: 1613579300,
        permalink: '/r/test/comments/post123/comment123',
        depth: 0,
        replies: []
      });
    });

    it('should handle null listing', () => {
      expect(RedditParser.parseComments(null)).toHaveLength(0);
    });
  });

  describe('parseComment', () => {
    it('should parse single comment correctly', () => {
      const mockCommentData = {
        data: {
          id: 'comment123',
          author: 'commenter1',
          body: 'Test comment',
          score: 50,
          created_utc: 1613579300,
          permalink: '/r/test/comments/post123/comment123',
          depth: 0,
          replies: ''
        }
      };

      const result = RedditParser.parseComment(mockCommentData);
      expect(result).toEqual({
        id: 'comment123',
        author: 'commenter1',
        body: 'Test comment',
        score: 50,
        created_utc: 1613579300,
        permalink: '/r/test/comments/post123/comment123',
        depth: 0,
        replies: []
      });
    });

    it('should handle deleted comments', () => {
      const mockCommentData = {
        data: {
          id: 'comment123',
          author: 'commenter1',
          body: '[deleted]',
          score: 50,
          created_utc: 1613579300,
          permalink: '/r/test/comments/post123/comment123',
          depth: 0
        }
      };

      expect(RedditParser.parseComment(mockCommentData)).toBeNull();
    });

    it('should handle null comment data', () => {
      expect(RedditParser.parseComment(null)).toBeNull();
    });
  });
});
