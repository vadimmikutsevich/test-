import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { WorkPlacesSelect } from "../../components/WorkPlaceSelect";
import { TextInput } from "../../components/TextInput";
import { BackButton } from "../../components/BackButton";
import { NextButton } from "../../components/NextButton";

import { useFormContext } from "../../context/FormContext";

import styles from "./AddressForm.module.css";

const AddressForm = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useFormContext();
  const [showError, setShowError] = useState({
    address: false,
    workPlace: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newShowError = {
      address: !formData.address,
      workPlace: !formData.workPlace,
    };

    setShowError(newShowError);

    if (Object.values(newShowError).some((error) => error)) {
      return;
    }

    navigate("/loan-parameters");
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setShowError((prev) => ({ ...prev, [field]: false }));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>Адрес и место работы</h1>
      <WorkPlacesSelect
        value={formData.workPlace}
        onChange={(value) => handleChange("workPlace", value)}
        showError={showError.workPlace}
      />
      <TextInput
        label="Адрес проживания"
        value={formData.address}
        onChange={(value) => handleChange("address", value)}
        showError={showError.address}
      />
      <div className={styles.buttonContainer}>
        <BackButton to="/" />
        <NextButton type="submit" />
      </div>
    </form>
  );
};

export default AddressForm;
