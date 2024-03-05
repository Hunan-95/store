import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./app/store";
import { ThemeProvider } from "styled-components";
import { theme } from "./styled/theme";
import { Global } from "./styled/Global";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Global />
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
