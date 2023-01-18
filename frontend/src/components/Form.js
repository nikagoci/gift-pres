import axios from 'axios'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup'

import Input from "../utils/Input";
import Select from "../utils/Select";
import Button from "../utils/Button";
import { useState } from 'react';
import Modal from './Modal';
import Spinner from './Spinner';

const schema = yup.object().shape({
    firstname: yup.string().required("Name Is Required"),
    image: yup.string().required("Image Is Required"),
    product: yup.string().required("Product Is Required"),
    number: yup
      .number()
      .positive("Phone Number Should Be Positive")
      .integer("Phone Number Should Be Integer")
      .typeError("Phone Number should be a number"),
  });

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [productId, setProductId] = useState('');

  const { register, handleSubmit, formState: {errors}, reset } = useForm({
    resolver: yupResolver(schema)
  });

  const addProduct = async (data) => {
    try{
      setIsLoading(true)
      const response = await axios.post('http://localhost:5000/api/v1/post', data)

      if(response.status === 201){
        setProductId(response.data.post._id)
        setSuccess(true)
        setIsLoading(false)
      }
      
      return response
    } catch(err){
      if(err.response.data.message.includes('duplicate key error')){
        setError('Phone Number Already Exists')
      } else {
        setError(err.response.data.message)
      }
    }
  }
  
  const onSubmit = (newProduct) => {
    addProduct(newProduct)
    reset()
    setOpenModal(true)
  };

  if(isLoading){
    return (
      <div
      className="p-10 bg-zinc-200 w-[500px] h-[680px] rounded-3xl mb-10 flex items-center justify-center"
    >
      <Spinner />
      </div>
    )
  }

  return (
    <>
    <form
      className="p-10 bg-zinc-200 w-[500px] rounded-3xl mb-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        name="Product Name"
        label="product"
        type="text"
        getName={register}
        error={errors.product}
      />
      <Input name="Image" label="image" type="text" getName={register} error={errors.image} />
      <Input name="Phone Number" label="number" type="number" getName={register} error={errors.number} />
      <Input
        name="First Name"
        label="firstname"
        type="text"
        getName={register}
        error={errors.firstname}
      />
      <Select
        name="Gender"
        label="gender"
        opt1="Male"
        opt2="Female"
        getName={register}
      />
      <Select
        name="Condition"
        label="condition"
        opt1="Normal"
        opt2="Used"
        getName={register}
      />
      <div className="flex justify-center">
        <Button isFull type>
          Submit
        </Button>
      </div>
    </form>
    {openModal && success && <Modal setOpenModal={setOpenModal} productId={productId} />}
    {openModal && error && <Modal setOpenModal={setOpenModal} error={error} />}
    </>
  );
};

export default Form;
