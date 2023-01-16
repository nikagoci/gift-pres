import React from 'react'

const Button = ({children, isFull, type}) => {
  return (
    <button type={`${type ? 'submit' : 'button'}`} className={`${isFull ? 'text-white hover:bg-transparent bg-indigo-400 hover:border-indigo-400 hover:text-gray-600' : 'border-indigo-400 text-gray-600 hover:bg-indigo-400 hover:text-white'} px-8 py-2  rounded-2xl  transition duration-300 border border-indigo-400 `}>
        {children}
    </button>
  )
}

export default Button