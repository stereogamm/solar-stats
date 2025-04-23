import styles from "./description.module.css";

function Description() {
  return (
    <section className={styles.text}>
      <h2>Overview</h2>
      <p className={styles.paragraph}>
        key facts and parameters of the planets
      </p>
    </section>
  );
}

export default Description;
