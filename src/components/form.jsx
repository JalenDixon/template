import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => console.log(values);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("inputValue", {})} />
      {errors.inputValue && errors.inputValue.message}

      <button type="submit">Submit</button>
    </form>
  );
};
export default Form;
