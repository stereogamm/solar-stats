import Modal from "../UI/Modal";
import styles from "./cart.module.css";

function Cart({}) {
  const planetList = (
    <ul className={styles["cart-items"]}>
      {[{ id: "m1", name: "Pluto", price: 56.8  }].map((item, id) => (
        <li key={id}>{item.name}</li>
      ))}
    </ul>
  );


  return (
    <Modal>
      {planetList}
      <div className={styles.total}>
        <span>Total</span>
        <span>55</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]}>Close</button>
        <button className={styles.button}>To sum up</button>
      </div>
    </Modal>
  );
}

export default Cart;
