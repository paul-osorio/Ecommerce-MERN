const EntryNavbar = ({ title }) => {
  return (
    <nav className="h-14  border-b border-t-indigo-500 bg-white">
      <div className="flex items-center justify-between h-full">
        <div className="flex items-center tablet:mx-10 mobile:mx-6">
          <i className="fas fa-stars text-[24px] text-orange-500 mb-1"></i>
          <h1 className="text-xl font-normal ml-2 text-gray-700">Starbuy</h1>
        </div>
        <div className="mx-5">
          <span className="text-sm text-red-500">Need help?</span>
        </div>
      </div>
    </nav>
  );
};

export default EntryNavbar;
