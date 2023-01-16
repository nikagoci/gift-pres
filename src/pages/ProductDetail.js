import React from "react";
import { useParams } from "react-router-dom";

const data = [
  {
    img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    product: "Headset",
    condition: "Normal",
    gender: "Woman",
    id: 1,
    number: "555-55-55-55",
    name: "Zaza",
  },
  {
    img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    product: "Hats",
    condition: "Good",
    gender: "Man",
    id: 2,
    number: "555-55-55-55",
    name: "Zaza",
  },
  {
    img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdGhlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    product: "Hoods",
    condition: "Normal",
    gender: "Woman",
    id: 3,
    number: "555-55-55-55",
    name: "Zaza",
  },
  {
    img: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    product: "Boots",
    condition: "Normal",
    gender: "Man",
    id: 4,
    number: "555-55-55-55",
    name: "Zaza",
  },
];

const ProductDetail = () => {
  const params = useParams();
  const singleProduct = data.filter((item) => item.id === +params.id)[0];

  return (
    <section className="py-8 header-height">
      <div className="container h-full mx-auto">
        <div className="flex flex-col h-full lg:items-center lg:justify-center lg:flex-row">
            
          <div className="lg:basis-1/2">
            <div className="flex justify-center px-10 mb-5">
              <img
                className="h-[400px] w-full rounded-xl"
                src={singleProduct.img}
                alt={singleProduct.product}
              />
            </div>
            <div className="flex px-10 gap-x-4">
              <img
                className="w-32 h-32 cursor-pointer lg:w-20 lg:h-20 rounded-xl"
                src={singleProduct.img}
                alt={singleProduct.product}
              />
              <img
                className="w-32 h-32 cursor-pointer lg:w-20 lg:h-20 rounded-xl"
                src={singleProduct.img}
                alt={singleProduct.product}
              />
              <img
                className="w-32 h-32 cursor-pointer lg:w-20 lg:h-20 rounded-xl"
                src={singleProduct.img}
                alt={singleProduct.product}
              />
            </div>
          </div>

          <div className="lg:mb-24">
            <div className="flex px-10 py-2 border-b border-indigo-300 divide-x lg:divide-x-0 lg:border-b-0 lg:flex-col">
              <h3 className="mt-2 text-[20px] pr-3 lg:p-0">
                Gender: {singleProduct.gender}
              </h3>
              <h4 className="mt-2 text-[20px] px-3 lg:p-0">
                Condintion: {singleProduct.condition}
              </h4>
              <h2 className="py-2 pl-3 lg:mt-2 text-[20px] lg:p-0">
                Product: {singleProduct.product}
              </h2>
            </div>

            <div className="flex flex-col px-10">
              <h1 className="my-5 text-3xl font-bold text-center text-indigo-600">
                Contact Information
              </h1>
              <div className="flex flex-col">
                <h3 className="text-lg leading-8">
                  Name: {singleProduct.name}
                </h3>
                <h3 className="text-lg leading-8">
                  Number: {singleProduct.number}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
