import React from 'react'
import SingleMember from './SingleMember'

const data = [
    {
        img: 'https://purepng.com/public/uploads/thumbnail/businessman-hjd.png',
        name: 'John Doe',
        job: 'CEO Of The Company'
    },
    {
        img: 'https://purepng.com/public/uploads/thumbnail/purepng.com-business-manbusinessmanbusinesssalesrevenuegeneratingsuits-1421526838614u7mxl.png',
        name: 'Luke Smith',
        job: 'Design Manager'
    },
    {
        img: 'https://purepng.com/public/uploads/thumbnail/businessman-i56.png',
        name: 'Will Adler',
        job: 'Technical Manager'
    },
]

const Staff = () => {
  return (
    <section className='py-8 bg-gray-100'>
        <div className='container mx-auto'>
            <div className='flex flex-col items-center'>
                <h1 className='mb-5 text-3xl font-bold text-indigo-600'>Our Team</h1>
                <div className='md:justify-center flex flex-col md:flex-row md:w-full md:gap-x-8 md:flex-wrap w-[80%]'>
                    {data.map((item, ind) => (
                        <SingleMember key={ind} data={item} />
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Staff