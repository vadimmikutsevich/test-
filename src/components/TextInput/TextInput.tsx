import { TextInputProps } from "./TextInput.types";

import styles from "./TextInput.module.css";

const TextInput = ({ label, value, onChange, showError }: TextInputProps) => {
  return (
    <div className={styles.container}>
      <label>
        {label}:
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={showError ? styles.error : ""}
        />
      </label>
      {showError && (
        <span className={styles.errorMessage}>
          Поле обязательно для заполнения
        </span>
      )}
    </div>
  );
};

export default TextInput;
