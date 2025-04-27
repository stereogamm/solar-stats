import ReactDOM from "react-dom";
import styles from "./modal.module.css";

function Backdrop({ onHideList }) {
  return <div onClick={onHideList} className={styles.backdrop}></div>;
}

function ModalWindow({ children }) {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

const portalElement = document.getElementById("overlays");

function Modal({ children, onHideList }) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onHideList={onHideList} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalWindow>{children}</ModalWindow>,
        portalElement
      )}
    </>
  );
}

export default Modal;
