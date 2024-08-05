import React, { useContext } from "react";
import styles from "./index.module.css";
import { ThemeContext } from "../../App";
import dairy from "../../assets/images/dairy.png";
import fruits from "../../assets/images/fruits.png";
import condiments from "../../assets/images/condiments.png";
import babyfood from "../../assets/images/babyfood.png";
import grain from "../../assets/images/grain.png";

function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`${styles.footer} ${styles[theme]}`}>
      <div className={styles.footerItems}>
        <div className={styles.footerItem}>
          <img src={dairy} alt="" />
          <h3>Dairy Products</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={styles.footerItem}>
          <img src={fruits} alt="" />
          <h3>Vegetables & Fruits</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={styles.footerItem}>
          <img src={condiments} alt="" />
          <h3>Spices & Seasonings</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={styles.footerItem}>
          <img src={babyfood} alt="" />
          <h3>Honey</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={styles.footerItem}>
          <img src={grain} alt="" />
          <h3>Flour</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
