import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ToDo from "./ToDo.jsx";
import ShowTasks from "./ShowTasks.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import Login from "./Login.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-gt06l732uvryhe8e.us.auth0.com"
    clientId="2jJ15w4qqCjxsJhj4YXVAnzd4aXxjvG6"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <div className="bg-slate-900 h-[100vh] grid place-content-center">
      <Login />
      <ToDo />
      <ShowTasks />
    </div>
  </Auth0Provider>
);
