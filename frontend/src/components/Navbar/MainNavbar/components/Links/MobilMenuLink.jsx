import { Link, NavLink } from "react-router-dom";

const MenuLink = ({ Title, to, onClick }) => {
  return (
    <div className="px-5">
      <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) => [
          " py-3 px-3 w-full text-sm rounded-lg flex justify-center items-center  ",
          isActive
            ? " text-white font-medium bg-purple-500"
            : "hover:bg-gray-100",
        ]}
      >
        {Title}
      </NavLink>
    </div>
  );
};

export default MenuLink;
