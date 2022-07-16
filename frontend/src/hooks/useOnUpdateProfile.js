import { useState, useEffect } from "react";
import { updateUserById } from "../app/lib/user";
import useGetUserDetails from "./useGetUserDetails";

const useOnUpdateProfile = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const data = useGetUserDetails().user;

  const initialValues = {
    nameFirst: data?.nameFirst || "",
    nameLast: data?.nameLast || "",
    email: data?.email || "",
    phoneNumber: data?.phoneNumber || "",
    gender: data?.gender || "",
    month: data?.dateOfBirth.month || "",
    day: parseInt(data?.dateOfBirth.day) || "",
    year: parseInt(data?.dateOfBirth.year) || "",
  };

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      await updateUserById(values);
      setLoading(false);
      setSuccess(true);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSuccess(false);
    }, 3000);

    return () => clearInterval(interval);
  }, [success]);

  return { onSubmit, loading, initialValues, success, setSuccess };
};

export default useOnUpdateProfile;
