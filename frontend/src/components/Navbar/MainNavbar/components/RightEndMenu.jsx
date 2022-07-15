import Account from "./Account";
import MobileMenu from "./MobileMenu";
import Cart from "./Cart";
import MobileSearchInput from "./MobileSearch";
import Notification from "./Notification";

const RightEndMenu = () => {
  return (
    <div className="flex">
      <MobileSearchInput />
      {/* notifications */}
      <Notification />

      {/* car icon */}
      <Cart />

      {/* for larger than tablet only */}
      <Account />
      {/* //for mobile */}
      <MobileMenu />
    </div>
  );
};

export default RightEndMenu;
