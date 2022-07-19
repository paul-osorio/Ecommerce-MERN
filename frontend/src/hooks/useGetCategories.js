import { useEffect, useState } from "react";
import { getProductCategories } from "../app/lib/product";

const useGetCategories = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const response = await getProductCategories();
      const data = response.data.categories;
      const dataFile = [];
      data
        .sort((a, b) => (a.cat_name > b.cat_name ? 1 : -1))
        .map((category) => {
          dataFile.push({
            value: category.cat_name,
            label: category.cat_name,
          });
        });

      setCategories(dataFile);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return categories;
};

export default useGetCategories;
