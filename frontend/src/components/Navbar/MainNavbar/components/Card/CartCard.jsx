import { motion } from "framer-motion";
import { ViewCart } from "./Cart/ViewCart";
import { NoItem } from "./Cart/NoItem";
import { ItemCard } from "./Cart/ItemCard";
import { useQuery } from "@tanstack/react-query";
import { getMyCart } from "../../../../../app/lib/cart";
import { Spinner } from "../../../../Misc/Spinner";

const CartCard = ({ onClose }) => {
  const { isLoading, data, error } = useQuery(["cart"], async () => {
    const response = await getMyCart();
    return response.data.data;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "tween", duration: 0.2 }}
      className="z-50 absolute w-72 tablet:right-0 mobile:-right-10 bg-white  shadow shadow-gray-300  rounded-xl"
    >
      <div className="w-full rounded-t-xl bg-gray-50 p-2 py-3 flex justify-between items-center">
        <span className="text-gray-400 text-sm">Added Products</span>
        <span className="text-xs text-gray-600">1 more</span>
      </div>
      <div className="py-2">
        {isLoading ? (
          <Spinner />
        ) : data?.length > 0 ? (
          data.slice(0, 3).map((item) => <ItemCard key={item.id} item={item} />)
        ) : (
          <NoItem />
        )}
      </div>
      <ViewCart onClick={onClose} />
    </motion.div>
  );
};

export default CartCard;
