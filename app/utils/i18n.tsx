import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import esJSON from '../translations/español.json'
import enJSON from '../translations/english.json'

i18n.use(initReactI18next).init({
  resources: {
    es: { ...esJSON },
    en: { ...enJSON },
  },
  lng: "es",
});

export {i18n};