// Listenner for the incoming messages from the popup script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  
  // If the massage action is "start"
  if (message.action === "start") {
    console.log("Start message received in background script.");
    
    // Passing the message to the active tab
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "start" });
      } else {
        console.error("No active tab found.");
      }
    });
  }

  //If message action is "stop"
  if (message.action === "stop") {
    console.log("Stop message received in background script.");
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "stop" });
      }
    });
  }

  // Sending the response
  sendResponse({ status: "received" });
});

  