import React from "react";
import { motion } from "framer-motion";
import touchImg from "../assets/images/touch.jpg";

const TouchReality = () => {
  return (
    <section className="py-32  px-16 flex flex-col md:flex-row items-center text-white gap-16">

      {/* Left Text */}
      <motion.div
        className="w-full md:w-1/2 space-y-6 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold">
          <span className="text-cyan-400">Touch</span> the Reality
        </h2>
        <motion.p
          className="text-gray-300 max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          The more realistic world, the more impressive the experience.
        </motion.p>
        <motion.button
          className="bg-gradient-to-r from-cyan-400 to-purple-500 px-8 py-4 rounded-full"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Play now
        </motion.button>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="w-80 h-80 overflow-hidden rounded-tl-5xl rounded-tr-2xl rounded-br-3xl rounded-bl-2xl">
          <img src={touchImg} className="w-full h-full object-cover" />
        </div>
      </motion.div>

    </section>
  );
};

export default TouchReality;
