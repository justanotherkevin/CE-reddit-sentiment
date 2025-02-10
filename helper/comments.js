// Helper function to process comments recursively
function processComments(commentData) {
  if (!commentData || !commentData.data) return null;

  const comment = {
    id: commentData.data.id,
    author: commentData.data.author,
    body: commentData.data.body,
    score: commentData.data.score,
    replies: [],
  };

  // Process replies if they exist
  if (
    commentData.data.replies &&
    commentData.data.replies.data &&
    commentData.data.replies.data.children
  ) {
    commentData.data.replies.data.children.forEach((reply) => {
      const processedReply = processComments(reply);
      if (processedReply) {
        comment.replies.push(processedReply);
      }
    });
  }

  return comment;
}

function analyzeSentiment(text) {
  // List of positive and negative words/phrases
  const positiveWords = [
    'good', 'great', 'awesome', 'excellent', 'happy',
    'love', 'wonderful', 'fantastic', 'helpful', 'best',
    'amazing', 'perfect', 'thanks', 'appreciate', 'useful',
    'clear', 'nice', 'well', 'solved', 'works'
  ];

  const negativeWords = [
    'bad', 'terrible', 'awful', 'horrible', 'hate',
    'worst', 'useless', 'poor', 'disappointing', 'confused',
    'difficult', 'wrong', 'not working', 'broken', 'issue',
    'problem', 'error', 'bug', 'fail', 'sucks'
  ];

  // Convert text to lowercase for case-insensitive matching
  const lowerText = text.toLowerCase();
  
  // Count positive and negative matches
  let positiveCount = 0;
  let negativeCount = 0;

  positiveWords.forEach(word => {
    const regex = new RegExp('\\b' + word + '\\b', 'g');
    const matches = (lowerText.match(regex) || []).length;
    positiveCount += matches;
  });

  negativeWords.forEach(word => {
    const regex = new RegExp('\\b' + word + '\\b', 'g');
    const matches = (lowerText.match(regex) || []).length;
    negativeCount += matches;
  });

  // Return sentiment score
  return positiveCount - negativeCount;
}

function getCommentsSentiment(comments) {
  console.log("getCommentsSentiment", comments);
  const positivePoints = [];
  const negativePoints = [];
  const neutralPoints = [];

  if (comments) {
    comments.forEach((comment) => {
      const sentiment = analyzeSentiment(comment.body);
      if (sentiment > 0) {
        positivePoints.push(comment);
      } else if (sentiment < 0) {
        negativePoints.push(comment);
      } else {
        neutralPoints.push(comment);
      }
    });
  }
  
  return { 
    positive: positivePoints, 
    negative: negativePoints,
    neutral: neutralPoints 
  };
}
