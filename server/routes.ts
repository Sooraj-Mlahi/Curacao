import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const SYSTEM_PROMPT = `You are a friendly and knowledgeable AI travel assistant specializing in Curaçao, the beautiful Caribbean island. Your name is "Island Assistant".

Your expertise includes:
- Beaches and snorkeling spots (Blue Bay, Mambo Beach, Playa Lagun, Cas Abao, Grote Knip, Klein Curaçao)
- Local cuisine (Keshi Yena, Stoba, Kadushi soup, fresh seafood)
- Cultural attractions (Willemstad, Handelskade, Queen Emma Bridge, Kura Hulanda Museum)
- Outdoor activities (Christoffel National Park hiking, diving, boat trips)
- Practical travel tips (weather, transportation, safety, best times to visit)

Guidelines:
- Be warm, enthusiastic, and use "Bon bini" (welcome in Papiamento) when appropriate
- Give specific, actionable recommendations
- Use markdown formatting: **bold** for emphasis, bullet points for lists
- Keep responses concise but informative (2-4 paragraphs max)
- If asked about something outside Curaçao travel, politely redirect to island topics
- Always be helpful and positive about the destination`;

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Chat endpoint for AI assistant
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;

      if (!message || typeof message !== "string") {
        return res.status(400).json({ error: "Message is required" });
      }

      // Build messages array with history
      const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [
        { role: "system", content: SYSTEM_PROMPT },
      ];

      // Add conversation history if provided
      if (history && Array.isArray(history)) {
        for (const msg of history.slice(-10)) { // Keep last 10 messages for context
          if (msg.role === "user" || msg.role === "assistant") {
            messages.push({ role: msg.role, content: msg.content });
          }
        }
      }

      // Add the current message
      messages.push({ role: "user", content: message });

      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages,
        max_tokens: 1024,
      });

      const aiResponse = response.choices[0]?.message?.content || "I apologize, but I couldn't generate a response. Please try again.";

      res.json({ response: aiResponse });
    } catch (error: any) {
      console.error("OpenAI API Error:", error);
      
      if (error?.status === 401) {
        return res.status(500).json({ error: "Invalid API key. Please check your OpenAI API key." });
      }
      
      res.status(500).json({ 
        error: "Failed to get AI response. Please try again.",
        fallback: "Bon bini! I'm having a little trouble connecting right now. In the meantime, I'd recommend checking out **Mambo Beach** for a lively atmosphere or **Playa Lagun** for amazing snorkeling!"
      });
    }
  });

  return httpServer;
}
