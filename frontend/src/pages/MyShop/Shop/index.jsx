import { ShopProvider } from "../../../context/ShopContext";
import Shop from "./Shop";

const MainShop = () => {
  return (
    <ShopProvider>
      <Shop />
    </ShopProvider>
  );
};

export default MainShop;
