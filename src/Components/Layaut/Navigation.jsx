import styles from "./navigation.module.css";
import { useContext } from "react";
import CartContext from "../Store/cart-context";

function Navigation({ onShownList }) {
  const context = useContext(CartContext); 
  const count = context.items.length;
  

  return (
    <div className={styles["nav-buttons"]}>
      <button onClick={onShownList}>list</button>
      <span className={styles.count}>{count}</span>
      <button>statistic</button>
    </div>
  );
}

export default Navigation;
