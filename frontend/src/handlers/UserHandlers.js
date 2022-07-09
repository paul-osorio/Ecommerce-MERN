import { useState, useEffect } from "react";
import { loginUser, getUserById } from "../api/lib/user";

const loginUserHandler = async () => {
  const [error, setError] = useState(null);

  const login = async (user) => {
    try {
      const response = await loginUser({
        email: user.email,
        password: user.password,
      });
    } catch (error) {
      setError(error);
    }
  };

  return { login, error };
};

const getUserHandler = (id) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const fetchUser = async () => {
    try {
      const response = await getUserById(id);
      setData(response);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [id]);

  return { data, error };
};

export { loginUserHandler, getUserHandler };
