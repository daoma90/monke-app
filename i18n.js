import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translations from "./translations.json";

i18n.use(initReactI18next).init({
  resources: translations,
  fallbackLng: "en-US",
  compatibilityJSON: "v3",
  keySeparator: ".",
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
});

export default i18n;
