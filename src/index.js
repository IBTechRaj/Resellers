import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { createStore } from "redux";
import { Provider } from "react-redux";
// import reducer from "./reducers";
// import getId from "./utils/getId";
import { storage } from "./firebase";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
