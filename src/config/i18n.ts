import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import * as en from "@/assets/locale/en";

i18n.use(initReactI18next).init({
  resources: { en },
  lng: "en",
  fallbackLng: "en",
  defaultNS: "common",
});
