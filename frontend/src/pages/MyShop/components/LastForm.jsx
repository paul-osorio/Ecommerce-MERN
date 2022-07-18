import { useMyShop } from "../../../context/MyShopContext";
import { NextButton } from "./FirstForm";
import { PreviousButton } from "./SecondForm";

const LastForm = ({ onNext }) => {
  const { setStep, setDescription, description, onSubmit, error, setError } =
    useMyShop();
  const onPrev = () => {
    setStep(2);
  };

  return (
    <div>
      <div className="w-full relative">
        <div className="flex justify-between">
          <label className="block text-sm text-gray-700">
            Store Description
            <span className="text-red-500"> *</span>
          </label>
          <span className="text-xs">{1000 - description.length} words</span>
        </div>
        <textarea
          onChange={(e) => {
            setDescription(e.target.value);
            setError("");
          }}
          maxLength="1000"
          placeholder="Type your store description"
          className="resize-none border rounded-lg w-full p-3 outline-none focus:ring-2 focus:ring-orange-500"
          rows="3"
        >
          {description}
        </textarea>
        {error && (
          <div className="text-red-500 text-xs">
            <i className="far fa-exclamation-circle mx-1"></i>
            {error}
          </div>
        )}
        <div className="w-full flex justify-end space-x-2">
          <PreviousButton onClick={onPrev} />
          <NextButton isSubmit={true} onClick={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default LastForm;
