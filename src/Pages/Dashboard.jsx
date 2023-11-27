import React, { useState } from "react";
import Navbar from "../components2/Navbar";
import PaymentSection from "../components2/PaymentSection";
import TransactionsSection from "../components2/TransactionsSection";
import Footer from "../components/Footer";
import "../App.css";



const Dashboard = () => {
  return (
    <div className="dark-app">
      <Navbar />
      <main>
        <h2 className="main_greeting">Welcome vatsal</h2>
        <PaymentSection />
        <TransactionsSection />
      </main>
      <div className="footer_section">
      <Footer />
      </div>
    </div>
  )
}

export default Dashboard