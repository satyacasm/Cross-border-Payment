import React, { useState, useEffect } from 'react';
import "./TransactionsSection.css";
import { getAllTransactions } from "../interact";

const TransactionsSection = (props) => { 
 const [transactions, setTransactions] = useState([]);
 const [currentPage, setCurrentPage] = useState(1);
 const itemsPerPage = 10;
 const addr = props.address;

 useEffect(() => {
   const fetchTransactions = async () => {
     try {
       const transactionsData = await getAllTransactions();
       setTransactions(transactionsData);
     } catch (error) {
       console.error("Error fetching transactions:", error);
     }
   };

   fetchTransactions();
 }, []);

 if(addr) {
   const startIndex = (currentPage - 1) * itemsPerPage;
   const endIndex = startIndex + itemsPerPage;
   const filteredTransactions = transactions.filter(transaction => transaction.from.toLowerCase() === addr.toLowerCase() || transaction.to.toLowerCase() === addr.toLowerCase());
   const currentTransactions = filteredTransactions.slice(startIndex, endIndex);

   const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);

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
             {currentTransactions.map((transaction) => (
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
       <button className="pagination-button" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
<button className="pagination-button" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>

     </div>
   );
 } else {
   return null;
 }
};

export default TransactionsSection;
