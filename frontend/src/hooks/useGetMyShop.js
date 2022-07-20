import { useState, useEffect } from "react";
import { getShop } from "../app/lib/shop";

const useGetMyShop = () => {
  const [shop, setShop] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getShop()
      .then((res) => {
        setShop(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  return { shop, loading };
};

export default useGetMyShop;
