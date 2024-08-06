import { RangeInputProps } from "./RangeInput.types";

import styles from "./RangeInput.module.css";

const RangeInput = ({
  label,
  value,
  min,
  max,
  step,
  onChange,
  showError,
}: RangeInputProps) => {
  return (
    <div className={styles.container}>
      <label>
        {label}:
        <input
          type="range"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(e) => onChange(Number(e.target.value))}
          className={showError ? styles.error : styles.input}
        />
        <span>{value}</span>
      </label>
      {showError && (
        <span className={styles.errorMessage}>
          Поле обязательно для заполнения
        </span>
      )}
    </div>
  );
};

export default RangeInput;
