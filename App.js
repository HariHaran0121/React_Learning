import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child", key: "child1" }, // ✅ added key
    [
      React.createElement("h1", { key: "h1_1" }, "this is h1"),
      React.createElement("h2", { key: "h2_1" }, "this is h2"),
    ]
  ),
  React.createElement(
    "div",
    { id: "child_2", key: "child2" }, // ✅ added key
    [
      React.createElement("h1", { key: "h1_2" }, "this is h1"),
      React.createElement("h2", { key: "h2_2" }, "this is h2"),
    ]
  ),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
