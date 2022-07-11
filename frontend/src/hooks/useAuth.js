import { useEffect, useState } from "react";
import authData from "../app/lib/auth";

export default function useAuth() {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const fetchUserAuth = async () => {
      try {
        const response = await authData();
        setAuth(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserAuth();
  }, []);

  return auth;
}
