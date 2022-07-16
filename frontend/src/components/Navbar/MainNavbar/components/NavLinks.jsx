import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="items-center justify-center laptop:flex mobile:hidden">
      <ul className="flex space-x-12 text-sm">
        <li>
          <CustomLink Title="Home" to="" />
        </li>
        <li>
          <CustomLink Title="Shops" to="shops" />
        </li>
        <li>
          <CustomLink Title="Help" to="help" />
        </li>
      </ul>
    </div>
  );
};

const CustomLink = ({ Title, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-purple-500 font-medium"
          : "text-gray-500 hover:text-black"
      }
    >
      {Title}
    </NavLink>
  );
};

export default NavLinks;
