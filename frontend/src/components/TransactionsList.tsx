import React from "react";
import { CreateTransactionBody } from "../@types/CreateTransactionBody";

const headerFields = [
  "Total Price",
  "Currency",
  "Credit Card Type",
  "Credit Card Number",
];

export const TransactionsList: React.FC<{
  transactions: CreateTransactionBody[];
}> = ({ transactions }) => {
  const renderCustomers = () => {
    return transactions?.map(
      ({
        total_price,
        currency,
        credit_card_type,
        credit_card_number,
        customer_id,
      }) => {
        return (
          <tr
            key={customer_id}
            style={{
              padding: "10px",
              outline: "thin solid",
              boxShadow: "0px 0px 5px rgba(0,0,0,0.3)",
            }}
          >
            <td style={{ padding: "10px" }}>{total_price}</td>
            <td style={{ padding: "10px" }}>{currency}</td>
            <td style={{ padding: "10px" }}>{credit_card_type}</td>
            <td style={{ padding: "10px" }}>{credit_card_number}</td>
          </tr>
        );
      }
    );
  };

  const renderHeader = () => {
    return (
      <tr>
        {headerFields.map((key) => (
          <th>{key}</th>
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
