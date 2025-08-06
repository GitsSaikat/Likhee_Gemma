
"use client";

import { useState, useEffect, useCallback } from "react";
import { useToast } from "./use-toast";

const MAX_LIFELINES = 3;
const RECOVERY_TIME = 1 * 60 * 1000; // 1 minute in milliseconds

type LifelineState = {
  usedTimestamps: number[];
};

export function useLifeline() {
  const [lifelines, setLifelines] = useState(MAX_LIFELINES);
  const [nextLifelineIn, setNextLifelineIn] = useState("");
  const { toast } = useToast();

  const getLifelineState = useCallback((): LifelineState => {
    try {
      const regularState = localStorage.getItem("likhee-lifelines");
      return regularState ? JSON.parse(regularState) : { usedTimestamps: [] };
    } catch (error) {
      console.error("Failed to parse lifeline state from localStorage", error);
      return { usedTimestamps: [] };
    }
  }, []);

  const saveLifelineState = useCallback((state: LifelineState) => {
    try {
      localStorage.setItem("likhee-lifelines", JSON.stringify(state));
    } catch (error) {
      console.error("Failed to save lifeline state to localStorage", error);
    }
  }, []);

  const updateLifelines = useCallback(() => {
    const state = getLifelineState();
    const now = Date.now();
    
    // Filter out recovered lifelines
    const stillUsed = state.usedTimestamps.filter(
      (timestamp) => now - timestamp < RECOVERY_TIME
    );

    const currentLifelines = MAX_LIFELINES - stillUsed.length;

    setLifelines(currentLifelines);
    if(stillUsed.length !== state.usedTimestamps.length) {
      saveLifelineState({ usedTimestamps: stillUsed });
    }
    
    if (currentLifelines < MAX_LIFELINES && stillUsed.length > 0) {
      const nextRecoveryTime = stillUsed[0] + RECOVERY_TIME;
      const timeRemaining = nextRecoveryTime - now;
      
      const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setNextLifelineIn(`${hours}h ${minutes}m ${seconds}s`);
    } else {
        setNextLifelineIn("");
    }
  }, [getLifelineState, saveLifelineState]);


  useEffect(() => {
    updateLifelines();
    const interval = setInterval(updateLifelines, 1000);
    return () => clearInterval(interval);
  }, [updateLifelines]);

  const useLifeline = () => {
    const state = getLifelineState();
    if (state.usedTimestamps.length < MAX_LIFELINES) {
      const newState = {
        ...state,
        usedTimestamps: [...state.usedTimestamps, Date.now()].sort((a,b) => a-b),
      };
      saveLifelineState(newState);
      updateLifelines();
       toast({
        title: "Lifeline Used!",
        description: "The solution has been revealed.",
      });
    } else {
      toast({
        title: "Out of Lifelines",
        description: "You need to wait for a lifeline to regenerate.",
        variant: "destructive",
      });
    }
  };

  return { lifelines, useLifeline, nextLifelineIn };
}
