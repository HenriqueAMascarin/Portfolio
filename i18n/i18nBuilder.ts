import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./languages/en-us.json";
import pt from "./languages/pt-br.json";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en,
      pt,
    },
    fallbackLng: "en",
  });

export default i18n;
