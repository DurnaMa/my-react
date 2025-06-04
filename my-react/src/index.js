import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const nameObj = {
  prename: "Mahir",
  lastname: "Durna",
};
root.render(
  <React.StrictMode>
    <App title="test" name="linkdIn" nameObj={nameObj} />
  </React.StrictMode>
);
