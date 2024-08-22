import { motion } from "framer-motion";
import React from "react";

const animations = {
  initial: { opacity: 0.7, y: top },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0.7, y: -100 },
};

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        type: "spring",
        duration: 2,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
