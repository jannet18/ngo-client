import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as apiClient from "../apiClient";

function MpesaPaymentForm() {
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [amount, setAmount] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const mutation = useMutation(apiClient.mpesaPayment, {});

  const onSubmit = (data) => {
    mutation.mutate(data);
  };
  return (
    <form onSubmit={onSubmit(handleSubmit)}>
      <div>
        <label>Phone Number:</label>
        <input
          type="text"
          // value={phoneNumber}
          // onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter Mpesa phone number"
          {...register("phoneNumber", { required: true })}
        />
        {errors.phoneNumber && <span>This field is required</span>}
      </div>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          // value={amount}
          // onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          {...register("amount", { required: true })}
        />
        {errors.amount && <span>This field is required</span>}
      </div>
      <button type="submit">Pay with Mpesa</button>
    </form>
  );
}

export default MpesaPaymentForm;
