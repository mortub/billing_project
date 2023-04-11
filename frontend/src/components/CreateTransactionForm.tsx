import React from "react";
import { useForm } from "../hooks/useForm";
import { CreateTransactionBody } from "../@types/CreateTransactionBody";

export const CreateTransactionForm = () => {
  const initialState: CreateTransactionBody = {
    total_price: 0,
    currency: "",
    cerdit_card_type: "",
    cerdit_card_number: "",
    customer_id: "",
  };

  const { onChange, values } = useForm(initialState);

  return (
    <form>
      <label>Create Transaction</label>
      <div>
        <label>Total Price: </label>
        <input
          name="total_price"
          id="total_price"
          type="number"
          step="0.1"
          placeholder="Total Price"
          onChange={onChange}
          required
        />
        <label>Currency: </label>
        <input
          name="currency"
          id="currency"
          type="text"
          placeholder="Currency"
          onChange={onChange}
          required
        />
        <label>Credit Card Type: </label>
        <input
          name="cerdit_card_type"
          id="cerdit_card_type"
          type="text"
          placeholder="Credit Card Type"
          onChange={onChange}
          required
        />
        <label>Credit Card Number: </label>
        <input
          name="cerdit_card_number"
          id="cerdit_card_number"
          type="text"
          placeholder="Credit Card Number"
          onChange={onChange}
        />
      </div>
    </form>
  );
};
