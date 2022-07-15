import MobileMenuButton from "./Buttons/MobileMenuButton";
import MobileMenuCard from "./Card/MobileMenuCard";

const MobileMenu = () => {
  return (
    <div className="relative laptop:hidden mobile:block">
      <MobileMenuButton />
      <MobileMenuCard />
    </div>
  );
};
export default MobileMenu;
