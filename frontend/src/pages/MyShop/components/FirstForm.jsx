import { useState } from "react";
import { useMyShop } from "../../../context/MyShopContext";

const FirstForm = () => {
  const { setStep, shopName, setShopName } = useMyShop();
  const [error, setError] = useState("");

  const onNext = () => {
    if (shopName) {
      setStep(2);
    } else {
      setError("Shop name is required");
    }
  };
  return (
    <>
      <div className="w-full">
        <label className="block text-sm text-gray-700">
          Create your store name <span className="text-red-500">*</span>
        </label>
        <input
          maxLength="50"
          value={shopName}
          onChange={(event) => {
            setShopName(event.target.value);
            setError("");
          }}
          type="text"
          placeholder="Store name"
          className={
            (error && "border-red-500") +
            " border rounded px-2 py-1 w-full transition outline-none focus:ring-2 focus:ring-orange-500"
          }
        />
        {error && (
          <div className="text-red-500 text-xs">
            <i className="far fa-exclamation-circle mx-1"></i>
            {error}
          </div>
        )}
      </div>
      <div className="w-full flex justify-end">
        <NextButton onClick={onNext} />
      </div>
    </>
  );
};

export const NextButton = ({ onClick, isSubmit }) => {
  return (
    <button
      onClick={onClick}
      className="bg-indigo-500 px-5 py-1 rounded-full hover:bg-indigo-600 text-white mt-2"
    >
      {isSubmit ? "Submit" : "Next"}
    </button>
  );
};

export default FirstForm;
