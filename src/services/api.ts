import {
  SUBMIT_LOAN_PARAMETERS_URL,
  WORK_PLACES_URL,
} from "../constants/references";

export const fetchWorkPlaces = async () => {
  try {
    const response = await fetch(WORK_PLACES_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ошибка при получении списка мест работы:", error);
    return [];
  }
};

export const submitLoanApplication = async (title: string) => {
  try {
    const response = await fetch(SUBMIT_LOAN_PARAMETERS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Ошибка при отправке данных:", error);
    throw error;
  }
};
