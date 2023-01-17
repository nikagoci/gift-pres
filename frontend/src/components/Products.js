import React from "react";
import SingleProduct from "./SingleProduct";

const data = [
    {
        img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        product: "Headset",
        condition: "Normal",
        gender: 'Woman',
        id: 1
    },
    {
        img: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        product: "Hats",
        condition: "Good",
        gender: 'Man',
        id: 2
    },
    {
        img: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdGhlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        product: "Hoods",
        condition: "Normal",
        gender: 'Woman',
        id: 3
    },
    {
        img: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        product: "Boots",
        condition: "Normal",
        gender: 'Man',
        id: 4
    },
]

const Products = () => {
  return (
    <section className="py-8 ">
      <div className="container mx-auto">
        <h1 className="mb-5 text-3xl font-bold text-center text-indigo-600">
          Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          {data.map((item, ind) => (
            <SingleProduct data={item} key={ind} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
