import { useMutation } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { addToCart } from "../../../app/lib/cart";

const MainCardButtons = ({ value, setSuccess, data, qty }) => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const cartQty = data?.quantity || 0;

  const { mutate: tocart } = useMutation(["addToCart", id], addToCart, {
    onSuccess: (data) => {
      alert("Added to cart");
    },
  });

  return (
    <div className="flex space-x-2 mt-10">
      <button
        onClick={() => {
          if (value > qty - cartQty) {
            alert("Out of stock");
          } else {
            tocart({ item_id: id, quantity: value });
          }
        }}
        className="border-purple-500 hover:bg-purple-50 text-purple-600 border px-5 py-2"
      >
        Add To Cart
      </button>
      <button className="bg-purple-500  text-white hover:bg-purple-600 border-purple-500  px-5 py-2">
        Buy Now
      </button>
    </div>
  );
};

export default MainCardButtons;
