// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';

// import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';
// // don't want to use this?
// // have a look at the Quick start guide 
// // for passing in lng and translations on init

// i18n
//   // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
//   // learn more: https://github.com/i18next/i18next-http-backend
//   // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
//   .use(Backend)
//   // detect user language
//   // learn more: https://github.com/i18next/i18next-browser-languageDetector
//   .use(LanguageDetector)
//   // pass the i18n instance to react-i18next.
//   .use(initReactI18next)
//   // init i18next
//   // for all options read: https://www.i18next.com/overview/configuration-options
//   .init({
//     fallbackLng: 'eng',
//     debug: true,
//     whiteList: ['eng', 'vn','cn'],

//     interpolation: {
//       escapeValue: false, // not needed for react as it escapes by default
//     }
//   });


// export default i18n;



import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Sign in": "Sign in",
      "Sign up": "Sign up",
     "Hello":"Hello ",
     "Home" : "Home",
     "Contact":"Contact",
     "News":"News",

    }
  },
  cn: {
    translation: {
      "Sign in": "登入",
     "Sign up": "註冊",
     "Hello":"你好 ",
     "Home":"家",
     "Contact":"聯絡",
      "News":"新聞",

    }
  },
    vn: {
    translation: {
      "Sign in": "Đăng nhập",
     "Sign up": "Đăng ký",
     "Hello":"Xin chào",
     "Home":"Trang chủ",
      "Contact":"Liên hệ",
      "News":"Tin tức",

    }
  }

};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;