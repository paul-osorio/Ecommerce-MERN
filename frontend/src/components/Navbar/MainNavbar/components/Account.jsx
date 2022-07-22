import ProfileButton from "./Buttons/ProfileButton";
import AccountCard from "./Card/AccountCard";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const Account = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseLeave={() => setIsOpen(false)}
      onMouseEnter={() => setIsOpen(true)}
    >
      <ProfileButton />
      <AnimatePresence>{isOpen && <AccountCard />}</AnimatePresence>
    </div>
  );
};
export default Account;
