import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { NextButton } from "../../components/NextButton";
import { PhoneInput } from "../../components/PhoneInput";
import { SelectInput } from "../../components/SelectInput";
import { TextInput } from "../../components/TextInput";

import { useFormContext } from "../../context/FormContext";

import styles from "./PersonalInfoForm.module.css";

const PersonalInfoForm = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useFormContext();
  const [showError, setShowError] = useState({
    phone: false,
    firstName: false,
    lastName: false,
    gender: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newShowError = {
      phone: !formData.phone || formData.phone.length < 10,
      firstName: !formData.firstName,
      lastName: !formData.lastName,
      gender: !formData.gender,
    };

    setShowError(newShowError);

    if (Object.values(newShowError).some((error) => error)) {
      return;
    }

    navigate("/address");
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setShowError((prev) => ({ ...prev, [field]: false }));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>Личные данные</h1>
      <PhoneInput
        value={formData.phone}
        onChange={(value) => handleChange("phone", value)}
        showError={showError.phone}
      />
      <TextInput
        label="Имя"
        value={formData.firstName}
        onChange={(value) => handleChange("firstName", value)}
        showError={showError.firstName}
      />
      <TextInput
        label="Фамилия"
        value={formData.lastName}
        onChange={(value) => handleChange("lastName", value)}
        showError={showError.lastName}
      />
      <SelectInput
        label="Пол"
        value={formData.gender}
        onChange={(value) => handleChange("gender", value)}
        options={["Мужской", "Женский"]}
        showError={showError.gender}
      />
      <NextButton type="submit" />
    </form>
  );
};

export default PersonalInfoForm;
