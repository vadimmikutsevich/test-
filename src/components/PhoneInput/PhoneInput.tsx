import React from "react";

import { PhoneInputProps } from "./PhoneInput.types";

import styles from "./PhoneInput.module.css";

const PhoneInput = ({ value, onChange, showError }: PhoneInputProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = e.target.value.replace(/\D/g, "").slice(0, 10);
    onChange(formattedValue);
  };

  return (
    <div className={styles.container}>
      <label>
        Телефон:
        <input
          type="tel"
          value={value}
          onChange={handleInputChange}
          placeholder="0XXX XXX XXX"
          className={showError ? styles.error : ""}
        />
      </label>
      {showError && (
        <span className={styles.errorMessage}>
          Введите корректный номер телефона
        </span>
      )}
    </div>
  );
};

export default PhoneInput;
