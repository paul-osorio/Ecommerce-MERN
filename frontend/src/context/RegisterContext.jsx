import { createContext, useState } from "react";

export const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  const [personalInfo, setPersonalInfo] = useState({});

  const [showDropdown, setShowDropdown] = useState(false);
  const [region, setRegion] = useState(null);
  const [province, setProvince] = useState(null);
  const [city, setCity] = useState(null);
  const [barangay, setBarangay] = useState(null);

  const [details, setDetails] = useState({});
  const [error, setError] = useState(null);

  const dataValue = {
    error,
    setError,
    details,
    setDetails,
    setPersonalInfo,
    personalInfo,
    showDropdown,
    setShowDropdown,
    region,
    setRegion,
    province,
    setProvince,
    city,
    setCity,
    barangay,
    setBarangay,
  };

  return (
    <RegisterContext.Provider value={dataValue}>
      {children}
    </RegisterContext.Provider>
  );
};
