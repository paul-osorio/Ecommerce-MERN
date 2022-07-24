import { useMutation } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { addToCart } from "../../../app/lib/cart";
import { useDispatch, useSelector } from "react-redux";
import {
  setAddedToCart,
  setFailedToAdd,
} from "../../../app/reducers/cartReducer";
import { useEffect } from "react";

const MainCardButtons = ({ value, setSuccess, data, qty }) => {
  const successaddtocart = useSelector((state) => state.cart.addedToCart);
  const failedaddtocart = useSelector((state) => state.cart.failedToAdd);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const { mutate: tocart } = useMutation(["addToCart", id], addToCart, {
    onSuccess: (data) => {
      dispatch(setAddedToCart(true));
    },
    onError: (error) => {
      if (error.response.status === 400) {
        if (error.response.data.message === "Not enough stock") {
          dispatch(setFailedToAdd(true));
        }
      }
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(setAddedToCart(false));
    }, 5000);
    return () => clearInterval(interval);
  }, [successaddtocart]);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(setFailedToAdd(false));
    }, 5000);
    return () => clearInterval(interval);
  }, [failedaddtocart]);

  return (
    <div className="flex space-x-2 mt-10">
      <button
        onClick={() => {
          tocart({ item_id: id, quantity: value });
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
