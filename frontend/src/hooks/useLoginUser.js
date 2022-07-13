import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../app/lib/auth";

const useLoginUser = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const onSubmit = async (values) => {
    setLoading(true);
    try {
      const response = await loginUser(values);
      const message = response.data.message;
      if (message === "User not found") {
        setError({ message, type: "email" });
      } else if (message === "Incorrect password") {
        setError({ message, type: "password" });
      } else {
        navigate("/");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return { onSubmit, error, setError, loading };
};

export default useLoginUser;
