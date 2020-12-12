import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import getId from "./utils/getId";

const initialState = {
  resellers: [
    {
      id: getId(),
      name: "Bangalore Stores",
      hdNumber: "9876543210",
      hdEmail: "bang@elite.com"
    },
    {
      id: getId(),
      name: "Karnataka Agencies",
      hdNumber: "9876543210",
      hdEmail: "ktk@elite.com"
    }
  ]
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
