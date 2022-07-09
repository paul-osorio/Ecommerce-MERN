import ShoppingBag from "../../assets/svg/shoppingBag.svg";

const EntryNavbar = ({ title }) => {
  return (
    <nav className="h-14">
      <div className="flex items-center h-full">
        <div className="flex items-center tablet:mx-10 mobile:mx-6">
          <img src={ShoppingBag} className="h-7 w-7" alt="" />
          <h1 className="text-3xl font-bold ml-2 text-orange-600 tracking-wider">
            {title}
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default EntryNavbar;
