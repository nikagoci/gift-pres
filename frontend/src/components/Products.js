import React, { useEffect } from "react";

import axios from 'axios'
import SingleProduct from "./SingleProduct";
import useAxios from "../hooks/useAxios";
import Spinner from "./Spinner";

// const data = [
//     {
//         img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
//         product: "Headset",
//         condition: "Normal",
//         gender: 'Woman',
//         id: 1
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
//         product: "Hats",
//         condition: "Good",
//         gender: 'Man',
//         id: 2
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdGhlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
//         product: "Hoods",
//         condition: "Normal",
//         gender: 'Woman',
//         id: 3
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
//         product: "Boots",
//         condition: "Normal",
//         gender: 'Man',
//         id: 4
//     },
// ]

const Products = () => {
  const {data, error, isLoading} = useAxios('http://localhost:5000/api/v1/post')

  if(error){
    return (
    <section className="py-8">
      <h1 className="text-2xl text-center text-red-700">{error.message}</h1>
    </section>
    )
  }

  if(isLoading) {
    return (
      <section className="py-8">
          <Spinner />
      </section>
    )
  }

  return (
    <section className="py-8 ">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-14">
          Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          {data.posts && data.posts.map(item => (
            <SingleProduct data={item} key={item._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

// {data.map((item, ind) => (
//   <SingleProduct data={item} key={ind} />
// ))}