import { useRef } from "react";
import { useState } from "react";
import useOnClickOutside from "../../../../hooks/useOnClickOutside";
import NotificationButton from "./Buttons/NotificationButton";
import { AnimatePresence } from "framer-motion";
import { NotifCard } from "./Card/NotificationCard";

const Notification = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseLeave={() => setIsOpen(false)}
      onMouseEnter={() => setIsOpen(true)}
    >
      <NotificationButton />
      <AnimatePresence>
        {isOpen && <NotifCard onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </div>
  );
};

export default Notification;
