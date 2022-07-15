const CartButton = ({ onClick }) => {
  return (
    <div
      role="button"
      onClick={onClick}
      className="flex items-center justify-center h-10 w-10 mx-2 relative hover:bg-gray-100 rounded-full"
    >
      <i className="fas fa-shopping-bag text-gray-600"></i>
      <div className="absolute bg-red-500 left-[55%] top-0   rounded-full px-1 flex items-center justify-center">
        <span className="text-[12px] text-white">99+</span>
      </div>
    </div>
  );
};
export default CartButton;
