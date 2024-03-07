import React from "react";
import styles from "./Header.module.css";
import { useRef } from "react";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className="nav">
        <ul className={styles.ul}>
          {/* Anchor link with the href attribute set to the id of the target element */}
          <li className={styles.list}><a href="#work">Work</a></li>
          <li className={styles.list}>About</li>
          <li className={styles.list}>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
