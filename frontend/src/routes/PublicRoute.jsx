import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = () => {
  const auth = useAuth();
  if (auth === null) {
    return null;
  }

  return auth.isAuthenticated ? <Navigate to="/" replace /> : <Outlet />;
};

export default PrivateRoute;
