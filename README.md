# LinkedIn AutoConnect Chrome Extension

This Chrome extension automates sending LinkedIn connection requests while providing a live count of requests sent.

## Features
- Automates sending LinkedIn connection requests.
- Displays a live count of Requests sent.
- Simple start and stop button for better user control.

---

## How to Run the Extension
Follow these steps to install and run the extension locally:

1. **Download or Clone the Repository**
   - Clone this repository using:
     ```bash
     git clone https://github.com/your-username/LinkedIn-AutoConnect.git
     ```
   - Or download the ZIP and extract it.

2. **Load the Extension in Chrome**
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable **Developer Mode** (toggle in the top right corner).
   - Click **Load unpacked** and select the folder containing this project.

3. **Use the Extension**
   - Open LinkedIn and navigate to a search or connections page.
   - Click the extension icon in the toolbar.
   - Click **Run** to start sending connection requests.
   - The spinner will show the live count of sent requests.
   - Click **Stop** to halt the process.

---

## Architecture and Design Discussion

### Understanding the problem statement
The goal of the script was to automate sending LinkedIn connection requests while maintaining user control (ability to start/stop the process) and providing a live progress indicator. These requirements guided the architecture:
-A popup UI for user interaction.
-Acontent script to interact with the webpage.
-A background script to manage communication between components.

### Architecture Overview
The project is designed with a modular approach:
- **popup.js**: Handles user interactions in the popup interface, including starting and stopping the script.
- **content.js**: Runs in the context of the LinkedIn page, automating connection requests.
- **manifest.json**: Configures the extension, specifying permissions and linking other files.
- **background.js**: Acts as a bridge between the popup and content scripts to ensure smooth communication.

### Key Considerations
- **User Control**: The architecture prioritizes user control with clearly defined start/stop actions.
- **Live Updates**: The counter uses Chrome messaging to update dynamically, ensuring real-time feedback.

---

## Contributing
Feel free to fork this repository and submit pull requests for enhancements or bug fixes.

