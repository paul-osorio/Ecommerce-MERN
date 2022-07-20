import thousandsSeperator from "../../../../helper/thousandsSeperator";
import ItemQuantity from "./ItemQuantity";
import ItemQuantityMobile from "./ItemQuantityMobile";

const ItemCardMobile = () => {
  const price = thousandsSeperator(1500);

  return (
    <div className="absolute bottom-3 right-0 mobile:block laptop:hidden w-full pr-5 pl-[132px]">
      <div className="flex items-center justify-between w-full">
        <span className="text-orange-500 text-sm text-center ">₱ {price}</span>
        <div className="flex  justify-center space-x-3">
          <div role="button">
            <i className="far text-sm text-gray-500 fa-heart"></i>
          </div>
          <div role="button">
            <i className="far text-sm text-gray-500 fa-trash-alt"></i>
          </div>
        </div>
        <div>
          <ItemQuantityMobile Quantity={2} />
        </div>
      </div>
    </div>
  );
};

export default ItemCardMobile;
