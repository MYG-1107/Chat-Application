# Chat-Application

A real-time chat application built with React, Redux, Redux-Saga, and WebSockets.

## Architecture

- **Client**: React + Redux + Redux-Saga + WebSocket (browser native)
- **Server**: Node.js + ws (WebSocket library)

## Features

- Real-time messaging between multiple connected clients
- Automatic username generation using [Chance.js](https://chancejs.com/)
- Live users list that updates when users join or leave
- Clean retro-style UI using CSS Grid

## Project Structure

```
├── public/             # Static HTML
├── src/
│   ├── actions/        # Redux action types and creators
│   ├── components/     # Presentational + container components
│   │   ├── AddMessage/ # Message input box
│   │   ├── Message/    # Single message
│   │   ├── MessagesList/ # List of messages
│   │   └── Sidebar/    # Users list
│   ├── reducers/       # Redux reducer
│   ├── sagas/          # Redux-Saga side effects
│   └── utils/
│       ├── name.js     # Random username generator
│       └── setupSocket.js  # WebSocket client setup
└── server/             # Node.js WebSocket server
    └── index.js
```

## Getting Started

### Start the WebSocket server

```bash
cd server
npm install
npm start
```

The server runs on `ws://localhost:8888`.

### Start the React client

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) in multiple browser tabs to chat.

## Running Tests

```bash
npm test
```

## Build

```bash
npm run build
```