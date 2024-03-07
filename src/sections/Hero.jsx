import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Osman Kelifa</h1>
      <h2 className={styles.subtitle}>Frontend Developer</h2>
      <button className={styles.button}>Get in touch</button>
    </section>
  );
};
export default Hero;
