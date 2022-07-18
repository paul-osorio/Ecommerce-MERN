import { useSearchParams } from "react-router-dom";
import { MyShopProvider } from "../../context/MyShopContext";
import MainShop from "./Shop";

const MyShop = () => {
  return (
    <MyShopProvider>
      <div className="p-5">
        {/* <h1 className="font-bold text-gray-700 text-2xl">Create your shop</h1> */}
        <h1 className="font-bold text-gray-700 text-2xl">My Shop</h1>
        {/* <CreateShop /> */}
        <MainShop />
      </div>
    </MyShopProvider>
  );
};

export default MyShop;
