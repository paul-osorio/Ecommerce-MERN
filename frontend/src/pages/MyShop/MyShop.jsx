import { useQuery } from "@tanstack/react-query";
import { getUserDetails } from "../../app/lib/user";
import { MyShopProvider } from "../../context/MyShopContext";
import CreateShop from "./components/CreateShop";
import MainShop from "./Shop";

const MyShop = () => {
  const {
    isLoading,
    isError,
    data: hasShop,
    error,
  } = useQuery(["shop"], async () => {
    const user = await getUserDetails();
    return user.data.hasShop;
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <MyShopProvider>
      <div className="p-5">
        <h1 className="font-bold text-gray-700 text-2xl">
          {hasShop ? "My Shop" : "Create your shop"}
        </h1>
        {hasShop ? <MainShop /> : <CreateShop />}
      </div>
    </MyShopProvider>
  );
};

export default MyShop;
