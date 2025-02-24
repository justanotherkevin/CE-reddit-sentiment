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

function displayResults(container, sentimentData) {
  // Remove any existing results
  const existingResults = document.querySelector(".reddit-sentiment-results");
  if (existingResults) {
    existingResults.remove();
  }

  const resultsDiv = document.createElement("div");
  resultsDiv.className = "reddit-sentiment-results";
  resultsDiv.style.cssText =
    "margin: 20px 0; padding: 15px; border: 1px solid #ccc; border-radius: 4px;";

  // Create sections for positive and negative comments
  const sections = [
    {
      title: "Positive Points",
      comments: sentimentData.positive,
      className: "positive",
    },
    {
      title: "Negative Points",
      comments: sentimentData.negative,
      className: "negative",
    },
  ];

  sections.forEach((section) => {
    const sectionDiv = document.createElement("div");
    sectionDiv.className = `section ${section.className}`;
    sectionDiv.innerHTML = `<h3 style="margin: 0 0 10px 0;">${section.title} (${section.comments.length})</h3>`;

    section.comments.forEach((comment) => {
      const commentDiv = document.createElement("div");
      commentDiv.className = "comment";
      commentDiv.style.cssText =
        "margin: 10px 0; padding: 10px; border-left: 3px solid " +
        (section.className === "positive" ? "#4CAF50" : "#f44336");
      commentDiv.innerHTML = `
        <div style="font-weight: bold; margin-bottom: 5px;">u/${comment.author}</div>
        <div>${comment.body}</div>
      `;
      sectionDiv.appendChild(commentDiv);
    });

    resultsDiv.appendChild(sectionDiv);
  });

  // Insert results after the container
  container.parentNode.insertBefore(resultsDiv, container.nextSibling);
}

function addAnalyzeButton() {
  // Find all post containers that don't already have our button
  const subgridContainer = document.querySelector(
    "#subgrid-container shreddit-post"
  );

  // Create the button
  const button = document.createElement("button");
  button.textContent = "Analyze Comments";
  button.style.cssText = `
      margin: 10px 0;
      padding: 8px 16px;
      background-color: #0079D3;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-weight: bold;
    `;

  button.addEventListener("click", async () => {
    button.disabled = true;
    button.textContent = "Analyzing...";

    try {
      const comments = await fetchComments();
      const sentimentData = getCommentsSentiment(comments);
      displayResults(container, sentimentData);
    } catch (error) {
      console.error("Error analyzing comments:", error);
    } finally {
      button.disabled = false;
      button.textContent = "Analyze Comments";
    }
  });
  subgridContainer.appendChild(button);
}

// Run initially and also watch for new posts being added
addAnalyzeButton();

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
