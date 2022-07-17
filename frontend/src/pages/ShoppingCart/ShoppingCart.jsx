import ItemCard from "./components/Items/ItemCard";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import SelectAllCard from "./components/SelectAllCard";
import TotalCard from "./components/TotalCard";

const ShoppingCart = () => {
  return (
    <>
      <div className="flex tablet:px-10 laptop:px-20 mobile:px-5 w-full mt-20 space-x-5 laptop:mb-10">
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
        <div className="w-[45%] laptop:block mobile:hidden relative">
          <TotalCard />
        </div>
      </div>
      <MobileMenu />
    </>
  );
};

export default ShoppingCart;
