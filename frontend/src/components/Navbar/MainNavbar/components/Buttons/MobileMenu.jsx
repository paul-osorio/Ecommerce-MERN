const MobileMenu = () => {
  return (
    <div
      role="button"
      className="laptop:hidden bg-gray-50 hover:bg-gray-100 h-10 w-10 flex items-center justify-center rounded-full mx-2"
    >
      <i className="fas fa-ellipsis-v text-gray-600"></i>
    </div>
  );
};

export default MobileMenu;
