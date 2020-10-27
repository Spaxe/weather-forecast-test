import React from "react";
import { hydrate, render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./assets/main.css";
import "./assets/style.css";
import Routes from "./Routes";

const app = document.getElementById("root");
if (app?.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <BrowserRouter basename="/weather-forecast-test/">
        <Routes />
      </BrowserRouter>
    </React.StrictMode>,
    app
  );
} else {
  render(
    <React.StrictMode>
      <BrowserRouter basename="/weather-forecast-test/">
        <Routes />
      </BrowserRouter>
    </React.StrictMode>,
    app
  );
}
