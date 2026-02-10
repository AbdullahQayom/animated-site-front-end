import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 px-10 py-6 flex justify-center gap-20 text-white uppercase tracking-wide">
      <span>Home</span>
      <span>Products</span>
      <span>Services</span>
      <span>Contact</span>
    </nav>
  );
};

export default Navbar;
