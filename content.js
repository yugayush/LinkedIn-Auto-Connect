let stopRequested = false;

// Listen for messages from the background scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "start") {
    console.log("Received start message.");
    stopRequested = false;
    sendConnectionRequests();
    sendResponse({ status: "Script started" });
  } else if (message.action === "stop") {
    console.log("Received stop message.");
    stopRequested = true;
    sendResponse({ status: "Script stopped" });
  }
});

//Counter to keep track of number of connections sent
let requestCount = 0;

// Function to send connection requests
function sendConnectionRequests() {
  const buttons = document.querySelectorAll("button");
  let index = 0;

  function clickNextButton() {
    if (stopRequested) {
      console.log("Script stopped by user.");
      return;
    }

    if (index >= buttons.length) {
      console.log("Completed processing all buttons.");
      return;
    }

    // Click the button if it says "Connect"
    const button = buttons[index];
    if (button.innerText === "Connect") {
      button.click();
      requestCount++;
      chrome.runtime.sendMessage({ type: "progress", count: requestCount });
      console.log(`Clicked Connect for profile at index ${index}. Total requests sent: ${requestCount}`);
    } else {
      console.log(`Skipped profile at index ${index}`);
    }

    index++;//Move to the next button
    
    // Random delay between 5-10 seconds
    const delay = Math.floor(Math.random() * (10 - 5 + 1)) + 5; // Random delay 5-10s
    setTimeout(clickNextButton, delay * 1000);
  }

  clickNextButton();
}

  
  

