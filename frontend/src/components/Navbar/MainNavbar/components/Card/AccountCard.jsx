import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../../../../app/lib/auth";

const AccountCard = () => {
  const navigate = useNavigate();

  const SignOut = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "tween", duration: 0.2 }}
      className="z-20 absolute w-44 right-2 bg-white py-2  shadow shadow-gray-300 rounded-xl"
    >
      <Links
        Title="My Account"
        Icon={<i class="text-sm fad fa-user-alt "></i>}
      />
      <Links
        Title="My Purchase"
        Icon={<i class="text-sm fad fa-money-check-alt"></i>}
      />
      <Links
        onClick={SignOut}
        Title="Sign Out"
        Icon={<i class="fad fa-sign-out-alt"></i>}
      />
    </motion.div>
  );
};

const Links = ({ Title, Icon, onClick }) => {
  return (
    <div className="px-2">
      <div
        onClick={onClick}
        className="w-full py-3 px-3 rounded-lg  flex items-center group hover:bg-gray-100"
        role="button"
      >
        <div className="flex items-center w-5 justify-center group-hover:text-purple-700">
          {Icon}
        </div>
        <div className="flex items-center">
          <span className="text-gray-500 text-sm mx-3 group-hover:text-purple-700">
            {Title}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AccountCard;
