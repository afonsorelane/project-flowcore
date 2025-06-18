import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Routes } from "./routes/routes";
import { AuthProvider } from "./context/authcontext.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </StrictMode>
);