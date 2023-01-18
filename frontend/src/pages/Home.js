import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <header className="relative py-8 header-height bg-[#151937] text-white">
       <div className="lg:block hidden absolute w-[420px] blur-3xl h-[420px] top-0 right-0 rounded-full bg-transparent opacity-50 bg-gradient-to-tr from-[#B265FF] to-[#0e278008] " />
       <div className="lg:block hidden absolute w-[420px] blur-3xl h-[420px] bottom-0 left-0 rounded-full bg-transparent opacity-50 bg-gradient-to-tr from-[#B265FF] to-[#0e278008] " />
       <div className="lg:hidden block absolute w-[420px] blur-3xl h-[420px] bottom-0 left-1/2 -translate-x-1/2 rounded-full bg-transparent opacity-50 bg-gradient-to-tr from-[#B265FF] to-[#0e278008] " />
      <div className="container h-full mx-auto">
        <div className="flex flex-col h-full lg:flex-row lg:justify-around lg:items-center">
          <Header />
        </div>
      </div>
    </header>
  );
};

export default Home;
