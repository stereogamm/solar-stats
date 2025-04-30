import styles from "./item.module.css";


function Item({ name, description, bodyType, id }) {
 
  return (
    <li className={styles.list} key={id}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{`Discovered by ${description}`}</div>
        <div className={styles.numbers}>{bodyType}</div>
        <button onClick={()=>console.log('rrr')} className={styles["item-button"]}>
          <svg
            width="31px"
            height="31px"
            strokeWidth="1.4"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#ff5900"
          >
            <path
              d="M9 12H12M15 12H12M12 12V9M12 12V15"
              stroke="#ff5900"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6Z"
              stroke="#ff5900"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      </div>
    </li>
  );
}

export default Item;
