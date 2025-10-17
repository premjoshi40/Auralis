import { useNavigate } from "react-router-dom";
import { Building2, Home } from "lucide-react";
import { ModeCard } from "@/components/ui/mode-card";
import heroBackground from "@/assets/hero-background.jpg";
import auralisLogo from "@/assets/auralis-logo.png";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        
        <div className="relative z-10 container mx-auto px-6 py-20 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div className="flex items-center justify-center gap-4">
              <img 
                src={auralisLogo} 
                alt="Auralis Logo" 
                className="w-16 h-16 md:w-20 md:h-20 animate-scale-in"
              />
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Auralis
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              Your AI-powered document assistant. Store, search, and retrieve documents using natural language.
            </p>
          </div>
        </div>
      </section>

      {/* Mode Selection */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              Choose Your Mode
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select the experience that fits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 animate-scale-in">
            <ModeCard
              title="Enterprise Mode"
              description="Multi-user document management for businesses. Upload policies, reports, and manuals. Query your knowledge base instantly."
              icon={Building2}
              gradient="enterprise"
              onClick={() => navigate("/enterprise")}
            />
            
            <ModeCard
              title="Household Mode"
              description="Personal document storage for families. Store IDs, bills, receipts, and warranties. Find documents with simple questions."
              icon={Home}
              gradient="household"
              onClick={() => navigate("/household")}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-secondary/30 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
                Powered by Advanced AI
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Auralis uses state-of-the-art RAG technology to understand and retrieve your documents
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Smart Upload",
                  description: "Drag & drop PDFs, images, and documents. OCR extracts text automatically."
                },
                {
                  title: "Natural Language",
                  description: "Ask questions like you would to a person. Get accurate answers instantly."
                },
                {
                  title: "Secure Storage",
                  description: "Your documents are encrypted and stored safely. Only you can access them."
                }
              ].map((feature, i) => (
                <div 
                  key={i}
                  className="p-6 rounded-xl bg-card border border-border shadow-md hover:shadow-lg transition-shadow"
                >
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
