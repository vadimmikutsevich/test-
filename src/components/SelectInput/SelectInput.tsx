import { SelectInputProps } from "./SelectInput.types";

import styles from "./SelectInput.module.css";

const SelectInput = ({
  label,
  value,
  onChange,
  options,
  showError,
}: SelectInputProps) => {
  return (
    <div className={styles.container}>
      <label>
        {label}:
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={showError ? styles.error : ""}
        >
          <option value="">Выберите...</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      {showError && (
        <span className={styles.errorMessage}>
          Поле обязательно для заполнения
        </span>
      )}
    </div>
  );
};

export default SelectInput;
