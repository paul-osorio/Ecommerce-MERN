import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../app/lib/user";

const useLoginUser = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    try {
      const response = await loginUser(values);
      const message = response.data.message;
      if (message === "User not found") {
        setError(message);
      } else if (message === "Incorrect password") {
        setError(message);
      } else {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { onSubmit, error };
};

export default useLoginUser;
