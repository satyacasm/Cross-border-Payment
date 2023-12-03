// PaymentSection.js
import React, { useEffect, useState } from "react";
import "./PaymentSection.css";
import add from "../images/add-money.webp";
import send from "../images/sendmoney.avif";
import recieve from "../images/receive-money.jpg";
import withdraw from "../images/withdraw-removebg-preview.png";
import { Link } from "react-router-dom";

const PaymentSection = (props) => {
  const account_Address = props.address;
  
  return (
    <div className="payment-section">
      <div className="payment-options">
        <div className="payment_header"></div>
        <div className="payment_body">
          <div>
            <h3>Send Money</h3>
            <img src={send}></img>
            <Link to ='/form'><button >Send</button></Link>
          </div>
          <div>
            <h3>Receive Money</h3>
            <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${account_Address}`}></img>
            <div className="disp-acc">{account_Address}</div>
          </div>
        </div>
        <div className="payment_body">
          <div>
            <h3>Add Money</h3>
            <img src={add}></img>
            <Link to ='/addform'><button>Add </button></Link>
          </div>
          <div>
            <h3>Withdraw Money</h3>
            <img src={withdraw}></img>
            <Link to ='/withdraw'><button>Withdraw </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;
