import React, { useState,useEffect } from "react";
import Navbar from "../components2/Navbar";
import PaymentSection from "../components2/PaymentSection";
import TransactionsSection from "../components2/TransactionsSection";
import Footer from "../components/Footer";
import "../App.css";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { balance } from "../interact";

const ethers = require("ethers");
const Dashboard = () => {
  const [defaultAddress,setDefaultAddress] = useState(null);
  const [userBalance,setUserBalance] = useState(0);
  const { isConnected, address } = useAccount();
  const [isLoading, setIsLoading] = useState(true);

  
  async function fetchBalance() {
    const bal = await balance();
    setUserBalance(bal);
    setIsLoading(false);
  }
  
  useEffect(() => {
    fetchBalance();
 },[]);

console.log("User balance "+isLoading+" "+userBalance);


  if(!isLoading)
  {
    const toprint = `${userBalance} Tokens`;
    console.log("User balance1 "+isLoading+" "+userBalance);
    return (
    <div className="dark-app">
      <Navbar />
      <main>
        <div className="dashBoard_Nav">
        <h2 className="main_greeting p-1 mb-2">Welcome User</h2>
        <ConnectButton />
   
        </div>
        <div className="bg-gray-800 border border-gray-700 text-gray-100 px-4 py-3 rounded relative" role="alert">
       <strong className="font-bold p-2">Balance</strong>
       <span className="block sm:inline p-2">{toprint}</span>
     </div>
        <PaymentSection address={address}/>
        <TransactionsSection address={address} />
      </main>
      <div className="footer_section">
      <Footer />
      </div>
    </div>
  )
  }
}

export default Dashboard