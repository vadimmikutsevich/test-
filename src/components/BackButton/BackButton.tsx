import { useNavigate } from "react-router-dom";

import { BackButtonProps } from "./BackButton.types";

import styles from "./BackButton.module.css";

const BackButton = ({ to }: BackButtonProps) => {
  const navigate = useNavigate();
  return (
    <button className={styles.button} onClick={() => navigate(to)}>
      Назад
    </button>
  );
};

export default BackButton;
