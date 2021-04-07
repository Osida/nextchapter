import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import { App } from "./components";
import reportWebVitals from "./reportWebVitals";
import { StateProvider } from "./context/StateProvider";
import reducer, { initialState } from "./context/reducer";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <AuthProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AuthProvider>
  </StateProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
