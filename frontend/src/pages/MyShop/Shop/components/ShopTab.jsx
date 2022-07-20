import { motion, AnimatePresence } from "framer-motion";
import { useShopContext } from "../../../../context/ShopContext";

const ShopTab = () => {
  const { setSearchParams, searchParams, type } = useShopContext();
  const newType = parseInt(type);

  return (
    <div className="flex mt-2 justify-around space-x-5 bg-gray-100 shadow-inner rounded-lg py-2 px-2">
      <ShopButton
        Name="My Shop"
        isSelected={type === null}
        onClick={() => {
          searchParams.delete("type");
          setSearchParams(searchParams);
        }}
      />
      <ShopButton
        Name="Products"
        isSelected={newType === 1}
        onClick={() => setSearchParams({ type: 1 })}
      />
      <ShopButton
        Name="Add New Product"
        isSelected={newType === 2}
        onClick={() => setSearchParams({ type: 2 })}
      />
      <ShopButton
        Name="Orders"
        isSelected={newType === 3}
        onClick={() => setSearchParams({ type: 3 })}
      />
    </div>
  );
};

const ShopButton = ({ Name, isSelected, onClick }) => {
  return (
    <motion.div
      role="button"
      onClick={onClick}
      className="py-2 w-full flex items-center justify-center relative"
    >
      <span
        className={
          (!isSelected ? "text-gray-600" : "text-purple-600 font-medium") +
          " z-[2] text-center mobile:text-sm tablet:text-base"
        }
      >
        {Name}
      </span>
      {isSelected && (
        <motion.div
          layoutId="shoptab"
          initial={false}
          className="bg-white h-full w-full rounded-lg absolute shadow"
        />
      )}
    </motion.div>
  );
};

const ShopButtonVariants = {
  animate: {},
};

export default ShopTab;
