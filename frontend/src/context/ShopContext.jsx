import { createContext, useContext } from "react";
import { useSearchParams } from "react-router-dom";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get("type");

  const value = { searchParams, setSearchParams, type };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export const useShopContext = () => useContext(ShopContext);
