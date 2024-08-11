import React from "react";
import { useForm } from "react-hook-form";
import Error from "./Error";

export default function ReactHookForm({ modifyList }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    modifyList(data);
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input
        {...register("name", { required: true })}
        placeholder="Item Name"
      />
      {errors.name && <Error message="This field is required!" />}

      <br />

      {/* include validation with required or other standard HTML validation rules */}
      <input
        {...register("quantity", { required: true })}
        placeholder="Item Quantity"
      />
      {/* errors will return when field validation fails  */}
      {errors.quantity && <Error message="This field is required!" />}

      <br />

      <button type="submit">Submit </button>
    </form>
  );
}
