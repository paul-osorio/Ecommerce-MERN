import { MyShopProvider } from "../../context/MyShopContext";
import CreateShop from "./components/CreateShop";

const MyShop = () => {
  return (
    <MyShopProvider>
      <div className="p-5">
        <h1 className="font-bold text-gray-700 text-2xl">Account</h1>
        <CreateShop />
      </div>
    </MyShopProvider>
  );
};

export default MyShop;
