// import React from "react";
// import ReactDOM from "react-dom";
// import { App } from "./Components/App/App.js";
// import "./common.css";

// ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";
import { createRoot } from "react-dom/client"; // Импортируем createRoot
import { App } from "./Components/App/App.js";
import "./common.css";

// 1. Находим корневой DOM-элемент
const rootElement = document.getElementById("root");

// 2. Создаём корень React
const root = createRoot(rootElement);

// 3. Рендерим приложение
root.render(
  <React.StrictMode>
    {" "}
    {/* Опционально: строгий режим для выявления проблем */}
    <App />
  </React.StrictMode>
);
