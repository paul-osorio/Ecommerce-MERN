import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getOneProduct } from "../../app/lib/product";
import DescriptionCard from "./components/DescriptionCard";
import MainCard from "./components/MainCard";
import RatingsCard from "./components/RatingsCard";
import ShopCard from "./components/ShopCard";

const Product = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const { isLoading, data, error } = useQuery(["oneproduct", id], async () => {
    const response = await getOneProduct(id);
    return response.data.product;
  });

  return (
    <div className="flex flex-col items-center">
      <MainCard data={data} />
      <ShopCard />
      <DescriptionCard />
      <RatingsCard />
    </div>
  );
};

export default Product;
