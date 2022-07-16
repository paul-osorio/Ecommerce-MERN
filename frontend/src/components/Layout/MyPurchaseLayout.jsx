import { Outlet } from "react-router-dom";
import PurchaseTab from "../Misc/PurchaseTab";

const MyPurchaseLayout = () => {
  return (
    <>
      <PurchaseTab />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default MyPurchaseLayout;
