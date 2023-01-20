import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";

const SingleProduct = ({ data, admin, mainData, setMainData }) => {
  const handleRemove = async (id) => {
    setMainData(prev => {
      return prev.filter(product => product._id !== id)
    })
    const result = axios.delete(
      `http://localhost:5000/api/v1/post/${id}`
    );
    return result;
  };

  return (
    <>
      {!admin ? (
        <Link
          to={`/product/${data._id}`}
          className="p-10 w-[80%] bg-[#343434] text-white cursor-pointer mb-10 rounded"
        >
          <div className="relative block h-48 overflow-hidden rounded">
            <img
              alt="ecommerce"
              className="block object-cover object-center w-full h-full"
              src={data.image}
            />
          </div>
          <div className="mt-4">
            <h3 className="mb-1 text-xs tracking-widest title-font">
              {data.gender}
            </h3>
            <h2 className="text-lg font-medium text-[#65B2A8] title-font">
              {data.product}
            </h2>
            <p className="mt-1">{data.condition}</p>
          </div>
        </Link>
      ) : (
        <div className="pt-20 pb-10 px-10 w-[80%] relative bg-[#343434] text-white mb-10 rounded">
          <div className="absolute top-5 right-5">
            <AiOutlineClose
              size={25}
              className="cursor-pointer"
              onClick={() => handleRemove(data._id)}
            />
          </div>
          <div className="relative block h-48 overflow-hidden rounded">
            <img
              alt="ecommerce"
              className="block object-cover object-center w-full h-full"
              src={data.image}
            />
          </div>
          <div className="mt-4">
            <h3 className="mb-1 text-xs tracking-widest title-font">
              {data.gender}
            </h3>
            <h2 className="text-lg font-medium text-[#65B2A8] title-font">
              {data.product}
            </h2>
            <p className="mt-1">{data.condition}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
