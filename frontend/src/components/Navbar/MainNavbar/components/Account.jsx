import useGetUserDetails from "../../../../hooks/useGetUserDetails";
import ProfileButton from "./Buttons/ProfileButton";
import AccountCard from "./Card/AccountCard";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const Account = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useGetUserDetails();
  const profilePicture = user?.profilePicture;

  return (
    <div
      className="relative"
      onMouseLeave={() => setIsOpen(false)}
      onMouseEnter={() => setIsOpen(true)}
    >
      <ProfileButton profile={profilePicture} />
      <AnimatePresence>{isOpen && <AccountCard />}</AnimatePresence>
    </div>
  );
};
export default Account;
