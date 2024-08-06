import React from "react";
import styles from "./Modal.module.css";
import { useModalContext } from "../../context/ModalContext";

const Modal: React.FC = () => {
  const { modalContent, isModalVisible, hideModal } = useModalContext();

  if (!isModalVisible) return null;

  return (
    <div className={styles.modalOverlay} onClick={hideModal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {modalContent}
        <button className={styles.closeButton} onClick={hideModal}>
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default Modal;
