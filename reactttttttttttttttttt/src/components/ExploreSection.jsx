import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/images/ex1.jpg";
import img2 from "../assets/images/ex2.jpg";
import img3 from "../assets/images/ex3.jpg";

const ExploreSection = () => {
  return (
    <section className="py-32  px-16 text-white flex flex-col md:flex-row gap-20">
      
      {/* Left Images */}
      <div className="w-full md:w-1/2 grid grid-cols-2 gap-6">
        <motion.div 
          className="w-full h-64 overflow-hidden rounded-tl-3xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <img src={img1} className="w-full h-full object-cover" />
        </motion.div>

        <motion.div 
          className="w-full h-64 overflow-hidden rounded-tr-3xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img src={img2} className="w-full h-full object-cover" />
        </motion.div>

        <motion.div 
          className="w-full h-64 overflow-hidden col-span-2 rounded-bl-3xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <img src={img3} className="w-full h-full object-cover" />
        </motion.div>
      </div>

      {/* Right Text */}
      <motion.div
        className="w-full md:w-1/2 space-y-6"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h2 className="text-5xl font-bold">
          <span className="text-cyan-400">Explore</span> in the metaverse one pixel at a time
        </h2>

        <p className="text-gray-300">
          The future of virtual reality is increasingly multisensory.
        </p>

        <motion.button
          className=" px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Play now
        </motion.button>
      </motion.div>
    </section>
  );
};

export default ExploreSection;
