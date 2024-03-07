import React from "react";
import styles from "./Work.module.css";
import Myfirsthomepage from "../assets/Myfirsthomepage.png";

const Work = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>My Work Evolution</h2>
      <div className={styles.list}>
        <div className={styles.project}>
        <a href="https://steady-paprenjak-3f5125.netlify.app/">
            <img
              src={Myfirsthomepage}
              alt="My first Homepage"
              target="_blank"
              // height="auto"
              width="100%"
            />
          </a>
        </div>
        <div className={styles.project}>
          <div className={styles.project}>
            <a href="https://steady-paprenjak-3f5125.netlify.app/">
              <img
                src={Myfirsthomepage}
                alt="My first Homepage"
                target="_blank"
                // height="auto"
                width="100%"
              />
            </a>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.project}>
            <a href="https://steady-paprenjak-3f5125.netlify.app/">
              <img
                src={Myfirsthomepage}
                alt="My first Homepage"
                target="_blank"
                // height="auto"
                width="100%"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
