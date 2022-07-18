import { useShopContext } from "../../../context/ShopContext";
import ShopTab from "./components/ShopTab";
import MyShop from "./MyShop";
import Products from "./Products";

const Shop = () => {
  const { type } = useShopContext();
  const newType = parseInt(type);
  return (
    <div className="w-full">
      <ShopTab />
      {type === null && <MyShop />}
      {newType === 1 && <Products />}
    </div>
  );
};

export default Shop;
