import React from 'react';
import ReactDom from 'react-dom'
import Button from '../utils/Button';

import { AiOutlineClose } from 'react-icons/ai'

const Modal = ({ setOpenModal, productId}) => {
  return ReactDom.createPortal(
    <>
      <div className='fixed top-0 bottom-0 left-0 right-0 z-50 bg-black/70' onClick={() => setOpenModal(false)} />
      <div className='fixed top-1/2 left-1/2 bg-white transform -translate-x-1/2 -translate-y-1/2 max-w-[500px] px-10 py-20 lg:px-20 lg:py-32 shadow-2xl rounded-xl z-50'>
        <div className='flex flex-col items-center justify-center h-full gap-y-16'>
          <h1 className='text-2xl text-center text-emerald-700'>Your Data Successfuly Sent!</h1>
          <Button>See Recipe</Button>
        </div>
        <div className='absolute top-5 right-5'>
          <AiOutlineClose className='text-2xl cursor-pointer' onClick={() => setOpenModal(false)} />
        </div>
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default Modal