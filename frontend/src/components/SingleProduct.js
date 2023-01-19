import React from 'react'
import { Link } from 'react-router-dom'

const SingleProduct = ({data}) => {
  return (
    <Link to={`/product/${data._id}`} className="p-10 w-[80%] bg-gray-200 cursor-pointer mb-10 rounded">
            <div className="relative block h-48 overflow-hidden rounded">
              <img
                alt="ecommerce"
                className="block object-cover object-center w-full h-full"
                src={data.image}
              />
            </div>
            <div className="mt-4">
              <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">
                {data.gender}
              </h3>
              <h2 className="text-lg font-medium text-gray-900 title-font">
                {data.product}
              </h2>
              <p className="mt-1">{data.condition}</p>
            </div>
          </Link>
  )
}

export default SingleProduct