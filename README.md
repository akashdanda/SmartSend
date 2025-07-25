# My Chrome Extension with Secure Backend

This project contains two parts:

1. **Backend** — An Express server that securely stores and uses the OpenAI API key.
2. **Extension** — A Chrome extension frontend that interacts with the backend to perform tasks (e.g., generating email replies).

---

## Folder Structure

project-root/
├── backend/ # Express backend server
│ ├── server.js
│ ├── .env
│ └── ...
├── extension/ # Chrome extension source code
│ ├── manifest.json
│ ├── popup.html
│ ├── popup.js
│ └── ...

yaml
Copy
Edit

---

## Setup Instructions

### Backend

1. Navigate to the `backend` folder:
   ```bash
   cd backend
Install dependencies:

bash
Copy
Edit
npm install
Create a .env file in the backend folder with your OpenAI API key:

ini
Copy
Edit
API_KEY=your_openai_api_key_here
Start the backend server:

bash
Copy
Edit
node server.js
The server will run by default on http://localhost:3000.

Extension
Open Chrome and go to chrome://extensions/

Enable Developer mode (top right).

Click Load unpacked.

Select the extension folder from this project.

The extension should now be loaded and ready to use.

Usage
When you trigger the extension’s UI, it sends requests to the backend.

The backend securely uses your OpenAI API key to process requests and sends back responses.

Your API key never leaves the backend.

Notes
Make sure your backend server is running before using the extension.

The extension’s manifest.json includes permission to access http://localhost:3000/* (update if you deploy your backend elsewhere).

Keep your .env file private and do not commit it to version control.