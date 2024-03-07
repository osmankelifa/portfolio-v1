import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className="nav">
        <ul className={styles.ul}>
          <li className="list">Work</li>
          <li className="list">About</li>
          <li className="list">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
