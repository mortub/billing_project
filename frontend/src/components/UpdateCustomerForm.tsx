import React from "react";
import { GenderEnum } from "../@types/enums/GenderEnum";
import { useForm } from "../hooks/useForm";
import { UpdateCustomerBody } from "../@types/UpdateCustomerBody";

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

  // getting the event handlers from our custom hook
  const { onChange, values } = useForm(initialState);

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
        />
        <label>Last Name: </label>
        <input
          name="last_name"
          id="last_name"
          type="text"
          placeholder="Last Name"
          onChange={onChange}
        />
        <label>Email: </label>
        <input
          name="email"
          id="email"
          type="email"
          placeholder="Email"
          onChange={onChange}
        />
        <div>
          <label>Gender: </label>
          <select onChange={onChange}>
            {Object.values(GenderEnum).map((gender: string) => (
              <option value={gender}>{gender}</option>
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
        />
        <label>City: </label>
        <input
          name="city"
          id="city"
          type="text"
          placeholder="City"
          onChange={onChange}
        />
        <label>Street: </label>
        <input
          name="street"
          id="street"
          type="text"
          placeholder="Street"
          onChange={onChange}
        />
        <label>Phone Number: </label>
        <input
          name="phone"
          id="phone"
          type="text"
          placeholder="Phone Number"
          onChange={onChange}
        />
      </div>
    </form>
  );
};
