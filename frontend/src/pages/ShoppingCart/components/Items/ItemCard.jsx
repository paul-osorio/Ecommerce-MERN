import ItemCardMobile from "./ItemCardMobile";
import ItemCheckbox from "./ItemCheckbox";
import { ItemPrice } from "./ItemPrice";
import ItemQuantity from "./ItemQuantity";
import ItemShopCheckbox from "./ItemShopCheckbox";
import ItemTitle from "./ItemTitle";

const ItemCard = () => {
  return (
    <div className="bg-white rounded-lg shadow mb-3">
      <ItemShopCheckbox />

      <div className="h-24 flex px-5 py-3 space-x-10 justify-between relative">
        <div className="flex">
          <ItemCheckbox />
          <ItemTitle />
        </div>
        <ItemPrice Price={15} />
        <ItemQuantity Quantity={3} />
        <ItemCardMobile />
      </div>
    </div>
  );
};

export default ItemCard;
