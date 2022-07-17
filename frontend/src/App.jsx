import "./assets/css/App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import SuccessRegister from "./pages/RegisterVerification/SuccessRegister";
import HomeLayout from "./components/Layout/HomeLayout";
import HelpPage from "./pages/Help";
import ShopsPage from "./pages/Shops";
import MyAccount from "./pages/MyAccount/MyAccount";
import SettingsLayout from "./components/Layout/SettingsLayout";
import MyPurchaseLayout from "./components/Layout/MyPurchaseLayout";
import ToPay from "./pages/MyPurchase/ToPay";
import ToShip from "./pages/MyPurchase/ToShip";
import ToReceive from "./pages/MyPurchase/ToReceive";
import Completed from "./pages/MyPurchase/Completed";
import Cancelled from "./pages/MyPurchase/Cancelled";
import AllPurchase from "./pages/MyPurchase/All";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import Notifications from "./pages/Notifications/Notifications";

function App() {
  return (
    <Routes>
      <Route path="*" element={<h1>404 not found</h1>} />

      <Route element={<PrivateRoute />}>
        <Route path="/" element={<HomeLayout />}>
          <Route path="" element={<Homepage />} />
          <Route path="shops" element={<ShopsPage />} />
          <Route path="help" element={<HelpPage />} />
          <Route path="cart" element={<ShoppingCart />} />
          <Route element={<SettingsLayout />}>
            <Route path="/myaccount" element={<MyAccount />} />
            {/* purchase route */}
            <Route path="/mypurchase" element={<MyPurchaseLayout />}>
              <Route path="" element={<AllPurchase />} />
              <Route path="topay" element={<ToPay />} />
              <Route path="toship" element={<ToShip />} />
              <Route path="toreceive" element={<ToReceive />} />
              <Route path="completed" element={<Completed />} />
              <Route path="cancelled" element={<Cancelled />} />
            </Route>
            {/* purchase route */}
            <Route path="notifications" element={<Notifications />} />
          </Route>
        </Route>
      </Route>

      <Route element={<PublicRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/success_register/:email" element={<SuccessRegister />} />
      </Route>
    </Routes>
  );
}

export default App;
