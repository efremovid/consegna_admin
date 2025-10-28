import React from "react";
import styles from "./Header.module.scss";
import { FaTruck } from "react-icons/fa";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <FaTruck className={styles.logo} />
        <h1 className={styles.title}>CONSEGNA <br />admin</h1>
      </div>
    </div>
    
  );
};

export default Header;
