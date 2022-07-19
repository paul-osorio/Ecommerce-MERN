import { useShopContext } from "../../../context/ShopContext";
import AddProduct from "./AddProduct";
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
      {newType === 2 && <AddProduct />}
    </div>
  );
};

export default Shop;
