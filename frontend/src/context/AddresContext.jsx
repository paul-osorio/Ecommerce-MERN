import { createContext, useState } from "react";

export const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [region, setRegion] = useState(null);
  const [province, setProvince] = useState(null);
  const [city, setCity] = useState(null);
  const [barangay, setBarangay] = useState(null);

  const dataValue = {
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
    <AddressContext.Provider value={dataValue}>
      {children}
    </AddressContext.Provider>
  );
};
