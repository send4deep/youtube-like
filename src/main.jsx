import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import appStore from "./utils/appStore.jsx";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      <App />
    </Provider>
  </StrictMode>
);
