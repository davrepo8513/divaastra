import App from "@shieldspire/App";
import "@shieldspire/index.css";
import "@shieldspire/index.scss";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Ensure correct type for root element
const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}
