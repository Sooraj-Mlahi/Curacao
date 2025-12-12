# Curaçao AI Travel Assistant

A beautiful, AI-powered travel assistant for Curaçao. Built with React, TailwindCSS, Express, and OpenAI.

## Features

- **AI Chat Assistant**: Real-time conversations powered by OpenAI GPT-4o
- **Destination Explorer**: Interactive guide to top Curaçao locations
- **Tropical Design**: Clean, modern UI inspired by the Caribbean

## Tech Stack

- **Frontend**: React 19, TailwindCSS, Wouter, Framer Motion
- **Backend**: Node.js, Express
- **AI**: OpenAI API (GPT-4o)
- **Styling**: Radix UI components, Lucide icons

---

## Local Development Setup (Windows)

### Prerequisites

1. **Node.js** (v18 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **OpenAI API Key**
   - Get one from: https://platform.openai.com/api-keys

### Step 1: Clone or Download the Project

```bash
# If using git
git clone <your-repo-url>
cd curacao-ai-assistant

# Or download and extract the ZIP file
```

### Step 2: Install Dependencies

Open Command Prompt or PowerShell in the project folder:

```bash
npm install
```

### Step 3: Configure Environment Variables

1. Copy the example environment file:
   ```bash
   copy .env.example .env
   ```

2. Open `.env` in a text editor (Notepad, VS Code, etc.)

3. Replace the placeholder with your actual OpenAI API key:
   ```
   OPENAI_API_KEY=sk-your-actual-api-key-here
   ```

### Step 4: Run the Application

**Option A: Using the cross-platform script (Recommended)**
```bash
npm run dev
```

**Option B: If Option A doesn't work on Windows**
```bash
set NODE_ENV=development && npx tsx server/index.ts
```

### Step 5: Open in Browser

Once the server starts, open your browser and go to:
```
http://localhost:5000
```

---

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components (Home, Chat, Explore)
│   │   └── lib/            # Utilities and helpers
│   └── index.html
├── server/                 # Backend Express server
│   ├── index.ts            # Server entry point
│   └── routes.ts           # API routes (including /api/chat)
├── shared/                 # Shared types and schemas
├── .env.example            # Environment variables template
└── package.json
```

---

## API Endpoints

### POST /api/chat

Send a message to the AI assistant.

**Request Body:**
```json
{
  "message": "What are the best beaches in Curaçao?",
  "history": []  // Optional: previous messages for context
}
```

**Response:**
```json
{
  "response": "Bon bini! Curaçao has amazing beaches..."
}
```

---

## Troubleshooting

### "OPENAI_API_KEY is not set"
- Make sure you created a `.env` file (not `.env.example`)
- Make sure the API key is correct and has no extra spaces

### "Port 5000 already in use"
- Close any other applications using port 5000
- Or change the PORT in `.env`: `PORT=3000`

### "cross-env is not recognized" (Windows)
Use the alternative command:
```bash
set NODE_ENV=development && npx tsx server/index.ts
```

### Slow AI responses
- This is normal - OpenAI API calls take 2-5 seconds
- The typing indicator shows while waiting

---

## Building for Production

```bash
npm run build
npm start
```

---

## License

MIT License - Built for demonstration purposes.
