import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
