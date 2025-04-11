import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import en from "./en.json"
import af from "./af.json"
import zu from "./zu.json"
import tn from "./tn.json"

const LANGUAGES = {
    en:{
        translation: en
    },
    af:{
        translation: af 
    },
    zu:{
        translation: zu
    },
    tn:{
        translation: tn 
    }
}

i18n.use(initReactI18next).init({
    resources: LANGUAGES,
    fallbackLng: "en",
    defaultNS: "translation",
    ns: ["translation"],
    react:{
        useSuspense: false
    },
    interpolation:{
        escapeValue: false
    }
})

export default i18n