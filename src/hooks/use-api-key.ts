
"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useCallback, createElement } from "react";
import { useToast } from "./use-toast";

type ApiKeyState = {
  apiKey: string | null;
};

type ApiKeyContextType = {
  apiKey: string | null;
  setApiKey: (key: string | null) => void;
};

const ApiKeyContext = createContext<ApiKeyContextType | undefined>(undefined);

const defaultState: ApiKeyState = {
  apiKey: null,
};

export function ApiKeyProvider({ children }: { children: ReactNode }) {
  const [apiKeyState, setApiKeyState] = useState<ApiKeyState>(defaultState);
  const { toast } = useToast();

  const getApiKeyState = useCallback((): ApiKeyState => {
    try {
      const state = localStorage.getItem("likhee-api-key");
      return state ? JSON.parse(state) : defaultState;
    } catch (error) {
      console.error("Failed to parse API key from localStorage", error);
      return defaultState;
    }
  }, []);

  const saveApiKeyState = useCallback((state: ApiKeyState) => {
    try {
      localStorage.setItem("likhee-api-key", JSON.stringify(state));
    } catch (error) {
      console.error("Failed to save API key to localStorage", error);
    }
  }, []);

  useEffect(() => {
    setApiKeyState(getApiKeyState());
  }, [getApiKeyState]);

  const setApiKey = (key: string | null) => {
    const newState = { apiKey: key };
    setApiKeyState(newState);
    saveApiKeyState(newState);
    toast({
      title: "API Key Saved",
      description: "Your API key has been saved and will be used for future requests.",
    });
  };

  const value = {
    apiKey: apiKeyState.apiKey,
    setApiKey,
  };

  return createElement(ApiKeyContext.Provider, { value }, children);
}

export function useApiKey() {
  const context = useContext(ApiKeyContext);
  if (context === undefined) {
    throw new Error("useApiKey must be used within an ApiKeyProvider");
  }
  return context;
}
