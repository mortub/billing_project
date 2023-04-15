import React from "react";
import { CreateCustomerBody } from "../@types/CreateCustomerBody";

const headerFields = [
  "First Name",
  "Last Name",
  "Email",
  "Gender",
  "Country",
  "City",
  "Street",
  "Phone",
];

export const CustomersList: React.FC<{ customers: CreateCustomerBody[] }> = ({
  customers,
}) => {
  const capitalize = (word: string) => {
    return word[0].toUpperCase() + word.slice(1).replace("_", " ");
  };

  const renderCustomers = () => {
    return customers?.map(
      ({
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
            key={email}
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
        {headerFields.map((key) => (
          <th>{capitalize(key)}</th>
        ))}
      </tr>
    );
  };

  return (
    <div>
      {renderHeader()}
      <tbody>{renderCustomers()}</tbody>
    </div>
  );
};
