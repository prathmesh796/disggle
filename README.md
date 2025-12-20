# Disggle

**Disggle** is a Discord Rich Presence integration for Kaggle that displays your Kaggle activity directly on your Discord profile. Show off your data science work, competitions, and notebooks to your Discord friends in real-time!

## 🌟 Features

- **Real-time Kaggle Activity**: Displays your current Kaggle activity on Discord
- **Chrome Extension Integration**: Seamlessly tracks your Kaggle browsing activity
- **Discord Rich Presence**: Shows detailed information about what you're working on
- **Easy Setup**: Simple three-step installation process
- **Privacy-Focused**: Runs locally on your machine

## 📋 Prerequisites

Before installing Disggle, make sure you have:

- Google Chrome browser
- Node.js (v14 or higher) and npm installed
- A Discord account
- A Kaggle account

## 🚀 Installation

### Step 1: Set up the Chrome Extension

1. Clone or download this repository
2. Navigate to the `/extension/` folder
3. Install dependencies and build the extension:
   ```bash
   cd extension
   npm install
   npm run build
   ```
4. Open Chrome and go to `chrome://extensions/`
5. Enable **Developer mode** (toggle in the top-right corner)
6. Click **Load unpacked** and select the `/extension/dist/` folder

### Step 2: Authorize Discord App

1. Add the Disggle Discord app to your account by clicking this link:
   
   [Authorize Discord App](https://discord.com/oauth2/authorize?client_id=1437065833137438754)

2. Make sure you are logged into your Discord account in your browser

### Step 3: Run the RPC Server

1. Navigate to the `/rpc-server/` folder:
   ```bash
   cd rpc-server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm run start
   ```

The RPC server will now be running and listening for activity from the Chrome extension.

## 🎯 How It Works

1. **Chrome Extension**: Monitors your Kaggle activity in the browser
2. **Local RPC Server**: Receives activity data from the extension
3. **Discord Integration**: Updates your Discord Rich Presence with Kaggle activity

## 🛠️ Technologies Used

- **TypeScript**: For type-safe development
- **Express.js**: Backend server for RPC communication
- **Discord Rich Presence**: For Discord integration
- **Chrome Extension API**: Browser extension functionality

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## ⚠️ Note

Keep the RPC server running in the background while using Kaggle for the Discord presence to update in real-time.