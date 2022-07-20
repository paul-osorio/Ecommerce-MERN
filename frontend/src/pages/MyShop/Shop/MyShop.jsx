import useGetMyShop from "../../../hooks/useGetMyShop";

const MyShop = () => {
  const shop = useGetMyShop().shop;
  const geturi = import.meta.env.VITE_APP_BASE_URL;
  const banner = geturi + "shop/banner/" + shop?.shop_banner;
  const profile = geturi + "shop/profile/" + shop?.shop_profile;

  return (
    <div className="p-5 border rounded-lg mt-2">
      <div className="mt-2 relative">
        <div className="w-full h-28 bg-gray-500 rounded-lg">
          <img
            src={banner}
            className="h-full w-full object-cover rounded-lg"
            alt=""
          />
        </div>
        <div className="h-24 w-24 ring ring-white bg-blue-500 absolute -bottom-5 left-5 rounded-full">
          <img
            src={profile}
            className="h-24 w-24 object-cover rounded-full"
            alt=""
          />
        </div>
      </div>
      <div className="mt-8 text-xl left-full font-medium w-full  whitespace-nowrap">
        {shop?.shop_name}
      </div>
      <div className="mt-2">
        <div className=" rounded-lg">
          <span className="font-medium block text-gray-800 ">
            Shop Description:
          </span>
          <p className="text-sm">{shop?.shop_description}</p>
        </div>
      </div>
    </div>
  );
};

export default MyShop;
