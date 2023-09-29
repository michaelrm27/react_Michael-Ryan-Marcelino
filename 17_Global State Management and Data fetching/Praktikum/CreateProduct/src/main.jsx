import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Router/App";
import { ProductProvider } from "./Pages/ProductContext";
import { Provider } from "react-redux";
import store from "../Utils/Redux/store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
