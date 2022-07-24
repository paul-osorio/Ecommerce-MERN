import { useDispatch } from "react-redux";
import { setAddedToCart } from "../../app/reducers/cartReducer";
import Backdrop from "./Backdrop";
import { motion } from "framer-motion";

const AddedToCartModal = ({ handleClose }) => {
  const dispatch = useDispatch();
  return (
    <Backdrop
      backdrop="bg-black/5"
      onClick={() => {
        dispatch(setAddedToCart(false));
      }}
    >
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        exit={{ y: -100 }}
        className="bg-white rounded px-5 py-3 w-64 shadow absolute top-10 right-10"
      >
        <span className="block text-center">
          <i className="fad text-green-500 text-3xl fa-check-circle"></i>
        </span>
        <span className="block text-gray-600 text-sm text-center">
          Item has been successfully added to cart
        </span>
      </motion.div>
    </Backdrop>
  );
};

export default AddedToCartModal;
