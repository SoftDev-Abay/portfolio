import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import global_eng from "./translations/eng/global.json";
import global_rus from "./translations/rus/global.json";
import i18next from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";

// 1. IMPORT THE DETECTOR
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(LanguageDetector) // 2. USE THE DETECTOR
  .use(initReactI18next)
  .init({
    interpolation: { escapeValue: true },
    fallbackLng: "en",

    // 3. ENABLE DETECTION
    detection: {
      order: ["path", "localStorage", "navigator"],
      lookupFromPathIndex: 0,
      checkWhitelist: true,
    },

    resources: {
      en: {
        global: global_eng,
      },
      ru: {
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
