// content.js
/* purpose of this file:
Runs in the context of the web page (Reddit pages)
Has direct access to the webpage's DOM and can manipulate it
Can interact with the actual web page content
Runs every time you visit a matching page (as defined in manifest.json's matches pattern)
*/

// RedditParser is available globally
/**
 * Convert a Reddit URL to its JSON API endpoint
 * @param {string} url - Reddit post URL
 * @returns {string} JSON API URL
 */
function getJsonUrl(url) {
  // Remove trailing slash if present
  url = url.replace(/\/$/, "");
  // Add .json if not present
  if (!url.endsWith(".json")) {
    url += ".json";
  }
  return url;
}

// For testing purposes
const useMockRedditCommentsData = false;

async function fetchComments() {
  console.log("should useMockRedditCommentsData", useMockRedditCommentsData);
  try {
    let data;
    if (useMockRedditCommentsData) {
      data = mockRedditData;
    } else {
      // Current url to Reddit JSON endpoint
      const jsonUrl = getJsonUrl(window.location.href);
      const response = await fetch(jsonUrl);

      if (!response.ok) {
        throw new Error(`Failed to fetch comments: ${response.status}`);
      }

      data = await response.json();
    }

    // Parse the Reddit API response
    const parsedData = RedditParser.parse(data);
    return parsedData.comments;
  } catch (error) {
    console.error("Error fetching comments:", error);
    return [];
  }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("chrome.runtime", request);
  if (request.action === "getComments") {
    fetchComments().then((comments) => {
      console.log("on success fetchComments ", comments);
      sendResponse(comments);
    });
    return true; // Required for async response
  }
});
