import React, { MouseEventHandler, useState } from "react";

export const EntityList = () => {
  const INITIAL_STATE = [
    {
      id: 1,
      first_name: "Tommy",
      last_name: 21,
      email: "coding",
      gender: "Tommy",
      country: 21,
      city: "coding",
      street: null,
      phone: null,
      customer_id: "vfbgfbgfb",
    },
  ];

  const capitalize = (word: string) => {
    return word[0].toUpperCase() + word.slice(1).replace("_", " ");
  };

  const [customers, setCustomers] = useState(INITIAL_STATE);

  const renderCustomers = () => {
    return customers.map(
      ({
        id,
        first_name,
        last_name,
        email,
        gender,
        country,
        city,
        street,
        phone,
      }) => {
        return (
          <tr
            key={id}
            style={{
              padding: "10px",
              outline: "thin solid",
              boxShadow: "0px 0px 5px rgba(0,0,0,0.3)",
            }}
          >
            <td style={{ padding: "10px" }}>{first_name}</td>
            <td style={{ padding: "10px" }}>{last_name}</td>
            <td style={{ padding: "10px" }}>{email}</td>
            <td style={{ padding: "10px" }}>{gender}</td>
            <td style={{ padding: "10px" }}>{country}</td>
            <td style={{ padding: "10px" }}>{city}</td>
            <td style={{ padding: "10px" }}>{street}</td>
            <td style={{ padding: "10px" }}>{phone}</td>
          </tr>
        );
      }
    );
  };

  const renderHeader = () => {
    return (
      <tr>
        {Object.keys(INITIAL_STATE[0]).map(
          (key) => !key.includes("customer_id") && <th>{capitalize(key)}</th>
        )}
      </tr>
    );
  };

  return (
    <div>
      <h1>Customers Table</h1>
      <table>
        {renderHeader()}
        <tbody>{renderCustomers()}</tbody>
      </table>
    </div>
  );
};
