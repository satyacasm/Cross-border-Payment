// TransactionsSection.js
// import React from "react";
import "./TransactionsSection.css";
import { getAllTransactions } from "../interact";
import React, { useState, useEffect } from 'react';

const TransactionsSection = (props) => { 
  const [transactions, setTransactions] = useState([]);
  const addr = props.address;
  // console.log(addr);
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const transactionsData = await getAllTransactions();
        // console.log("Transactions => ", transactionsData);
        setTransactions(transactionsData);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []); // Empty dependency array ensures the effect runs only once
  const filteredTransactions = transactions.filter(transaction => transaction.from.toLowerCase() === addr.toLowerCase() || transaction.to.toLowerCase() === addr.toLowerCase());
  console.log(filteredTransactions);
  // console.log(JSON.stringify(addr))
  // console.log(JSON.stringify(transactions[0]))

  // transactions.map((transaction) => (
  //   console.log("Trans => "+transaction[0])
  // ))
  return (
    <div className="transactions-section">
      <h2 className="transacion_heading">Previous Transactions</h2>
      <div className="transaction-list">
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>From</th>      
              <th>To</th>
              <th>Amount</th>
              <th>Charges</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            { filteredTransactions.map((transaction) => (
              <tr key={transaction.counter}>
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
