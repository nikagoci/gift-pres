import React from 'react'
import SingleProduct from '../components/SingleProduct'
import Spinner from '../components/Spinner'
import useAxios from '../hooks/useAxios'

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
    <section className="py-8 bg-[#151937] ">
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
  )
}

export default Products