import { useUser } from "../../../context/UserProvider";
import MobileSearchInput from "./components/MobileSearch";
import NavLinks from "./components/NavLinks";
import RightEndMenu from "./components/RightEndMenu";
import SearchInput from "./components/SearchInput";
import Title from "./components/Title";

const MainNavbar = () => {
  return (
    <nav className="h-16  border-b border-t-indigo-500 bg-white top-0 fixed w-full">
      <div className="flex items-center justify-between h-full relative">
        <Title />
        {/* div for menus */}
        <NavLinks />
        <SearchInput />

        {/* div for profile and cart */}
        <RightEndMenu />
      </div>
    </nav>
  );
};

export default MainNavbar;
