import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import reducer from "./reducers";
import getId from "./utils/getId";

const middleware = [thunk];
// const initialState = {};
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

// const store = createStore( reducer, initialState );

// const store = createStore(
//   reducer,
//   initialState,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//  );
//   composeWithDevTools(applyMiddleware(...middleware))
// );

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
