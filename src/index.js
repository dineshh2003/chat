import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // we have to place all these in the context provider so as the context api
  // can reach all the children
  // AuthContextProvider
  <AuthContextProvider>
    <React.StrictMode>  
      <App />
    </React.StrictMode>
  </AuthContextProvider>
);
