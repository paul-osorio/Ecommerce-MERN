import { Link } from "react-router-dom";
export const ViewCart = ({ onClick }) => {
  return (
    <div className="">
      <div className="w-full rounded-b-xl text-gray-500 text-sm text-center bg-gray-50 p-2 py-4">
        <Link
          to="/cart"
          onClick={onClick}
          className="hover:bg-purple-600 bg-purple-500 p-2 px-3 text-white rounded-full"
        >
          View My Shopping Cart
        </Link>
      </div>
    </div>
  );
};
