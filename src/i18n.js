import  i18n  from "i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next} from 'react-i18next';


import translationEN from "./locales/en/translation.json";
import translationSi from "./locales/si/translation.json";
const resources = {
 en: {
   translation: translationEN,
 },
 si: {
   translation: translationSi,
 },
};
i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    fallbackLng:'en',
    debug:true,
    lng: "en",
    resources,
    detection:{
        order:['queryString','cookie'],
        cache:['cookie']
    },
    interpolation:{
        escapeValue:false
    }
})

export default i18n