import React from "react";
import { Link } from "react-router-dom";
import Button from "../utils/Button";

const Header = () => {
  return (
    <header className="py-8 header-height">
      <div className="container h-full mx-auto">
        <div className="flex flex-col h-full lg:flex-row lg:justify-around lg:items-center">
          <div className="flex flex-col items-center gap-y-10 lg:gap-y-16 lg:items-start">
            <h1 className="mt-5 text-3xl font-bold text-indigo-600 lg:text-4xl lg:mt-0">
              Help Each Other
            </h1>
            <h3 className="max-w-[500px] leading-8 lg:text-[17px] lg:leading-10 text-center lg:text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium adipisci sapiente saepe aliquam alias non veritatis
              cupiditate reprehenderit possimus deleniti itaque consectetur
              quisquam expedita, iste harum vel distinctio impedit doloremque!
            </h3>
            <div className="flex mb-10 gap-x-4">
              <Link to='/form'>
                <Button isFull>Add Product</Button>
              </Link>
              <Button>See Products</Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="max-w-[500px] lg:w-[900px] lg:h-[900px] max-h-[400px]">
              <img
                src="https://img.freepik.com/premium-vector/manager-support-achieve-target-mentor-coaching-success-work-trusted-partnership-team-collaboration-concept-success-businessman-support-team-member-giving-hand-help-reach-target_212586-1135.jpg?w=2000"
                alt="help"
                className="w-full h-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
