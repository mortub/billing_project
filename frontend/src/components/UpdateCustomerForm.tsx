import React, { useContext, useEffect } from "react";
import { GenderEnum } from "../@types/enums/GenderEnum";
import { useForm } from "../hooks/useForm";
import { UpdateCustomerBody } from "../@types/UpdateCustomerBody";
import { AppContext } from "../context/AppContext";
import { StateAndDispatch } from "../@types/StateAndDispatchType";
import { Actions } from "../@types/enums/ActionsEnum";
import { Entities } from "../@types/enums/EntitiesEnum";

export const UpdateCustomerForm = () => {
  const initialState: UpdateCustomerBody = {
    first_name: "",
    last_name: "",
    email: "",
    gender: GenderEnum.FEMALE,
    country: "",
    city: "",
    street: "",
    phone: "",
  };

  const { onChange, values, setValues } = useForm(
    initialState as UpdateCustomerBody
  );
  const { state } = useContext(AppContext) as StateAndDispatch;

  useEffect(() => {
    const shouldSetEntity =
      state.action === Actions.UPDATE && state.entity === Entities.CUSTOMERS;
    if (shouldSetEntity) {
      setValues(state.entityBody);
    }
  }, [state.entityBody]);

  return (
    <form>
      <label>Update Customer</label>

      <div>
        <label>First Name: </label>
        <input
          name="first_name"
          id="first_name"
          type="text"
          placeholder="First Name"
          onChange={onChange}
          value={(values as UpdateCustomerBody).first_name}
        />
        <label>Last Name: </label>
        <input
          name="last_name"
          id="last_name"
          type="text"
          placeholder="Last Name"
          onChange={onChange}
          value={(values as UpdateCustomerBody).last_name}
        />
        <label>Email: </label>
        <input
          name="email"
          id="email"
          type="email"
          placeholder="Email"
          onChange={onChange}
          value={(values as UpdateCustomerBody).email}
        />
        <div>
          <label>Gender: </label>
          <select onChange={onChange}>
            {Object.values(GenderEnum).map((gender: string) => (
              <option value={(values as UpdateCustomerBody).gender ?? gender}>
                {gender}
              </option>
            ))}
          </select>
        </div>
        <label>Country: </label>
        <input
          name="country"
          id="country"
          type="text"
          placeholder="Country"
          onChange={onChange}
          value={(values as UpdateCustomerBody).country}
        />
        <label>City: </label>
        <input
          name="city"
          id="city"
          type="text"
          placeholder="City"
          onChange={onChange}
          value={(values as UpdateCustomerBody).city}
        />
        <label>Street: </label>
        <input
          name="street"
          id="street"
          type="text"
          placeholder="Street"
          onChange={onChange}
          value={(values as UpdateCustomerBody).street}
        />
        <label>Phone Number: </label>
        <input
          name="phone"
          id="phone"
          type="text"
          placeholder="Phone Number"
          onChange={onChange}
          value={(values as UpdateCustomerBody).phone}
        />
      </div>
    </form>
  );
};
