import React, { useContext } from "react";
import styles from "./index.module.css";
import { ThemeContext, LanguageContext } from "../../App";

function Hero() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  function handleClick(newTheme) {
    setTheme(newTheme);
  }

  const texts = {
    en: {
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
    uz: {
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
    ru: {
      welcome: "Добро пожаловать на наш сайт",
      groceries: "продукты",
      description: "Получайте свежие продукты онлайн, не выходя из дома, чтобы приготовить вкусную еду из свежайших ингредиентов.",
      searchPlaceholder: "Поиск",
      freshVegetables: "Свежие овощи",
      guarantee: "100% Гарантия",
      cashOnDelivery: "Оплата при доставке",
      fastDelivery: "Быстрая доставка",
      freshSpinach: "Свежий шпинат",
      freshCarrot: "Свежая морковь",
    }
  };

  const t = texts[language];

  return (
    <div
    className={`${styles.hero} ${
      theme === "dark" ? styles.darkMode : styles.lightMode
    }`}
  >
    <div className={styles.heroText}>
      <span className={styles.btnSpan}>
        <button
          className={`${styles.mode} ${
            theme === "light" ? styles.active : ""
          }`}
          onClick={() => handleClick("light")}
        >
          <img
            width={45}
            height={35}
            src="https://cdn0.iconfinder.com/data/icons/small-nature/50/3_Sep-11-512.png"
            alt="sun"
          />
        </button>
        <button
          className={`${styles.mode} ${
            theme === "dark" ? styles.active : ""
          }`}
          onClick={() => handleClick("dark")}
        >
          <i className="fa-solid fa-moon"></i>
        </button>
      </span>
      <h1>
        {t.welcome} <span className={styles.highlight}>{t.groceries}</span>
      </h1>
      <p>{t.description}</p>
      <div className={styles.searchBar}>
        <input type="text" placeholder={t.searchPlaceholder} />
        <button type="button">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className={styles.searchinfo}>
        <span className={styles.span}>
          <span>
            <i className="fa-regular fa-circle-check"></i> {t.freshVegetables}
          </span>
          <span>
            <i className="fa-regular fa-circle-check"></i> {t.guarantee}
          </span>
        </span>
        <span className={styles.span}>
          <span>
            <i className="fa-regular fa-circle-check"></i> {t.cashOnDelivery}
          </span>
          <span>
            <i className="fa-regular fa-circle-check"></i> {t.fastDelivery}
          </span>
        </span>
      </div>
    </div>
    <div>
      <img
        className={styles.heroImage}
        src="./src/assets/hero.png"
        alt="Groceries delivery"
      />
    </div>
    <div className={styles.heroImg}>
      <div className={styles.wrapper}>
        <img src="./src/assets/heroImage.png" alt="" />
        <p>{t.freshSpinach}</p>
        <p>$12.00</p>
      </div>
      <div className={styles.wrapper}>
        <img className={styles.image} src="./src/assets/image.png" alt="" />
        <p>{t.freshCarrot}</p>
        <p>$9.00</p>
      </div>
    </div>
  </div>
  );
}

export default Hero;
