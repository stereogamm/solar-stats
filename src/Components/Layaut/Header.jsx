import styles from "./header.module.css";

function Header() {
    return(
        <>
            <header className={styles.header}>
                <h1>dataverse</h1>
                <div className={styles["nav-buttons"]}>
                    <button>cart</button>
                    <button>statistic</button>
                </div>
                
            </header>
               
        </>
    )
}

export default Header