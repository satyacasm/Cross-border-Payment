// PaymentSection.js
import React from "react";
import "./PaymentSection.css";
import add from "../images/add-money.webp";
import send from "../images/sendmoney.avif";
import recieve from "../images/receive-money.jpg";
import withdraw from "../images/withdraw-removebg-preview.png";

const PaymentSection = () => {
  return (
    <div className="payment-section">
      <div className="payment-options">
        <div className="payment_header"></div>
        <div className="payment_body">
          <div className="account_balance">
            <h3>Send Money</h3>
            <img src={send}></img>
            <button>Send</button>
          </div>
          <div className="currency_conv">
            <h3>Send Money</h3>
            <img src={send}></img>
            <button>Send</button>
          </div>
        </div>
        <div className="payment_body">
          <div>
            <h3>Send Money</h3>
            <img src={send}></img>
            <button>Send</button>
          </div>
          <div>
            <h3>Recieve Money</h3>
            <img src={recieve}></img>
            <button>Recieve </button>
          </div>
        </div>
        <div className="payment_body">
          <div>
            <h3>Add Money</h3>
            <img src={add}></img>
            <button>Add </button>
          </div>
          <div>
            <h3>Withdraw Money</h3>
            <img src={withdraw}></img>
            <button>Withdraw </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;
