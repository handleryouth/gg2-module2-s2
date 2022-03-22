import React from "react";
import ReactDOM from "react-dom";
import "@fontsource/inter";
import { Layout } from "./components";
import App from "./App";
import "./styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <Layout component={<App />} />
  </React.StrictMode>,
  document.getElementById("root")
);
