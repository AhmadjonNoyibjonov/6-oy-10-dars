import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      uz: {
        translation: {
          home: "Bosh sahifa",
          categories: "Kategoriyalar",
          sales: "Sotuvlar",
          faq: "FAQ",
          about: "Haqida",
          contact: "Bog'lanish",
          signIn: "Kirish",
          signUp: "Ro'yxatdan o'tish",
          welcome: "Bizning saytga xush kelibsiz",
          groceries: "sabzavotlar",
          description: "Eng yangi mahsulotlarni onlayn tarzda oling va mazali taomlar tayyorlang.",
          searchPlaceholder: "Qidirish",
          freshVegetables: "Yangi sabzavotlar",
          guarantee: "100% Kafolat",
          cashOnDelivery: "Yetkazib berishda to'lov",
          fastDelivery: "Tez yetkazib berish",
          freshSpinach: "Yangi ismaloq",
          freshCarrot: "Yangi sabzi",
        },
      },
      en: {
        translation: {
          home: "Home",
          categories: "Categories",
          sales: "Sales",
          faq: "FAQ",
          about: "About",
          contact: "Contact",
          signIn: "Sign In",
          signUp: "Sign Up",
          welcome: "Welcome to our site",
          groceries: "groceries",
          description: "Get fresh groceries online without stepping out to make delicious food with the freshest ingredients.",
          searchPlaceholder: "Search here",
          freshVegetables: "Fresh Vegetables",
          guarantee: "100% Guarantee",
          cashOnDelivery: "Cash on Delivery",
          fastDelivery: "Fast Delivery",
          freshSpinach: "Fresh Spinach",
          freshCarrot: "Fresh Carrot",
        },
      },
      ru: {
        translation: {
          home: "Домой",
          categories: "Категории",
          sales: "Продажи",
          faq: "FAQ",
          about: "О нас",
          contact: "Контакт",
          signIn: "Войти",
          signUp: "Регистрация",
        },
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
