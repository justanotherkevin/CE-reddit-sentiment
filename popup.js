// popup.js
/* purpose of this file:
Runs in the context of the extension's popup window
Only executes when the user clicks the extension icon and opens the popup
Cannot directly access the webpage's content
Used for:
- Creating the extension's user interface
- Handling popup UI interactions
- Communicating with content scripts via messages
- Displaying results/data to the user
*/

// Moved analyzeSentiment function to helper/comments.js

function displayResults(positivePoints, negativePoints) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  // Positive section
  const positiveSection = document.createElement("div");
  positiveSection.className = "section positive";
  positiveSection.innerHTML = `<h2>Positive Points (${positivePoints.length})</h2>`;
  positivePoints.forEach((comment) => {
    const commentDiv = document.createElement("div");
    commentDiv.className = "comment";
    commentDiv.innerHTML = `
            <div class="author">u/${comment.author}</div>
            <div class="body">${comment.body}</div>
        `;
    positiveSection.appendChild(commentDiv);
  });

  // Negative section
  const negativeSection = document.createElement("div");
  negativeSection.className = "section negative";
  negativeSection.innerHTML = `<h2>Negative Points (${negativePoints.length})</h2>`;
  negativePoints.forEach((comment) => {
    const commentDiv = document.createElement("div");
    commentDiv.className = "comment";
    commentDiv.innerHTML = `
            <div class="author">u/${comment.author}</div>
            <div class="body">${comment.body}</div>
        `;
    negativeSection.appendChild(commentDiv);
  });

  resultsDiv.appendChild(positiveSection);
  resultsDiv.appendChild(negativeSection);
}

const useMockSentiment = true;

document.addEventListener("DOMContentLoaded", function () {
  const analyzeButton = document.getElementById("analyze");
  const loadingDiv = document.getElementById("loading");

  analyzeButton.addEventListener("click", function () {
    console.log("Analyze button clicked");
    loadingDiv.style.display = "block";
    analyzeButton.disabled = true;
    console.log(analyzeButton);
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      console.log("tabs", tabs);
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "getComments" },
        function (comments) {
          console.log("comments", comments);
          console.log("use mock sentiment", useMockSentiment);

          const sentimentData = useMockSentiment
            ? mockSentimentData
            : getCommentsSentiment(comments);

          if (sentimentData) {
            displayResults(sentimentData.positive, sentimentData.negative);
          } else {
            document.getElementById("results").innerHTML =
              '<div class="section">No comments found or not on a Reddit post page.</div>';
          }

          loadingDiv.style.display = "none";
          analyzeButton.disabled = false;
        }
      );
    });
  });
});
