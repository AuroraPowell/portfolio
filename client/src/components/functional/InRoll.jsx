import { motion } from "framer-motion";
import React from "react";

const animations = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0, opacity: 1 },
};

const InRoll = ({ children }) => {
  return (
    <motion.div
      className="z-30"
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        type: "spring",
        damping: 30,
      }}
    >
      {children}
    </motion.div>
  );
};

export default InRoll;
