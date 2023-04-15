import React, { useContext, useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";
import { CreateTransactionBody } from "../@types/CreateTransactionBody";
import { ApiAervice } from "../services/ApiService";
import { Actions } from "../@types/enums/ActionsEnum";
import { Entities } from "../@types/enums/EntitiesEnum";
import { AppContext } from "../context/AppContext";
import { StateAndDispatch } from "../@types/StateAndDispatchType";

export const CreateTransactionForm = () => {
  const initialState: CreateTransactionBody = {
    total_price: 0,
    currency: "",
    credit_card_type: "",
    credit_card_number: "",
    customer_id: 0,
  };

  const { onChange, values } = useForm(initialState);
  const [customers, setCustomers] = useState([] as any[]);
  const { state, dispatch } = useContext(AppContext) as StateAndDispatch;

  useEffect(() => {
    const shouldFetchCustomers =
      state.action === Actions.CREATE && state.entity === Entities.TRANSACTIONS;
    const fetchItems = async () => {
      const entities = (await ApiAervice.getAllCutomers()) as any[];
      setCustomers(entities);
      const event = {
        target: { name: "customer_id", value: entities[0].id },
      } as React.ChangeEvent<HTMLInputElement | HTMLSelectElement>;
      onChange(event);
    };
    if (shouldFetchCustomers) fetchItems();
  }, [state.action]);

  const customerPicked = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.target.name = "customer_id";
    onChange(event);
  };

  const itemToString = (item: Record<string, any>) => {
    let string = "";
    for (const [key, value] of Object.entries(item)) {
      const title = key[0].toUpperCase() + key.slice(1).replace("_", " ");
      string += `${title}: ${value}, `;
    }
    return string.slice(0, string.length - 2);
  };

  const renderCustomers = () => {
    return customers?.map((item) => (
      <option key={item.id} value={item.id}>
        {itemToString(item)}
      </option>
    ));
  };

  return (
    <form>
      <label>Create Transaction</label>
      <div>
        <label>Total Price: </label>
        <input
          name="total_price"
          id="total_price"
          type="number"
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
          name="credit_card_type"
          id="credit_card_type"
          type="text"
          placeholder="Credit Card Type"
          onChange={onChange}
          required
        />
        <label>Credit Card Number: </label>
        <input
          name="credit_card_number"
          id="credit_card_number"
          type="text"
          placeholder="Credit Card Number"
          onChange={onChange}
          required
        />
      </div>

      <>
        <h1>Select the Customer that made the transaction:</h1>
        <select onChange={customerPicked}>{renderCustomers()}</select>
      </>
    </form>
  );
};
