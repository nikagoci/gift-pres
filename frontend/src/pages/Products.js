import React, { useState } from "react";
import Search from "../components/Search";
import SingleProduct from "../components/SingleProduct";
import Spinner from "../components/Spinner";
import useAxios from "../hooks/useAxios";

import {VscDebugRestart} from 'react-icons/vsc'

const Products = () => {
  const { data, error, isLoading } = useAxios(
    "http://localhost:5000/api/v1/post"
  );
  const [inputValue, setInputValue] = useState("");

  if (error) {
    return (
      <section className="py-8">
        <h1 className="text-2xl text-center text-red-700">{error.message}</h1>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section className="py-8">
        <Spinner />
      </section>
    );
  }

  const getInputValue = (input) => {
    setInputValue(input);
  };

  return (
    <section className="py-8 bg-[#151937] min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-14">
          Products
        </h1>
        <Search getInputValue={getInputValue} />
        {inputValue && (
          <div className="flex items-center justify-center text-white gap-x-6">
            <h1 className="my-8 text-xl tracking-wide">
              Search Filter: {inputValue.toLowerCase()}
            </h1>
            <VscDebugRestart onClick={() => setInputValue('')} className="text-gray-300 cursor-pointer" size={22} />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          {data.posts &&
            data.posts
              .filter((item) =>
                item.product.toLowerCase().includes(inputValue.toLowerCase())
              )
              .map((item) => <SingleProduct data={item} key={item._id} />)}
        </div>
      </div>
    </section>
  );
};

export default Products;
