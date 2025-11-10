// src/main.js  — no JSX, no plugins needed
const { createElement: h } = window.React;
const { createRoot } = window.ReactDOM;

function App() {
  const style = {
    minHeight: "100vh",
    background: "black",
    color: "white",
    display: "grid",
    placeItems: "center",
    fontFamily:
      "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
    fontSize: "28px",
    letterSpacing: "0.02em",
  };
  return h("div", { style }, "it works");
}

createRoot(document.getElementById("root")).render(h(App));
