import React, { useContext } from "react";
import styles from "./index.module.css";
import { ThemeContext } from "../../App";

function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`${styles.footer} ${styles[theme]}`}>
      <div className={styles.footerItems}>
        <div className={styles.footerItem}>
          <img src="src/assets/dairy.png" alt="" />
          <h3>Dairy Products</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={styles.footerItem}>
          <img src="/src/assets/fruits.png" alt="" />
          <h3>Vegetables & Fruits</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={styles.footerItem}>
          <img src="/src/assets/condiments.png" alt="" />
          <h3>Spices & Seasonings</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={styles.footerItem}>
          <img src="/src/assets/babyfood.png" alt="" />
          <h3>Honey</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={styles.footerItem}>
          <img src="/src/assets/grain.png" alt="" />
          <h3>Flour</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
