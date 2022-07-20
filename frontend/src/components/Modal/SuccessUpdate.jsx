import { motion } from "framer-motion";
import Backdrop from "./Backdrop";

const SuccessUpdate = ({ handleClose }) => {
  return (
    <Backdrop onClick={handleClose}>
      <div
        className="bg-white shadow shadow-gray-300 py-3 px-5 rounded-xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full flex justify-center">
          <img
            src="https://www.svgrepo.com/show/157817/success.svg"
            className="h-12 w-12"
            alt=""
          />
        </div>
        <span className="block text-center block text-gray-700 font-medium mt-2">
          SUCCESS
        </span>
        <p className="block text-sm text-center text-gray-500">
          Your account has been <br />
          successfull updated
        </p>
        <div className="w-full flex justify-center mt-2">
          <button
            onClick={handleClose}
            className="w-3/4 hover:bg-green-600 bg-green-500 rounded-full text-white text-sm"
          >
            Done
          </button>
        </div>
      </div>
    </Backdrop>
  );
};
export default SuccessUpdate;
