import React, { useState } from "react";
// import logo from './logo.svg';
import './App.css';
import {Login} from "./Login";
import {Register} from "./Register";
import LandingPage from "./LandingPage";
import About from "./components/About"
// import HomePage from "./components/home"
import Search from "./components/search";
// import HotelForm from "./components/hotels";
import PaymentGateway from "./components/payment";
import Checkout from "./components/checkout";
import Booking from "./components/Booking";
import Dashboard from "./components/dashboard";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ExpenseItem from "./components/ExpenseItem";
import Managerdb from "./managerdashboard";
import { AdminCreate } from "./Admin/AdminCreate";

function App() {
  
  
  
  return (
    
  <Router>
  <Routes>
      
    <Route path="/" element={<Login/>} />
    <Route path="/Register" element={<Register/>} />
    <Route path="/LandingPage" element={<LandingPage/>} />
    {/* <Route path="/HotelForm" element={<HotelForm/>} /> */}
    <Route path="/Search" element={<Search/>} />
    <Route path="/Checkout" element={<Checkout/>} />
    <Route path="/ExpenseItem" element={<ExpenseItem/>} />
    <Route path="/About" element={<About/>} />
    <Route path="/PaymentGateway" element={<PaymentGateway/>} />
    <Route path="/Booking" element={<Booking/>} />
    <Route path="/Dashboard" element={<Dashboard/>} />
    <Route path="/Managerdb" element={<Managerdb/>} />
    <Route path="/AdminCreate" element={<AdminCreate/>} />


  </Routes>
  </Router>
  
  );
}

export default App;
