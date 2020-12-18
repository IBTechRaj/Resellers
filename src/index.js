import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import getId from "./utils/getId";
import { storage } from "./firebase";

const initialState = {
  resellers: [
    {
      id: getId(),
      name: "Bangalore Stores",
      hdNumber: "9876543210",
      hdEmail: "bang@elite.com",
      logo: "https://picsum.photos/150/150?2"
    },
    {
      id: getId(),
      name: "Karnataka Agencies",
      hdNumber: "9876543210",
      hdEmail: "ktk@elite.com",
      logo: "https://picsum.photos/150/150?1"
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
