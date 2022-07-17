import ItemCard from "./components/Items/ItemCard";
import SelectAllCard from "./components/SelectAllCard";
import TotalCard from "./components/TotalCard";

const ShoppingCart = () => {
  return (
    <div className="flex tablet:px-10 laptop:px-20 mobile:px-5 w-full mt-20 space-x-5 mb-10">
      <div className=" w-full ">
        <SelectAllCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
      <TotalCard />
    </div>
  );
};

export default ShoppingCart;
