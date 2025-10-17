import { useState } from "react";
import { ArrowLeft, FileText, Upload, Send, Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const Household = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hi there! I'm your personal Auralis. I can help you find your personal documents like IDs, bills, receipts, and warranties. What are you looking for?"
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Got it! In the full version, I'll search through your uploaded documents and help you find exactly what you need. Would you like to upload some documents to get started?"
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-80 border-r border-border bg-card p-6 space-y-6">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-4 -ml-2"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div>
          <h2 className="text-lg font-semibold mb-4">Household Mode</h2>
          <div className="space-y-3">
            <Button className="w-full justify-start bg-gradient-household text-white hover:opacity-90">
              <Upload className="mr-2 h-4 w-4" />
              Upload Documents
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Camera className="mr-2 h-4 w-4" />
              Scan with Camera
            </Button>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-3 text-muted-foreground">Example Documents</h3>
          <ScrollArea className="h-[400px]">
            <div className="space-y-2">
              {[
                "Car Insurance.pdf",
                "Water Bill - Jan 2024.pdf",
                "Laptop Warranty.jpg"
              ].map((doc, i) => (
                <button
                  key={i}
                  className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors text-left"
                >
                  <FileText className="h-4 w-4 text-accent" />
                  <span className="text-sm truncate">{doc}</span>
                </button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col">
        <div className="border-b border-border p-6">
          <h1 className="text-2xl font-semibold">Household Chat</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Find your personal documents quickly
          </p>
        </div>

        <ScrollArea className="flex-1 p-6">
          <div className="max-w-3xl mx-auto space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-6 py-4 ${
                    message.role === "user"
                      ? "bg-gradient-household text-white"
                      : "bg-card border border-border"
                  }`}
                >
                  <p className={message.role === "user" ? "text-white" : "text-foreground"}>
                    {message.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="border-t border-border p-6">
          <div className="max-w-3xl mx-auto flex gap-4">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="e.g., 'Where is my passport?'"
              className="flex-1"
            />
            <Button onClick={handleSendMessage} className="bg-gradient-household text-white">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Household;
