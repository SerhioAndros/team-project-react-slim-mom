import "./index.css";
import App from "./App";
import "modern-normalize/modern-normalize.css";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/es/integration/react";
import redux from "./redux/store.js";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={redux.store}>
      <PersistGate loading={null} persistor={redux.persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
