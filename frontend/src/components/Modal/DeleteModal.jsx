import { motion } from "framer-motion";
import Backdrop from "./Backdrop";

const DeleteModal = ({ handleClose, handleDelete }) => {
  return (
    <Backdrop onClick={handleClose} backdrop="bg-black/20">
      <div
        className="bg-white p-3 w-80 rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="justify-center flex">
          <i className="fal text-red-500 text-4xl fa-trash-alt"></i>
        </div>
        <span className="block text-center text-gray-800 font-medium">
          You are about to delete a product.
        </span>
        <p className="text-center  mt-2 text-sm">
          Are you sure you want to delete this product? This action cannot be
          undone.
        </p>
        <div className="flex justify-end space-x-3 mt-2">
          <button
            type="button"
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 text-sm font-bold"
          >
            Cancel
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 px-10 py-1 rounded-full text-sm text-white"
            type="button"
            onClick={handleDelete}
          >
            Yes
          </button>
        </div>
      </div>
    </Backdrop>
  );
};
export default DeleteModal;
