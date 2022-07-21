import { useState, useEffect } from "react";
import { getAllProduct, getOneProduct } from "../app/lib/product";

const useGetAllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await getAllProduct();
      const data = response.data.products;
      var prod = [];

      data.map((product) => {
        prod.push({
          _id: product._id,
          productName: product?.productName,
          price: product?.price,
          image: product?.images[0],
          description: product?.description,
        });
      });

      setProducts(prod);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading, error };
};
export default useGetAllProducts;
