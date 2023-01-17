import React from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup'

import Input from "../utils/Input";
import Select from "../utils/Select";
import Button from "../utils/Button";

const schema = yup.object().shape({
    firstname: yup.string().required("Name Is Required"),
    image: yup.string().required("Image Is Required"),
    product: yup.string().required("Product Is Required"),
    number: yup
      .number()
      .positive("Phone Number Should Be Positive")
      .integer("Phone Number Should Be Integer")
      .min(6, "Phone Number's Length Should Be Less Than 6")
      .max(12, "Phone Number's Length Should Be Greater Than 9")
      .typeError("Phone Number should be a number"),
  });

const Form = () => {
  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
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
  );
};

export default Form;
