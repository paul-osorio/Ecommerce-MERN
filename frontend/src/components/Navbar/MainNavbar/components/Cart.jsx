import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import CartButton from "./Buttons/CartButton";
import CartCard from "./Card/CartCard";

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseLeave={() => setIsOpen(false)}
      onMouseEnter={() => setIsOpen(true)}
    >
      <CartButton />
      <AnimatePresence>{isOpen && <CartCard />}</AnimatePresence>
    </div>
  );
};

export default Cart;
