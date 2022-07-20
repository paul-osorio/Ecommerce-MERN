import { createContext, useState, useContext } from "react";
import useGetUserDetails from "../hooks/useGetUserDetails";
import { createShop } from "../app/lib/shop";

export const MyShopContext = createContext();

export const MyShopProvider = ({ children }) => {
  const data = useGetUserDetails().user;
  const prof = data?.profilePicture;
  const [step, setStep] = useState(1);
  const [shopName, setShopName] = useState("");
  const [banner, setBanner] = useState(null);
  const [bannerName, setBannerName] = useState(null);
  const [profileName, setProfileName] = useState(prof);
  const [profile, setProfile] = useState(null);
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async () => {
    setIsSubmitting(true);
    if (description) {
      const data = {
        shop_name: shopName,
        shop_banner: banner,
        shop_profile: profile,
        shop_description: description,
      };
      try {
        await createShop(data);
        setIsSubmitting(false);
        window.location.reload();
      } catch (error) {
        alert(error);
        setIsSubmitting(false);
      }
    } else {
      setError("Shop description is required");
      setIsSubmitting(false);
    }
  };

  const value = {
    isSubmitting,
    profileName,
    setProfileName,
    bannerName,
    setBannerName,
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
