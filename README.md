# Zemen Bingo — Multiplayer Server

Real-time multiplayer Bingo game with WebSocket server and Telegram Mini App support.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the server
npm start

# 3. Open in browser
open http://localhost:3000
```

## Production environment

Create a `.env` file from the sample before deploy:

```bash
cp .env.example .env
```

## How Multiplayer Works

- Players open `http://localhost:3000` in their browser
- Each player joins a stake room
- The server waits for players, then starts the game
- A number is called every few seconds (server-side)
- Players claim BINGO and the server verifies the pattern
- Winners receive payouts from the pot

## Architecture

```
server.js          — Express + WebSocket game server
public/index.html  — Frontend (served statically)
telegram-bot.js    — standalone Telegram bot flow
```

## Deploying to Production

### Render (easiest free path)
1. Push this repo to GitHub
2. Create a new Web Service on Render
3. Use the repository root
4. Build command: `npm install`
5. Start command: `npm start`
6. Add environment variables from `.env.example`

### Railway
```bash
npm install -g @railway/cli
railway login
railway up
```

### VPS / Ubuntu
```bash
npm install -g pm2
pm2 start server.js --name zemen-bingo
pm2 save
pm2 startup
```

## Environment variables

Use these in Render, Railway, or a .env file:

```env
PORT=3000
BOT_TOKEN=your_telegram_bot_token
GAME_URL=https://your-public-app-url.com
DATABASE_URL=postgresql://user:pass@host:5432/dbname
MIGRATE_SECRET=change_me_long_random_string
```

## Telegram Mini App Integration

This app is designed to open inside Telegram via a web_app button using the public `GAME_URL`.

```javascript
reply_markup: {
  inline_keyboard: [[{
    text: '🎮 Play Zemen Bingo',
    web_app: { url: 'https://your-public-app-url.com?tid=123456' }
  }]]
}
```

## Game Config (server.js)

```javascript
const CALL_INTERVAL_MS = 5000;
const CLAIM_WINDOW_MS = 5000;
const LOBBY_WAIT_MS = 15000;
```
