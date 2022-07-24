import { useQuery } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getOneProduct } from "../../app/lib/product";
import { setAddedToCart, setFailedToAdd } from "../../app/reducers/cartReducer";
import AddedToCartModal from "../../components/Modal/AddedToCartModal";
import NotEnoughStockModal from "../../components/Modal/NotEnoughStockModal";
import DescriptionCard from "./components/DescriptionCard";
import MainCard from "./components/MainCard";
import RatingsCard from "./components/RatingsCard";
import ShopCard from "./components/ShopCard";

const Product = () => {
  const addedtocart = useSelector((state) => state.cart.addedToCart);
  const failedtoadd = useSelector((state) => state.cart.failedToAdd);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const { isLoading, data, error } = useQuery(["oneproduct", id], async () => {
    const response = await getOneProduct(id);
    return response.data;
  });
  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <>
      <div className="flex flex-col space-y-3 items-center mb-10">
        <MainCard
          data={data?.product}
          stars={data?.stars}
          rating={data?.rating}
        />
        <ShopCard shopID={data?.product.user_id} />
        <DescriptionCard description={data?.product.description} />
        <RatingsCard stars={data?.stars} rate={data?.rating} />
      </div>
      <AnimatePresence>
        {addedtocart && (
          <AddedToCartModal
            handleClose={() => {
              dispatch(setAddedToCart(false));
            }}
          />
        )}

        {failedtoadd && (
          <NotEnoughStockModal
            handleClose={() => {
              dispatch(setFailedToAdd(false));
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Product;
