import { Outlet } from "react-router-dom";
import CustomAccountLinks from "../Links/CustomAccountLinks";

const SettingsLayout = () => {
  return (
    <div className="w-full flex items-center justify-center mt-20 mb-5">
      <div className="laptop:w-3/4 mobile:w-full rounded-3xl px-2">
        <h1 className="font-medium text-3xl text-gray-700 tablet:block mobile:hidden">
          Settings
        </h1>
        <div className="flex mt-5">
          <div className="w-52 flex flex-col space-y-1 mr-2 mobile:hidden tablet:flex">
            <CustomAccountLinks Name="My Account" to="myaccount" />
            <CustomAccountLinks Name="My Purchase" to="mypurchase" />
            <CustomAccountLinks Name="Notifications" to="notifications" />
          </div>
          <div className="w-full bg-white shadow rounded-xl">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsLayout;
