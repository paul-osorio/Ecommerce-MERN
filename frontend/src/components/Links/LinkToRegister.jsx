import { Link } from "react-router-dom";
const LinkToRegister = () => {
  return (
    <div className="flex justify-center items-center space-x-1 mt-5">
      <span className="text-sm text-gray-600">Don't have an account?</span>
      <Link
        to="/register"
        className="text-gray-700 hover:text-gray-900 font-medium text-sm"
      >
        Sign up
      </Link>
    </div>
  );
};

export default LinkToRegister;
