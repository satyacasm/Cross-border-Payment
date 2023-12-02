import React from "react";
import { Routes, Route, BrowserRouter, Form } from "react-router-dom";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Vision from "./components/Vision";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import FeedbackForm from "./components/Feedback";
import SForm from "./components/Form"
import Receive from "./components/receive";
// from interact.js
import {
  main,
  balance,
  deposit,
  withdrawal,
  transfer,
  getAllTransactions,
  findBalance,
} from "./interact";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/form" element={<SForm />} />
        <Route path="/receive" element={<Receive />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
