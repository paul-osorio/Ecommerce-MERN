import { createContext, useContext, useEffect, useState } from "react";
import axiosClient from "../app/apiClient";
import { getUserDetails } from "../app/lib/user";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axiosClient.get("/user").then((res) => {
      setUser(res.data);
    });
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

export default UserProvider;
