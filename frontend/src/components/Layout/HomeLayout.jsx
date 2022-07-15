import MainNavbar from "../Navbar/MainNavbar/MainNavbar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <MainNavbar />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default HomeLayout;
