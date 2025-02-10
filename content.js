// content.js
/* purpose of this file:
Runs in the context of the web page (in your case, Reddit pages)
Has direct access to the webpage's DOM and can manipulate it
Can interact with the actual web page content
Runs every time you visit a matching page (as defined in manifest.json's matches pattern)
*/
function getJsonUrl(locationHref) {
  let url = locationHref.slice(0, locationHref.length - 1);
  const hasSlashSuffix = url.endsWith("/");
  const hasJsonSuffix = url.endsWith("/.json");
  if (hasSlashSuffix) {
    url = url.slice(0, -1);
  }
  return url + (!hasJsonSuffix ? "/.json" : "");
}

const extractCommentsFromData = (data) => {
  const comments = [];
  // The comments are in the second item of the array
  if (
    data[1] &&
    data[1].data &&
    data[1].data.children &&
    Array.isArray(data[1].data.children)
  ) {
    data[1].data.children.forEach((child) => {
      const processedComment = processComments(child);
      if (processedComment) {
        comments.push(processedComment);
      }
    });
  }
  console.log("comments", comments);
  return comments;
};

// For testing purposes
const useMockData = true;

async function fetchComments() {
  console.log("should useMockData", useMockData);
  try {
    let data;
    if (useMockData) {
      // Use mock data for testing
      console.log("mockRedditData", mockRedditData);
      data = mockRedditData;
    } else {
      // Current url to Reddit JSON endpoint
      const jsonUrl = getJsonUrl(window.location.href);
      const response = await fetch(jsonUrl);

      if (!response.ok) throw new Error("Failed to fetch comments");

      data = await response.json();
      console.log("data json", data);
    }
    // Extract comments from the JSON response
    return extractCommentsFromData(data);
  } catch (error) {
    console.error("Error fetching comments:", error);
    return [];
  }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("chrome.runtime", request);
  if (request.action === "getComments") {
    fetchComments().then((comments) => {
      sendResponse(comments);
    });
    return true; // Required for async response
  }
});
