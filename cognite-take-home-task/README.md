# Whispr Messenger

A simple Messenger app built with React and TypeScript.

## Features
- Write and send messages in a chat window
- Select a friend to view and chat with them
- Emoji picker support in the message input
- Avatars generated from user initials
- Responsive, modern UI
- No backend or persistence (in-memory only)

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)

### Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open your browser and go to [http://localhost:5173](http://localhost:5173)

## Project Structure
- `src/App.tsx` — Main app logic and layout
- `src/components/` — UI components (FriendList, ChatWindow, MessageInput)
- `src/types/` — TypeScript types for Friend and Message
- `src/assets/` — Static assets (e.g., logo)

## Notes
- This app is for demonstration purposes only. There is no backend or persistent storage.
- All chat data is lost on refresh.

## Assignment Goals
- [x] User can write messages and see them appear
- [x] User can select a friend and see their chat
- [x] No backend, persistence, or multi-user support

---
