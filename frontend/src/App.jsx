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

function App() {
  return (
    <Routes>
      <Route path="*" element={<h1>404 not found</h1>} />

      <Route element={<PrivateRoute />}>
        <Route path="/" element={<HomeLayout />}>
          <Route path="" element={<Homepage />} />
          <Route path="/shops" element={<ShopsPage />} />
          <Route path="/help" element={<HelpPage />} />
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
