import ReactDOM from "react-dom";
import styles from "./modal.module.css";

function Backdrop({ onHideList }) {
  return <div onClick={onHideList} className={styles.backdrop}></div>;
}

function ModalWindow(props) {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
}

const portalElement = document.getElementById("overlays");

function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onHideList={props.onHideList} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalWindow>{props.children}</ModalWindow>,
        portalElement
      )}
    </>
  );
}

export default Modal;
