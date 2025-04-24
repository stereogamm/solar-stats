import styles from "./header.module.css";
import Navigation from "./Navigation";

function Header({ onShownList }) {
  return (
    <>
      <header className={styles.header}>
        <h1>dataverse</h1>
        <Navigation onShownList={onShownList} />
      </header>
    </>
  );
}

export default Header;
