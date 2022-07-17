import MainNavbar from "../Navbar/MainNavbar/MainNavbar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <MainNavbar />
      <div className="mt-20">
        <Outlet />
      </div>
    </>
  );
};

export default HomeLayout;
