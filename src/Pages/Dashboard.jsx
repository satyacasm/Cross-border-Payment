import React, { useState } from "react";
import Navbar from "../components2/Navbar";
import PaymentSection from "../components2/PaymentSection";
import TransactionsSection from "../components2/TransactionsSection";
import Footer from "../components/Footer";
import "../App.css";



const ethers = require("ethers");
const Dashboard = () => {
  const [defaultAddress,setDefaultAddress] = useState(null);
  const [userBalance,setUserBalance] = useState(null);

  const connectWalletHandler = () => {
    if(window.ethereum){
        window.ethereum.request({method: 'eth_requestAccounts'})
        .then(result=>{
            accoountChangeHandler(result[0]);
        });
    }
    // else{
    //     setErrorMessage('Install Metamask');
    // }
}

const accoountChangeHandler = (newAccount) =>{
     setDefaultAddress(newAccount.toString());
     getUserBalance(newAccount.toString());
}
const getUserBalance = (address) => {
    window.ethereum.request({method :'eth_getBalance', params:[address,'latest']})
    .then(balance=>{
        setUserBalance(ethers.formatEther(balance));
    })
}

  connectWalletHandler();

  return (
    <div className="dark-app">
      <Navbar />
      <main>
        <div className="dashBoard_Nav">
        <h2 className="main_greeting">Welcome User</h2>
        <div className="displayAccount">{defaultAddress}</div>
        </div>
        <PaymentSection />
        <TransactionsSection address={defaultAddress} />
      </main>
      <div className="footer_section">
      <Footer />
      </div>
    </div>
  )
}

export default Dashboard