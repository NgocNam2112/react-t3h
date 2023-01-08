import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routerName from "./utils/Router";
import { createStore } from "redux";
import rootReducer from "./store/reducer";
import { Provider } from "react-redux";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(rootReducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routerName} />
    </Provider>
  </React.StrictMode>
);
