import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const MobileSearch = () => {
  const [showInput, setShowInput] = useState(false);

  return (
    <div className="tablet:hidden mobile:flex flex items-center relative">
      <div
        role="button"
        onClick={() => setShowInput(!showInput)}
        className="flex items-center justify-center h-10 w-10 relative hover:bg-gray-100 rounded-full"
      >
        <i className="far fa-search text-gray-600"></i>
      </div>
      <AnimatePresence>
        {showInput && <MobileSearchInput onClick={() => setShowInput(false)} />}
      </AnimatePresence>
    </div>
  );
};

const MobileSearchInput = ({ onClick }) => {
  return (
    <div className="h-10 absolute -right-0 z-20">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 240 }}
        exit={{ width: 32 }}
        transition={{ duration: 0.2, type: "tween" }}
        className="relative h-full"
      >
        <input
          type="text"
          className="h-full w-full text-sm bg-gray-100 rounded-full pl-4 outline-none"
          placeholder="Search..."
        />
        <motion.div
          initial={{ display: "none" }}
          animate={{ display: "block" }}
          exit={{ display: "none", transition: { duration: 0.05 } }}
          className="absolute top-1 right-2"
        >
          <div
            role="button"
            onClick={onClick}
            className="h-8 w-8 hover:bg-gray-500/20 rounded-full flex items-center justify-center"
          >
            <i className="far fa-times text-gray-600"></i>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MobileSearch;
