// TransactionsSection.js
import React from "react";
import "./TransactionsSection.css";

const TransactionsSection = () => {
  const transactions = [
    {
      counter: 1,
      from: "Account A",
      to: "Account B",
      amount: 100.0,
      charges: 5.0,
      status: "Completed",
    },
    {
      counter: 2,
      from: "Account C",
      to: "Account D",
      amount: 150.0,
      charges: 7.5,
      status: "Pending",
    },

    {
      counter: 2,
      from: "Account C",
      to: "Account D",
      amount: 150.0,
      charges: 7.5,
      status: "Pending",
    },
    {
      counter: 2,
      from: "Account C",
      to: "Account D",
      amount: 150.0,
      charges: 7.5,
      status: "Pending",
    },
    {
      counter: 2,
      from: "Account C",
      to: "Account D",
      amount: 150.0,
      charges: 7.5,
      status: "Failed",
    },
    {
      counter: 2,
      from: "Account C",
      to: "Account D",
      amount: 150.0,
      charges: 7.5,
      status: "Pending",
    },
    {
      counter: 2,
      from: "Account C",
      to: "Account D",
      amount: 150.0,
      charges: 7.5,
      status: "Pending",
    },
  ];
  return (
    <div className="transactions-section">
      <h2 className="transacion_heading">Previous Transactions</h2>
      <div className="transaction-list ">
        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th>Counter</th>
              <th>From</th>
              <th>To</th>
              <th>Amount</th>
              <th>Charges</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.counter}</td>
                <td>{transaction.from}</td>
                <td>{transaction.to}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.charges}</td>
                <td>{transaction.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsSection;
