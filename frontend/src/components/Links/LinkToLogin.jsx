import { Link } from "react-router-dom";

const LinkToLogin = () => {
  return (
    <span className="block text-center text-sm font-medium my-5">
      <span className="text-gray-800">Already have an account?</span>{" "}
      <Link to="/login" className="text-indigo-500 hover:text-indigo-700">
        Sign In
      </Link>
    </span>
  );
};

export default LinkToLogin;
