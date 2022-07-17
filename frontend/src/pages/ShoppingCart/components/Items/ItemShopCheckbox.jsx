const ItemShopCheckbox = () => {
  return (
    <div className="h-14  border-b flex items-center space-x-2 px-5">
      <input
        id="selectAll"
        type="checkbox"
        className="h-4 w-4 mr-5 border-gray-400 form-checkbox text-purple-600 checked:ring-0 focus:outline-none focus:ring-0 focus:shadow-none transition "
      />
      <i class="fad fa-store text-[14px]"></i>
      <span className="text-[14px]">Shop Example</span>
    </div>
  );
};

export default ItemShopCheckbox;
