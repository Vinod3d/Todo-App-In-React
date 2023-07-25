import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/GlobalStyles.css";
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

import App from "./App";
import { Provider } from "react-redux";
import store from "./app/store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      
      <App />
    </Provider>
  </StrictMode>
);
