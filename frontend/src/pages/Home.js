import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <header className="py-8 header-height">
      <div className="container h-full mx-auto">
        <div className="flex flex-col h-full lg:flex-row lg:justify-around lg:items-center">
          <Header />
        </div>
      </div>
    </header>
  );
};

export default Home;
