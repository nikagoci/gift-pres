import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../utils/Button";

import Logo from "../assets/vault-logo.webp";

import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

const navbarLinks = [
  {
    name: "Home",
    to: "/"
  },
  {
    name: "About Us",
    to: "/about"
  },
  {
    name: "Products",
    to: "/products"
  }
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-5 h-[82px] bg-[#151937]">
      <div className="container mx-auto lg:px-16">
        <div className="flex items-center justify-between">
          <Link to='/'>
            <img src={Logo} alt="img" className="w-24 h-auto" />
          </Link>
          <ul className="hidden md:flex gap-x-6 lg:gap-x-16">
            {navbarLinks.map((item, ind) => (
              <NavLink to={item.to} key={ind} 
                className={({ isActive }) =>
                  isActive ? 'text-gray-400' : 'text-white'
                }
              >
                <li
                  className="text-lg transition duration-500 cursor-pointer lg:text-2xl text-inherit hover:text-gray-300"
                >
                  {item.name}
                </li>
              </NavLink>
            ))}
          </ul>
          <div className="hidden md:flex">
            <Link to='/form'>
              <Button isFull>Add Product</Button>
            </Link>
          </div>
          <div className="pr-4 md:hidden">
            <RxHamburgerMenu
              className="w-6 h-6 text-white cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="absolute top-0 left-0 z-20 w-full h-screen bg-white md:hidden opacity-70" />
            <motion.div
              initial={{ width: 0, x: 300 }}
              animate={{ width: 300, x: 0, transition: { duration: 1 } }}
              exit={{ x: 300, transition: { duration: 1.5 } }}
              className="absolute top-0 right-0 z-50 h-screen py-20 pl-8 text-white bg-[#151937] shadow-lg md:hidden"
            >
              <div className="absolute top-0 flex items-end justify-end py-10 right-10">
                <AiOutlineClose
                  onClick={() => setIsOpen(false)}
                  className="w-6 h-6 cursor-pointer"
                />
              </div>
              <div className="mt-10">
                <Link to='/'>
                  <img src={Logo} alt="img" className="w-24 h-auto cursor-pointer" onClick={() => setIsOpen(false)} />
                </Link>
              </div>
              <ul className="mt-14">
                {navbarLinks.map((item, ind) => (
                  <Link key={ind} to={item.to} onClick={() => setIsOpen(false)}>
                    <li
                      className="mb-8 text-2xl text-gray-500 transition duration-500 cursor-pointer hover:text-gray-300"
                    >
                      {item.name}
                    </li>
                  </Link>
                ))}
              </ul>
              <div className="mt-10">
                <Link to='/form' onClick={() => setIsOpen(false)}>
                  <Button isFull>Add Product</Button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
