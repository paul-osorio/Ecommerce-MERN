import ShoppingBag from "../../assets/svg/shopbag.svg";

const EntryNavbar = ({ title }) => {
  return (
    <nav className="h-14  border-b border-t-indigo-500 bg-white">
      <div className="flex items-center justify-between h-full">
        <div className="flex items-center tablet:mx-10 mobile:mx-6">
          <img src={ShoppingBag} className="h-7 w-7" alt="" />
          <h1 className="text-2xl font-bold ml-2 text-gray-700">{title}</h1>
        </div>
        <div className="mx-5">
          <span className="text-sm text-red-500">Need help?</span>
        </div>
      </div>
    </nav>
  );
};

export default EntryNavbar;
