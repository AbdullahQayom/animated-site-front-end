import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/images/touch.jpg";
import AnimatedText from "./AnimatedText";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center  px-16 pt-32 text-white">
      
      {/* Left Text */}
      <motion.div
        className="w-1/2 space-y-6"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <AnimatedText text="NEXT GEN" />
        <AnimatedText text="VIRTUAL REALITY" gradient />

        <motion.p
          className="text-gray-300 max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          The future of virtual reality is increasingly multisensory, allowing
          users to experience the metaverse with all their senses.
        </motion.p>

        <motion.button
          className="bg-gradient-to-r from-cyan-400 to-purple-500 px-8 py-4 rounded-full font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          See more
        </motion.button>
      </motion.div>

      {/* Right Hero Image */}
      <motion.div
        className="w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <img src={heroImg} className="w-full object-contain" />
      </motion.div>

    </section>
  );
};

export default Hero;
