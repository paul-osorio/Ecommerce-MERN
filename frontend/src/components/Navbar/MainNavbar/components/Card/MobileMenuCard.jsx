import { NavLink } from "react-router-dom";
import useGetUserDetails from "../../../../../hooks/useGetUserDetails";

const MobileMenuCard = () => {
  const { user } = useGetUserDetails();
  const profilePicture = user?.profilePicture;
  const fullname = user?.nameFirst + " " + user?.nameLast;

  return (
    <div className="absolute w-72 right-2 bg-white rounded-xl shadow shadow-gray-300 py-2">
      <div className="py-2">
        <Menu Title="Home" to="" />
        <Menu Title="Shops" to="shops" />
        <Menu Title="Help" to="help" />
      </div>

      <div className="py-2 mx-5 bg-gray-100 rounded-xl">
        <div className="flex items-center justify-center pt-2">
          <Profile ProfilePicture={profilePicture} />
        </div>
        <span className="text-center block font-medium leading-3 mt-2">
          {fullname}
        </span>
        <span className="block text-center text-xs text-gray-500">
          My Account
        </span>
      </div>
    </div>
  );
};

const Profile = ({ ProfilePicture }) => {
  return (
    <div className="flex items-center">
      <img src={ProfilePicture} className="w-14 h-14 rounded-full" />
    </div>
  );
};
const Menu = ({ Title, to }) => {
  return (
    <div className="px-2">
      <NavLink
        to={to}
        className={({ isActive }) => [
          " py-3 px-3 w-full rounded-lg flex items-center hover:bg-gray-100 ",
          isActive ? " text-purple-500 font-medium" : undefined,
        ]}
      >
        {Title}
      </NavLink>
    </div>
  );
};

export default MobileMenuCard;
