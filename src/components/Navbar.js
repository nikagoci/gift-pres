import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../utils/Button";

import Logo from "../assets/logo.svg";

import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const navbarLinks = ["Home", "About Us", "Products"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-5 h-[82px] bg-zinc-100">
      <div className="container mx-auto lg:px-16">
        <div className="flex justify-between items-center">
          <div>
            <img src={Logo} alt="img" />
          </div>
          <ul className=" hidden md:flex gap-x-6 lg:gap-x-16 ">
            {navbarLinks.map((item, ind) => (
              <li
                key={ind}
                className="text-lg lg:text-2xl text-slate-700 transition duration-500 cursor-pointer hover:text-slate-400"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="md:flex hidden">
            <Button isFull>Add Product</Button>
          </div>
          <div className="pr-4 md:hidden">
            <RxHamburgerMenu
              className="w-6 h-6 cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="absolute top-0 left-0 z-20 w-full h-screen bg-white md:hidden opacity-60" />
            <motion.div
              initial={{ width: 0, x: 300 }}
              animate={{ width: 300, x: 0, transition: { duration: 1 } }}
              exit={{ x: 300, transition: { duration: 1.5 } }}
              className="absolute top-0 right-0 z-50 h-screen py-20 pl-8 bg-white shadow-lg md:hidden"
            >
              <div className="flex justify-end items-end py-10 absolute top-0 right-10">
                <AiOutlineClose
                  onClick={() => setIsOpen(false)}
                  className="w-6 h-6 cursor-pointer"
                />
              </div>
              <div className="mt-10">
                <img src={Logo} alt="img" />
              </div>
              <ul className="mt-14">
                {navbarLinks.map((item, ind) => (
                  <li
                    key={ind}
                    className="text-2xl text-slate-700 transition duration-500 cursor-pointer hover:text-slate-400 mb-4"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Button isFull>Add Product</Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
