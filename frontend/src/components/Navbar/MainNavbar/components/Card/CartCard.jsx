import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CartCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "tween", duration: 0.2 }}
      className="z-20 absolute w-72 tablet:right-0 mobile:-right-10 bg-white  shadow shadow-gray-300  rounded-xl"
    >
      <div className="w-full rounded-t-xl bg-gray-50 p-2 py-3 flex justify-between items-center">
        <span className="text-gray-400 text-sm">Added Products</span>
        <span className="text-xs text-gray-600">1 more</span>
      </div>
      <div className="py-2">
        <NoItem />

        {/* <ItemList /> */}
      </div>
      <ViewCart />
    </motion.div>
  );
};

const ItemList = () => {
  return (
    <div className="px-2">
      <div
        className="w-full flex rounded-lg p-2 items-center hover:bg-gray-100"
        role="button"
      >
        <div className="mr-3">
          <div className="h-8 w-8 bg-red-500 rounded"></div>
        </div>
        <div className="w-full h-18 ">
          <h1 className="text-sm font-medium w-52 overflow-hidden text-ellipsis whitespace-nowrap">
            Title asfsa fas f asf asf asf as fa sf
          </h1>
        </div>
      </div>
    </div>
  );
};

const NoItem = () => {
  return (
    <div className="p-2 py-3 bg-white">
      <div className="w-full flex justify-center">
        <img
          src="https://www.svgrepo.com/show/233885/shopping-bag.svg"
          className="h-10 w-10 opacity-80"
          alt=""
        />
      </div>
      <span className="block text-center text-sm text-gray-500">
        No Products Yet
      </span>
    </div>
  );
};

const ViewCart = () => {
  return (
    <div className="">
      <div className="w-full rounded-b-xl text-gray-500 text-sm text-center bg-gray-50 p-2 py-4">
        <Link
          to="/"
          className="hover:bg-purple-600 bg-purple-500 p-2 px-3 text-white rounded-full"
        >
          View My Shopping Cart
        </Link>
      </div>
    </div>
  );
};

export default CartCard;
