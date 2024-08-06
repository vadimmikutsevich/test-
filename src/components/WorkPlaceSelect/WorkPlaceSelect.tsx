import { useEffect, useState } from "react";

import { fetchWorkPlaces } from "../../services/api";

import { Category, WorkPlaceSelectProps } from "./WorkPlaces.types";

import styles from "./WorkPlaceSelect.module.css";

const WorkPlaceSelect = ({
  value,
  onChange,
  showError,
}: WorkPlaceSelectProps) => {
  const [options, setOptions] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadWorkPlaces = async () => {
      const data = await fetchWorkPlaces();
      setOptions(data);
      setLoading(false);
    };

    loadWorkPlaces();
  }, []);

  return (
    <div className={styles.container}>
      <label>
        Место работы:
        {loading ? (
          <p>Загрузка...</p>
        ) : (
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={showError ? styles.error : ""}
          >
            <option value="">Выберите...</option>
            {options.map((option) => (
              <option key={option.slug} value={option.slug}>
                {option.name}
              </option>
            ))}
          </select>
        )}
      </label>
      {showError && (
        <span className={styles.errorMessage}>
          Поле обязательно для заполнения
        </span>
      )}
    </div>
  );
};

export default WorkPlaceSelect;
