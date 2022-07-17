import SelectAllCheckbox from "./SelectAllCheckbox";

const SelectAllCard = () => {
  return (
    <div className="bg-white rounded-lg mb-3 shadow h-12">
      <div className="flex items-center justify-between h-full w-full px-5 ">
        <SelectAllCheckbox />
        <div></div>
      </div>
    </div>
  );
};

export default SelectAllCard;
