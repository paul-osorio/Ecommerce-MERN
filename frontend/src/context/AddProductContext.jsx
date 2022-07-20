import { createContext, useState, useEffect } from "react";

export const AddProductContext = createContext();

export const AddProductProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const values = {
    step,
    setStep,
    formData,
    setFormData,
  };
  return (
    <AddProductContext.Provider value={values}>
      {children}
    </AddProductContext.Provider>
  );
};
