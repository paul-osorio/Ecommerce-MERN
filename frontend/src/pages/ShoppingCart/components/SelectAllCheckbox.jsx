const SelectAllCheckbox = () => {
  return (
    <div className="space-x-3 flex h-full items-center">
      <input
        id="selectAll"
        type="checkbox"
        className="h-4 w-4 form-checkbox text-purple-600 checked:ring-0 focus:outline-none focus:ring-0 focus:shadow-none transition "
      />
      <label htmlFor="selectAll" className="text-[14px] text-gray-500">
        Select All
      </label>
    </div>
  );
};

export default SelectAllCheckbox;
