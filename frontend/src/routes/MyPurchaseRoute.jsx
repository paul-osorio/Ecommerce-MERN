import { Route, Routes } from "react-router-dom";
import MyPurchaseLayout from "../components/Layout/MyPurchaseLayout";
import MyPurchase from "../pages/MyPurchase/MyPurchase";
import ToPay from "../pages/MyPurchase/ToPay";
import ToReceive from "../pages/MyPurchase/ToReceive";
import ToShip from "../pages/MyPurchase/ToShip";

const MyPurchaseRoute = () => {
  return (
    <Route path="/mypurchase/" element={<MyPurchaseLayout />}>
      <Route path="" element={<MyPurchase />} />
      <Route path="topay" element={<ToPay />} />
      <Route path="toship" element={<ToShip />} />
      <Route path="toreceive" element={<ToReceive />} />
    </Route>
  );
};

export default MyPurchaseRoute;
