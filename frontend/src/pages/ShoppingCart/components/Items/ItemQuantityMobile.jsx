import { useState } from "react";

const ItemQuantityMobile = ({ Quantity }) => {
  const [quantity, setQuantity] = useState(Quantity);

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };
  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="flex  items-center ">
      <Button Type="Minus" onClick={handleMinus} isDisabled={quantity === 1} />
      <input
        type="text"
        className="border h-5 w-10 text-center text-sm outline-none"
        value={quantity}
        readOnly
      />
      <Button Type="Plus" onClick={handleAdd} />
    </div>
  );
};

const Button = ({ onClick, Type, isDisabled }) => {
  return (
    <button
      onClick={onClick}
      className={
        "bg-gray-100 w-5 h-5 flex items-center justify-center " +
        (isDisabled
          ? " bg-gray-100 text-gray-300"
          : "active:text-gray-70 hover:bg-gray-200 ")
      }
    >
      {Type === "Plus" ? (
        <i className="fal fa-plus  text-xs"></i>
      ) : (
        <i className="fal fa-minus text-xs"></i>
      )}
    </button>
  );
};

export default ItemQuantityMobile;
