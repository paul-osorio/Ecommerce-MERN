import { Link, NavLink } from "react-router-dom";

const CustomAccountLinks = ({ Name, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => [
        isActive
          ? " text-white bg-purple-500 text-sm shadow font-medium py-2 rounded-full px-4 w-full "
          : " text-sm px-4 hover:bg-gray-200 py-2 rounded-full w-full transition ",
      ]}
    >
      {Name}
    </NavLink>
  );
};

export default CustomAccountLinks;
