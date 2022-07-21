import { motion } from "framer-motion";

const Backdrop = ({ onClick, children, backdrop }) => {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={
        "h-screen w-screen fixed overflow-auto  z-50 top-0 left-0 flex items-center justify-center " +
        backdrop
      }
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
