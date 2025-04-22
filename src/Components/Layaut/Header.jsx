import styles from "./header.module.css";
import Navigation from "./Navigation";

function Header() {
    return(
        <>
            <header className={styles.header}>
                <h1>dataverse</h1>
                <Navigation />
            </header>
               
        </>
    )
}

export default Header