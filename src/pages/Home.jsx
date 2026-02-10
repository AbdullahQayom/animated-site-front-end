import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import ExploreSection from "../components/ExploreSection";
import TouchReality from "../components/TouchReality";
import Footer from "../components/Footer";
import Newsletter from "../components/NewSetterler";

const AnimatedSection = ({ children, delay = 0 }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <AnimatedSection delay={0.1}>
        <Hero />
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <ProductGrid />
      </AnimatedSection>

      <AnimatedSection delay={0.5}>
        <ExploreSection />
      </AnimatedSection>

      <AnimatedSection delay={0.7}>
        <TouchReality />
      </AnimatedSection>

      <AnimatedSection delay={0.9}>
        <Newsletter />
      </AnimatedSection>

      <AnimatedSection delay={0.11}>
        <Footer />
      </AnimatedSection>
    </div>
  );
};

export default Home;
