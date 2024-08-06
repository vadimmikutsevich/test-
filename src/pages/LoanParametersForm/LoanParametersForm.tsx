import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useFormContext } from "../../context/FormContext";
import { useModalContext } from "../../context/ModalContext";

import { RangeInput } from "../../components/RangeInput";
import { BackButton } from "../../components/BackButton";
import { SubmitButton } from "../../components/SubmitButton";

import styles from "./LoanParametersForm.module.css";
import { submitLoanApplication } from "../../services/api";

const LoanParametersForm = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useFormContext();
  const { showModal } = useModalContext();
  const [showError, setShowError] = useState({
    loanAmount: false,
    loanTerm: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newShowError = {
      loanAmount: formData.loanAmount < 200 || formData.loanAmount > 1000,
      loanTerm: formData.loanTerm < 10 || formData.loanTerm > 30,
    };

    setShowError(newShowError);

    if (Object.values(newShowError).some((error) => error)) {
      return;
    }

    try {
      const result = await submitLoanApplication(
        `${formData.firstName} ${formData.lastName}`
      );
      showModal(
        <div>
          <p>
            Поздравляем, {formData.lastName} {formData.firstName}. Вам одобрена
            сумма {formData.loanAmount} на {formData.loanTerm} дней.
          </p>
        </div>
      );
      console.log(result);
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
    }
  };

  const handleChange = (field: string, value: number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setShowError((prev) => ({ ...prev, [field]: false }));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>Параметры займа</h1>
      <RangeInput
        label="Сумма займа ($)"
        value={formData.loanAmount}
        min={200}
        max={1000}
        step={100}
        onChange={(value) => handleChange("loanAmount", value)}
        showError={showError.loanAmount}
      />
      <RangeInput
        label="Срок займа (дней)"
        value={formData.loanTerm}
        min={10}
        max={30}
        step={1}
        onChange={(value) => handleChange("loanTerm", value)}
        showError={showError.loanTerm}
      />
      <div className={styles.buttonContainer}>
        <BackButton to="/address" />
        <SubmitButton onClick={handleSubmit} />
      </div>
    </form>
  );
};

export default LoanParametersForm;
