import React, { useContext, useEffect } from "react";
import { useForm } from "../hooks/useForm";
import { UpdateTransactionBody } from "../@types/UpdateTransactionBody";
import { AppContext } from "../context/AppContext";
import { StateAndDispatch } from "../@types/StateAndDispatchType";
import { Actions } from "../@types/enums/ActionsEnum";
import { Entities } from "../@types/enums/EntitiesEnum";

export const UpdateTransactionForm = () => {
  const initialState: UpdateTransactionBody = {
    total_price: 0,
    currency: "",
  };

  const { onChange, values, setValues } = useForm(initialState);
  const { state } = useContext(AppContext) as StateAndDispatch;

  useEffect(() => {
    const shouldSetEntity =
      state.action === Actions.UPDATE && state.entity === Entities.TRANSACTIONS;
    if (shouldSetEntity) {
      setValues(state.entityBody);
    }
  }, [state.entityBody]);

  return (
    <form>
      <label>Update Transaction</label>
      <div>
        <label>Total Price: </label>
        <input
          name="total_price"
          id="total_price"
          type="number"
          placeholder="Total Price"
          onChange={onChange}
          value={(values as UpdateTransactionBody).total_price}
        />
        <label>Currency: </label>
        <input
          name="currency"
          id="currency"
          type="text"
          placeholder="Currency"
          onChange={onChange}
          value={(values as UpdateTransactionBody).currency}
        />
      </div>
    </form>
  );
};
