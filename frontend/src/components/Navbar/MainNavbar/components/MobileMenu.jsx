import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import MobileMenuButton from "./Buttons/MobileMenuButton";
import MobileMenuCard from "./Card/MobileMenuCard";
import { useNavigate } from "react-router-dom";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative laptop:hidden mobile:block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <MobileMenuButton />
      <AnimatePresence>
        {isOpen && <MobileMenuCard onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </div>
  );
};
export default MobileMenu;
