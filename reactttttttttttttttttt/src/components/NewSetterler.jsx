import React from "react";
import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-2xl mx-auto mt-10 rounded-3xl
        p-[2px]  /* small padding for gradient border */
        bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500
        transition-all duration-500
        hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)]"
    >
      {/* Inner content with background matching page */}
      <div className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-3xl p-10 text-center text-white space-y-6">
        <h1 className="text-3xl font-semibold">Subscribe to our Newsletter</h1>

        <h2 className="text-sm text-gray-200">
          Lorem ipsum dolor sit amet consectetur. Commodo faucibus fusce lectus
          diam vulputate. Feugiat egestas at aenean praesent ut integer id.
        </h2>

        <div className="flex w-full max-w-md rounded-full overflow-hidden mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-3 text-black focus:outline-none"
          />
          <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 px-6 py-3 font-semibold text-white">
            Subscribe
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Newsletter;
