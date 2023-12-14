import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import ToDo from "./ToDo.jsx";
import ShowTasks from "./ShowTasks.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToDo />
    <ShowTasks />
  </React.StrictMode>
);
