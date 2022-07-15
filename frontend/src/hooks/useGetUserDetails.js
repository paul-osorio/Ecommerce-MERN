import { useState, useEffect } from "react";
import { getUserDetails } from "../app/lib/user";

const useGetUserDetails = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserDetails()
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  return { user, loading };
};

export default useGetUserDetails;
