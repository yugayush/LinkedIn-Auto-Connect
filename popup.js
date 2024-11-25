document.getElementById("runScript").addEventListener("click", () => {
  const loading = document.getElementById("loading");
  const stopButton = document.getElementById("stopScript");

  // Show the loading animation and Stop button
  loading.style.display = "block";
  stopButton.style.display = "block";

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const tabId = tabs[0].id;

    // Inject content.js if not already present
    chrome.scripting.executeScript(
      {
        target: { tabId: tabId },
        files: ["content.js"],
      },
      () => {
        // Send a start message to content.js
        chrome.tabs.sendMessage(tabId, { action: "start" });
      }
    );
  });
});

//Listen for updates from content.js
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "progress" && typeof message.count === "number") {
    // Update the counter inside the spinenr
    console.log(`Received count update: ${message.count}`);
    document.getElementById("requestCount").innerText = message.count;
  }
});

document.getElementById("stopScript").addEventListener("click", () => {
  const loading = document.getElementById("loading");
  const stopButton = document.getElementById("stopScript");

  // Hide the loading animation and Stop button
  loading.style.display = "none";
  stopButton.style.display = "none";

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const tabId = tabs[0].id;

    // Send a stop message to content.js
    chrome.tabs.sendMessage(tabId, { action: "stop" });
  });
});

