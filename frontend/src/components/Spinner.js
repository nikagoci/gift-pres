import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

const Spinner = () => {
  return (
    <div className='flex items-center justify-center'>
        <ClipLoader size={60} color="#F59A83" />  
    </div>
    )
}

export default Spinner