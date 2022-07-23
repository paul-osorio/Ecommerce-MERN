import { numberOnly } from "../../../helper/numberOnly";
import { useState } from "react";

const AddToCart = ({ totalAvailable = 125 }) => {
  const [value, setValue] = useState(1);
  return (
    <div className="flex items-center space-x-3">
      <CountControl
        value={value}
        setValue={setValue}
        totalAvailable={totalAvailable}
      />
      <span className="text-sm text-gray-500">{totalAvailable} available</span>
    </div>
  );
};

const CountControl = ({ totalAvailable, value, setValue }) => {
  const add = () => {
    if (value < totalAvailable) {
      setValue((prev) => prev + 1);
    }
  };
  const minus = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };
  return (
    <div className="flex">
      <div
        role="button"
        onClick={minus}
        className="h-8 rounded-l hover:bg-gray-100 w-8 border flex items-center justify-center"
      >
        <i className="far fa-minus text-gray-600"></i>
      </div>
      <input
        type="text"
        className="border-y text-center w-20 outline-none"
        value={value}
        onKeyPress={numberOnly}
        onChange={(e) => {
          if (e.target.value > totalAvailable) {
            setValue(totalAvailable);
          } else {
            setValue(e.target.value);
          }
        }}
      />
      <div
        role="button"
        onClick={add}
        className="h-8 rounded-r w-8 hover:bg-gray-100 border flex items-center justify-center"
      >
        <i className="far fa-plus text-gray-600"></i>
      </div>
    </div>
  );
};

export default AddToCart;
