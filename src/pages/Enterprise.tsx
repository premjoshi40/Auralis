import { useState } from "react";
import { ArrowLeft, FileText, Upload, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import auralisLogo from "@/assets/auralis-logo.png";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const Enterprise = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! I'm Auralis for Enterprise. I can help you search through your company documents, policies, and reports. How can I assist you today?"
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
        content: "I'm processing your request. In the full version, I'll search through your uploaded documents using RAG technology to provide accurate answers."
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
          <h2 className="text-lg font-semibold mb-4">Enterprise Mode</h2>
          <div className="space-y-3">
            <Button className="w-full justify-start bg-gradient-enterprise text-white hover:opacity-90">
              <Upload className="mr-2 h-4 w-4" />
              Upload Documents
            </Button>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-3 text-muted-foreground">Example Documents</h3>
          <ScrollArea className="h-[400px]">
            <div className="space-y-2">
              {[
                "HR Policy Manual.pdf",
                "Employee Handbook.pdf",
                "Refund Policy.docx"
              ].map((doc, i) => (
                <button
                  key={i}
                  className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors text-left"
                >
                  <FileText className="h-4 w-4 text-primary" />
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
          <div className="flex items-center gap-3">
            <img src={auralisLogo} alt="Auralis" className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-semibold">Enterprise Chat</h1>
              <p className="text-sm text-muted-foreground mt-1">
                Ask questions about your business documents
              </p>
            </div>
          </div>
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
                      ? "bg-gradient-enterprise text-white"
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
              placeholder="Ask about your documents..."
              className="flex-1"
            />
            <Button onClick={handleSendMessage} className="bg-gradient-enterprise text-white">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Enterprise;
