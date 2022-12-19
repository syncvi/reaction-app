import React from "react"
import styles from "./commentItem.module.css"

const FilmItem = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.card.title}>
        <h3>{props.User}</h3>
      </div>
      <div className={styles.card.title}>
          <p>{props.Comment}</p>
       </div>
       <div className={styles.card.title}>
          <div className={styles.rating}>
            <span className={styles.star}>★</span>
            <span className={styles.star}>★</span>
            <span className={styles.star}>★</span>
            <span className={styles.star}>★</span>
            <span className={styles.star}>★</span>
          </div>
      </div>
    </div>
  );
};
export default FilmItem