import React, { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type AuthContextType = {
  isLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);

  function login(token: string) {
    localStorage.setItem("token", token);
    setIsLoggedIn(true);
  }

  function logout() {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  }

  return React.createElement(
    AuthContext.Provider,
    { value: { isLoggedIn, login, logout } },
    children
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}