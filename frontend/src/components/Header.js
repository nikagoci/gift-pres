import React from "react";
import { Link } from "react-router-dom";
import Button from "../utils/Button";

const Header = () => {
  return (
    <>
      <div className="flex flex-col items-center lg:flex-1 gap-y-10 lg:gap-y-16">      
        <h1 className="mt-5 text-3xl font-bold text-indigo-600 lg:text-5xl lg:mt-0">
          Help Each Other
        </h1>
        <h3 className="max-w-[500px] leading-8 lg:text-[17px] lg:leading-10 text-center lg:text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          adipisci sapiente saepe aliquam alias non veritatis cupiditate
          reprehenderit possimus deleniti itaque consectetur quisquam expedita,
          iste harum vel distinctio impedit doloremque!
        </h3>
        <div className="flex mb-10 gap-x-4">
          <Link to="/form">
            <Button isFull>Add Product</Button>
          </Link>
          <Link to="/products">
            <Button>See Products</Button>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center lg:flex-1">
        <div className="max-w-[500px] lg:w-[900px] lg:h-[900px] max-h-[400px] z-40 flex justify-center ">
          <img
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="help"
            className="w-full h-full rounded-2xl"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
