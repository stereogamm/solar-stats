import { useState } from "react";
import styles from "./navigation.module.css";

function Navigation({ onShownList, count }) {
  return (
    <div className={styles["nav-buttons"]}>
      <button onClick={onShownList}>list</button>
      <span className={styles.count}>{0}</span>
      <button>statistic</button>
    </div>
  );
}

export default Navigation;
