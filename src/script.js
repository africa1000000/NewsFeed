import React from "react";
import { createRoot } from "react-dom/client";
import "./common.css";
import { App } from "./Components/App/App.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
