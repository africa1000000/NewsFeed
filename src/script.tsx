import React from "react";
import { createRoot } from "react-dom/client";
import "./common.css";
import { App } from "./Components/App/App";

const rootElement = document.getElementById("root");
// @ts-ignore
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
