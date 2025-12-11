import Layout from "@/components/Layout";
import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatMessage, mockAIResponse } from "@/lib/mockData";
import { cn } from "@/lib/utils";

export default function Chat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Bon bini! 🇨🇼 I'm your personal Curaçao guide. Ask me about beaches, food, or help planning your itinerary!",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Call Mock AI
    try {
      const responseText = await mockAIResponse(userMsg.content);
      
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: responseText,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (error) {
      console.error("AI Error", error);
    } finally {
      setIsTyping(false);
    }
  };

  const suggestions = [
    "Best beaches for snorkeling?",
    "Where to eat local food?",
    "Plan a 3-day trip",
    "Is it safe to walk in Willemstad?",
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-4xl h-[calc(100vh-80px)] flex flex-col">
        <div className="flex-1 bg-white rounded-3xl shadow-xl border border-border/50 overflow-hidden flex flex-col relative">
          
          {/* Header */}
          <div className="p-4 border-b bg-primary/5 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
              <Bot className="h-6 w-6" />
            </div>
            <div>
              <h2 className="font-display font-bold text-lg">Island Assistant</h2>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Online
              </div>
            </div>
          </div>

          {/* Chat Area */}
          <ScrollArea className="flex-1 p-6 bg-slate-50/50">
            <div className="flex flex-col gap-6">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    "flex gap-4 max-w-[85%]",
                    msg.role === "user" ? "self-end flex-row-reverse" : "self-start"
                  )}
                >
                  <div
                    className={cn(
                      "h-8 w-8 rounded-full flex items-center justify-center shrink-0 shadow-sm",
                      msg.role === "user" 
                        ? "bg-secondary text-secondary-foreground" 
                        : "bg-primary text-primary-foreground"
                    )}
                  >
                    {msg.role === "user" ? <User className="h-5 w-5" /> : <Bot className="h-5 w-5" />}
                  </div>
                  <div
                    className={cn(
                      "rounded-2xl px-5 py-3 shadow-sm text-sm md:text-base leading-relaxed whitespace-pre-wrap",
                      msg.role === "user"
                        ? "bg-secondary text-secondary-foreground rounded-tr-none"
                        : "bg-white text-foreground rounded-tl-none border"
                    )}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex gap-4 self-start max-w-[85%]">
                  <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-none px-5 py-4 border shadow-sm flex items-center gap-1">
                    <span className="w-2 h-2 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-2 h-2 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-2 h-2 bg-primary/40 rounded-full animate-bounce"></span>
                  </div>
                </div>
              )}
              <div ref={scrollRef} />
            </div>
          </ScrollArea>

          {/* Input Area */}
          <div className="p-4 bg-white border-t">
            {messages.length < 3 && (
              <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      setInputValue(s);
                      // Optional: auto-send
                    }}
                    className="flex-shrink-0 px-4 py-2 bg-secondary/10 hover:bg-secondary/20 text-secondary-foreground text-xs md:text-sm rounded-full border border-secondary/20 transition-colors whitespace-nowrap"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
            
            <form onSubmit={handleSendMessage} className="relative flex items-center gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about Curaçao..."
                className="pr-12 py-6 rounded-full border-muted-foreground/20 focus-visible:ring-primary/20 shadow-sm bg-slate-50"
              />
              <Button 
                type="submit" 
                size="icon" 
                disabled={!inputValue.trim() || isTyping}
                className="absolute right-1.5 h-9 w-9 rounded-full shadow-md bg-primary hover:bg-primary/90 transition-all"
              >
                {isTyping ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              </Button>
            </form>
          </div>

        </div>
      </div>
    </Layout>
  );
}
