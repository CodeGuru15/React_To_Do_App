import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import ToDo from "./ToDo.jsx";
import Clock from "./Clock.jsx";
import ShowTasks from "./ShowTasks.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Clock />
    <ToDo />
    <ShowTasks />
  </React.StrictMode>
);
