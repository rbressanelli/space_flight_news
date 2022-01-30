import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Providers from "./contexts";
import {CssBaseline} from '@material-ui/core';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
      <CssBaseline />
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
