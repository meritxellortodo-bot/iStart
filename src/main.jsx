import React from "react";
import ReactDOM from "react-dom/client";
import Landing from "./App.jsx";
import "./index.css";

// ⬇️ shim: define global React for any code compiled with classic runtime
// (harmless even when using the automatic runtime)
window.React = React;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Landing />
  </React.StrictMode>
);
