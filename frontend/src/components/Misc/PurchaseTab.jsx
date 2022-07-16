import { matchPath, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Links = [
  { to: "/mypurchase/all", Name: "All" },
  { to: "/mypurchase/topay", Name: "To Pay" },
  { to: "/mypurchase/toship", Name: "To Ship" },
  { to: "/mypurchase/toreceive", Name: "To Recieve" },
  { to: "/mypurchase/completed", Name: "Completed" },
  { to: "/mypurchase/cancelled", Name: "Cancelled" },
];

const PurchaseTab = () => {
  const { pathname } = useLocation();
  //   const match = matchPath();
  console.log(pathname);
  return (
    <div className="px-3 py-3">
      <div className="bg-white border rounded-full w-full">
        <div className="grid grid-cols-6 h-full">
          {Links.map((link, i) => (
            <TabLink
              to={link.to}
              isSelected={pathname === link.to}
              key={i}
              Name={link.Name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const TabLink = ({ to, Name, isSelected }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(to)}
      role="button"
      className="w-full h-10 tablet:col-span-1 mobile:col-span-2 flex flex-col items-center justify-center  relative"
    >
      <motion.span
        className="z-[2] text-sm hover:text-black text-gray-200 "
        animate={{
          color: isSelected ? "white" : undefined,
        }}
        transition={{ delay: 0.1 }}
      >
        {Name}
      </motion.span>
      {isSelected && (
        <motion.div
          layoutId="outline"
          initial={false}
          transition={spring}
          animate={{ backgroundColor: "#7c3aed" }}
          className="h-10 w-full absolute bottom-0 rounded-full shadow"
        />
      )}
    </div>
  );
};
const spring = {
  type: "spring",
  stiffness: 500,
  damping: 35,
};

export default PurchaseTab;