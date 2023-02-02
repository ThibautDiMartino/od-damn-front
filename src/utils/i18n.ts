import { initReactI18next } from "react-i18next";

import fr from "../locales/fr.json";
import en from "../locales/en.json";
import i18next from "i18next";

const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "fr",
});

export default i18next;
