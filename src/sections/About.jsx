import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.section} id="About">
      <h1 className={styles.title}>About</h1>
      <h2 className={styles.subtitle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ipsum
        esse distinctio, odio soluta accusamus obcaecati culpa eaque excepturi
        voluptate veniam veritatis laudantium unde quaerat saepe quis maiores
        debitis reiciendis.
      </h2>
      <button className={styles.button}>
        Get in touch
      </button>
    </section>
  );
};

export default About;
