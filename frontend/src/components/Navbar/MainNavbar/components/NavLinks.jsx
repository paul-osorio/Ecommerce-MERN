import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="items-center justify-center laptop:flex mobile:hidden">
      <ul className="flex space-x-12 text-sm">
        <li>
          <NavLink
            to=""
            className={({ isActive }) =>
              isActive ? "text-purple-500 font-medium" : undefined
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="shops"
            className={({ isActive }) =>
              isActive ? "text-purple-500 font-medium" : undefined
            }
          >
            Shops
          </NavLink>
        </li>
        <li>
          <NavLink
            to="help"
            className={({ isActive }) =>
              isActive ? "text-purple-500 font-medium" : undefined
            }
          >
            Help
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
