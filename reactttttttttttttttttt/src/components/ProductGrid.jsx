import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/images/ex1.jpg";
import img2 from "../assets/images/ex2.jpg";
import img3 from "../assets/images/ex3.jpg";

const products = [
  { img: img1, title: "Gear VR Headset", border: "border-cyan-400", w: "w-72 h-72" },
  { img: img2, title: "Smart VR Headset", border: "border-purple-400", w: "w-56 h-56" },
  { img: img3, title: "Play Station VR", border: "border-pink-400", w: "w-72 h-72" },
];

const ProductGrid = () => {
  return (
    <section className=" py-32">
      <div className="max-w-6xl mx-auto flex justify-center items-end gap-16 flex-wrap md:flex-nowrap">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <div className={`rounded-3xl border-4 overflow-hidden ${product.border} ${product.w}`}>
              <img src={product.img} className="w-full h-full object-cover" />
            </div>
            <p className="mt-6 text-xl text-white">{product.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
