import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import App from "./App";
import modules from "./modules";

import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";
// import promiseMiddleware from "redux-promise-middleware";

const logger = createLogger();
const store = createStore(
  modules,
  applyMiddleware(
    logger,
    ReduxThunk
    // , promiseMiddleware
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
