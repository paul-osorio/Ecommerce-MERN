import { useDispatch } from "react-redux";
import { setFailedToAdd } from "../../app/reducers/cartReducer";
import Backdrop from "./Backdrop";
import { motion } from "framer-motion";

const NotEnoughStockModal = ({ handleClose }) => {
  const dispatch = useDispatch();
  return (
    <Backdrop
      backdrop="bg-black/5"
      onClick={() => {
        dispatch(setFailedToAdd(false));
      }}
    >
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        exit={{ y: -200 }}
        className="bg-white rounded w-64 px-5 py-3 shadow absolute top-10 right-10"
      >
        <span className="block text-center">
          <i className="fad fa-exclamation-circle text-3xl text-red-500"></i>
        </span>
        <span className="block text-gray-600 text-center text-sm">
          Unable to add selected quantity to cart as it would exceed your
          purchase limit.
        </span>
      </motion.div>
    </Backdrop>
  );
};

export default NotEnoughStockModal;
