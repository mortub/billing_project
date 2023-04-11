import React from "react";
import { useForm } from "../hooks/useForm";
import { UpdateTransactionBody } from "../@types/UpdateTransactionBody";

export const UpdateTransactionForm = () => {
  const initialState: UpdateTransactionBody = {
    total_price: 0,
    currency: "",
  };

  const { onChange, values } = useForm(initialState);

  return (
    <form>
      <label>Update Transaction</label>
      <div>
        <label>Total Price: </label>
        <input
          name="total_price"
          id="total_price"
          type="number"
          step="0.1"
          placeholder="Total Price"
          onChange={onChange}
        />
        <label>Currency: </label>
        <input
          name="currency"
          id="currency"
          type="text"
          placeholder="Currency"
          onChange={onChange}
        />
      </div>
    </form>
  );
};
