npm install i18next react-i18next i18next-http-backend i18next-browser-languagedetector
Sinhala
![image](https://user-images.githubusercontent.com/12700182/133940744-2d4e2af5-a818-4500-87b4-453a487f55a8.png)
English
![image](https://user-images.githubusercontent.com/12700182/133940724-cc264dc7-dfac-4e09-b9fe-d070a29ddd26.png)

```
import translationEN from "./locales/en/translation.json";
import translationNL from "./locales/nl/translation.json";
const resources = {
 en: {
   translation: translationEN,
 },
 nl: {
   translation: translationNL,
 },
};
  .init({
    fallbackLng: "en",
    debug: true,
    lng: "en",
    resources,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
```
