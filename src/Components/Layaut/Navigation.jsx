import styles from "./navigation.module.css";

function Navigation({count}) {
    return(
        <div className={styles["nav-buttons"]}>
        <button>list</button>
        <span className={styles.count}>{0}</span>
        <button>statistic</button>
    </div>
    )
}

export default Navigation