import { Outlet } from "react-router-dom";
import PurchaseTab from "../Misc/PurchaseTab";
import SearchTextField from "../TextField/SearchTextField";

const MyPurchaseLayout = () => {
  return (
    <>
      <PurchaseTab />
      <SearchTextField />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default MyPurchaseLayout;
