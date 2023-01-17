import React from 'react'

const SingleMember = ({data}) => {
  return (
    <div className='md:py-8 flex md:flex-col items-center justify-around w-full h-full p-5 my-5 md:basis-[40%] lg:basis-[30%] md:justify-center md:flex-wrap rounded-2xl bg-cyan-900'>
        <div className='w-[140px] h-[140px]'>
            <img  className="w-full h-full" src={data.img} alt={data.name} />
        </div>
        <div className='flex flex-col items-center text-xl text-white md:gap-y-2 md:mt-5'>
            <h3>{data.name}</h3>
            <p>{data.job}</p>
        </div>
    </div>
  )
}

export default SingleMember