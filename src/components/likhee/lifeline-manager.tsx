"use client";

import { useLifeline } from "@/hooks/use-lifeline";
import { Heart } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function LifelineManager() {
  const { lifelines, nextLifelineIn } = useLifeline();

  const renderHearts = () => {
    const hearts = [];
    for (let i = 0; i < 3; i++) {
      hearts.push(
        <Heart
          key={i}
          className={`h-8 w-8 ${
            i < lifelines ? "text-red-500 fill-current" : "text-muted"
          }`}
        />
      );
    }
    return hearts;
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center gap-2 rounded-full bg-card/80 p-2 shadow-lg backdrop-blur-sm">
            {renderHearts()}
          </div>
        </TooltipTrigger>
        <TooltipContent>
          {lifelines < 3 ? (
            <p>Next lifeline in: {nextLifelineIn}</p>
          ) : (
            <p>You have full lifelines!</p>
          )}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
