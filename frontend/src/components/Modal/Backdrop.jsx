import { motion } from "framer-motion";

const Backdrop = ({ onClick, children }) => {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen w-full fixed bg-black/5 top-0 left-0 flex items-center justify-center"
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
