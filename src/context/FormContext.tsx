import React, { createContext, useContext, useState } from "react";

interface FormData {
  phone: string;
  firstName: string;
  lastName: string;
  gender: string;
  address: string;
  workPlace: string;
  loanAmount: number;
  loanTerm: number;
}

interface FormContextProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const defaultFormData: FormData = {
  phone: "",
  firstName: "",
  lastName: "",
  gender: "",
  address: "",
  workPlace: "",
  loanAmount: 200,
  loanTerm: 10,
};

const FormContext = createContext<FormContextProps | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<FormData>(defaultFormData);

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = (): FormContextProps => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
