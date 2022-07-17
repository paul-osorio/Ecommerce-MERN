const ItemCheckbox = () => {
  return (
    <div className="flex h-full  items-center">
      <input
        id="selectAll"
        type="checkbox"
        className="h-4 w-4 mr-5 border-gray-400 form-checkbox text-purple-600 checked:ring-0 focus:outline-none focus:ring-0 focus:shadow-none transition "
      />
    </div>
  );
};

export default ItemCheckbox;
