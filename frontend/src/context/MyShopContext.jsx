import { createContext, useState, useContext } from "react";
import useGetUserDetails from "../hooks/useGetUserDetails";

export const MyShopContext = createContext();

export const MyShopProvider = ({ children }) => {
  const data = useGetUserDetails().user;
  const prof = data?.profilePicture;
  const [step, setStep] = useState(1);
  const [shopName, setShopName] = useState("");
  const [banner, setBanner] = useState(null);
  const [profile, setProfile] = useState(prof);
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const onSubmit = () => {
    if (description) {
    } else {
      setError("Shop description is required");
    }
  };

  const value = {
    error,
    setError,
    onSubmit,
    description,
    setDescription,
    banner,
    setBanner,
    profile,
    setProfile,
    shopName,
    setShopName,
    step,
    setStep,
  };
  return (
    <MyShopContext.Provider value={value}>{children}</MyShopContext.Provider>
  );
};

export const useMyShop = () => useContext(MyShopContext);
