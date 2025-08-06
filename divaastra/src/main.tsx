import App from "@divaastra/App";
import "@divaastra/index.css";
import "@divaastra/index.scss";
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
