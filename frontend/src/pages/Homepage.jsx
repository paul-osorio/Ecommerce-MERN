import { logoutUser } from "../app/lib/auth";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const logout = () => {
    logoutUser();
    navigate("/login");
  };
  return (
    <div>
      <button onClick={logout} className="bg-red-500">
        Logout
      </button>
      <h1>Homepage</h1>
    </div>
  );
};

export default Homepage;
