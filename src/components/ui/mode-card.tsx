import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ModeCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: "enterprise" | "household";
  onClick: () => void;
}

export const ModeCard = ({ title, description, icon: Icon, gradient, onClick }: ModeCardProps) => {
  const gradientClass = gradient === "enterprise" ? "bg-gradient-enterprise" : "bg-gradient-household";
  
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative w-full max-w-md overflow-hidden rounded-2xl p-8 text-left transition-all duration-300",
        "hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]",
        "bg-card border border-border shadow-lg"
      )}
    >
      <div className="relative z-10 space-y-4">
        <div className={cn(
          "inline-flex rounded-xl p-3 shadow-md",
          gradientClass
        )}>
          <Icon className="h-8 w-8 text-white" />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-foreground">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      
      <div className={cn(
        "absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-5",
        gradientClass
      )} />
    </button>
  );
};
