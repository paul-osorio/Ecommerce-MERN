import useGetUserDetails from "../../../../hooks/useGetUserDetails";
import CartButton from "./Buttons/CartButton";
import MobileMenu from "./Buttons/MobileMenu";
import NotificationButton from "./Buttons/NotificationButton";
import ProfileButton from "./Buttons/ProfileButton";
import MobileSearchInput from "./MobileSearch";

const RightEndMenu = () => {
  const { user } = useGetUserDetails();
  const profilePicture = user?.profilePicture;

  return (
    <div className="flex">
      <MobileSearchInput />
      {/* notifications */}
      <NotificationButton />

      {/* car icon */}
      <CartButton />

      {/* for larger than tablet only */}
      <ProfileButton profile={profilePicture} />

      {/* //for mobile */}
      <MobileMenu />
    </div>
  );
};

export default RightEndMenu;
