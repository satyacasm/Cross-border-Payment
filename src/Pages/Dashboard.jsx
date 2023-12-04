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
    const toprint = `Balance is ${userBalance}`;
    console.log("User balance1 "+isLoading+" "+userBalance);
    return (
    <div className="dark-app">
      <Navbar />
      <main>
        <div className="dashBoard_Nav">
        <h2 className="main_greeting">Welcome User</h2>
        <ConnectButton />
   
        </div>
        <div><h3>{toprint}</h3></div>
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