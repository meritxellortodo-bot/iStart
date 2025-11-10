import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Landing from "./App.jsx";
import "./index.css";

// Define global React (safety shim for any classic-runtime compiled code)
window.React = React;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Landing />
  </React.StrictMode>
);
