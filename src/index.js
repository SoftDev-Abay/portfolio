import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import global_eng from "./translations/eng/global.json";
import global_rus from "./translations/rus/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: { escapeValue: true },
  lng: "eng",
  resources: {
    eng: {
      global: global_eng,
    },
    rus: {
      global: global_rus,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
