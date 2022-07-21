import { MyShopProvider } from "../../context/MyShopContext";
import useGetUserDetails from "../../hooks/useGetUserDetails";
import CreateShop from "./components/CreateShop";
import MainShop from "./Shop";

const MyShop = () => {
  const data = useGetUserDetails().user;
  return (
    <MyShopProvider>
      <div className="p-5">
        <h1 className="font-bold text-gray-700 text-2xl">
          {data?.hasShop ? "My Shop" : "Create your shop"}
        </h1>
        {data?.hasShop ? <MainShop /> : <CreateShop />}
      </div>
    </MyShopProvider>
  );
};

export default MyShop;
