import React from "react";
import { motion } from "framer-motion";

const AnimatedText = ({ text, delay = 0 }) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.6 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className="text-5xl font-bold mb-4"
    >
      {text}
    </motion.h1>
  );
};

export default AnimatedText;
