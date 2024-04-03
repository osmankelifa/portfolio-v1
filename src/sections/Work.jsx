import React from "react";
import styles from "./Work.module.css";
import { works } from "../data";

const Work = () => {
  return (
    <section className={styles.section} id="Work">
      <h2 className={styles.title}>My Work Evolution</h2>
      <div className={styles.list}>
        {works.map((list) => {
          // const { id, gitHubLink, img, title } = list;

          <div className={styles.project}>
            <a href={list.gitHubLink} target="_blank">
              <h3>{list.title}</h3>
              <img
                src={list.img}
                alt="My first Homepage"
                // height="auto"
                width="100%"
              />
            </a>
          </div>;
        })}
      </div>
      ;
    </section>
  );
};

export default Work;
