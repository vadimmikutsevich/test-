import { SubmitButtonProps } from "./SubmitButton.types";

import styles from "./SubmitButton.module.css";

const SubmitButton = ({ onClick }: SubmitButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      Подать заявку
    </button>
  );
};

export default SubmitButton;
