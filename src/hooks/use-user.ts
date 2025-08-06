"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useCallback, createElement } from "react";

type UserState = {
  xp: number;
};

type UserContextType = {
  xp: number;
  addXp: (amount: number) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

const defaultState: UserState = {
  xp: 0,
};

export function UserProvider({ children }: { children: ReactNode }) {
  const [userState, setUserState] = useState<UserState>(defaultState);

  const getUserState = useCallback((): UserState => {
    try {
      const state = localStorage.getItem("likhee-user");
      return state ? JSON.parse(state) : defaultState;
    } catch (error) {
      console.error("Failed to parse user state from localStorage", error);
      return defaultState;
    }
  }, []);

  const saveUserState = useCallback((state: UserState) => {
    try {
      localStorage.setItem("likhee-user", JSON.stringify(state));
    } catch (error) {
      console.error("Failed to save user state to localStorage", error);
    }
  }, []);

  useEffect(() => {
    setUserState(getUserState());
  }, [getUserState]);

  const addXp = (amount: number) => {
    setUserState(prevState => {
      const newState = { ...prevState, xp: prevState.xp + amount };
      saveUserState(newState);
      return newState;
    });
  };

  const value = {
    xp: userState.xp,
    addXp,
  };

  return createElement(UserContext.Provider, { value }, children);
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
