import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/')
    }, 1000);

    return () => {
        clearTimeout(timeout)
    }
  }, [navigate]);

  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <h1 className="font-extrabold tracking-widest text-white text-9xl">
        404
      </h1>
      <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button className="mt-5">
        <div className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
          <h3 className="text-2xl">Redirecting To Home...</h3>
        </div>
      </button>
    </main>
  );
};

export default ErrorPage;
