import { Link, NavLink } from "react-router-dom";
import useGetUserDetails from "../../../../../hooks/useGetUserDetails";
import MenuLink from "../Links/MobilMenuLink";
import { Links } from "./AccountCard";
import { motion } from "framer-motion";
import { logoutUser } from "../../../../../app/lib/auth";
import { useNavigate } from "react-router-dom";

const MobileMenuCard = ({ onClose }) => {
  const { user } = useGetUserDetails();
  const profilePicture = user?.profilePicture;
  const fullname = user?.nameFirst + " " + user?.nameLast;
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
      className="absolute w-72 right-2 bg-white z-50 rounded-xl shadow shadow-gray-300 py-2"
    >
      <div className="py-2">
        <MenuLink Title="Home" onClick={onClose} to="" />
        <MenuLink Title="Shops" onClick={onClose} to="shops" />
        <MenuLink Title="Help" onClick={onClose} to="help" />
      </div>

      <div className="py-2 mx-5 bg-gray-100 rounded-xl">
        <Link to="/myaccount" onClick={onClose} className="group">
          <div className="flex items-center justify-center pt-2">
            <Profile ProfilePicture={profilePicture} />
          </div>
          <span className="text-center group-active:underline block font-medium leading-3 mt-2">
            {fullname}
          </span>
          <span className="block text-center group-active:underline text-xs text-gray-500">
            My Account
          </span>
        </Link>

        <div className="flex justify-center">
          <Links
            Title="My Purchase"
            Icon={<i class="text-sm fad fa-money-check-alt"></i>}
          />
        </div>
      </div>
      <div className="px-3 mt-2">
        <Links
          onClick={SignOut}
          Title="Sign Out"
          Icon={<i class="fad fa-sign-out-alt"></i>}
        />
      </div>
    </motion.div>
  );
};

const Profile = ({ ProfilePicture }) => {
  return (
    <div className="flex items-center">
      <img src={ProfilePicture} className="w-14 h-14 rounded-full" />
    </div>
  );
};

export default MobileMenuCard;
