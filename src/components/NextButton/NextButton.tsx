import { NextButtonProps } from "./NextButton.types";

import styles from "./NextButton.module.css";

const NextButton = ({ type = "button", disabled = false }: NextButtonProps) => {
  return (
    <button type={type} className={styles.button} disabled={disabled}>
      Далее
    </button>
  );
};

export default NextButton;
