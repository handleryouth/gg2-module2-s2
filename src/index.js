import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Layout } from "components";
import { store } from "library";
import "@fontsource/inter";
import App from "./App";
import "./styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout component={<App />} />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
