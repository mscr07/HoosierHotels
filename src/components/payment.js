import React, { useState } from "react";
import axios from "axios";
import "./payment.css";
import {useNavigate} from "react-router-dom";
import {Booking} from "./Booking";
import Navbar from "./navbar";

const PaymentGateway = ({ amount }) => {

  const nav = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");

  const handlePayment = async () => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    

    var raw = JSON.stringify({
      "user": {
        "id": parseInt(sessionStorage.getItem('userId'))
      },
      "checkInDate": sessionStorage.getItem('checkInDate'),
      "checkOutDate": sessionStorage.getItem('checkOutDate'),
      "numGuests": sessionStorage.getItem('numberOfGuests'),
      "hotel": {
        "hotelId": sessionStorage.getItem('hotelId')
      }
    });

    

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://hoosier-hotel.herokuapp.com/api/v1/hotels/"+sessionStorage.getItem('hotelId')+"/bookings", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result);
        nav("/Booking");
      })
      .catch(error => console.log('error', error));
  };
  

  return (
    <div ><Navbar />
    <br/>
    <br/>
    <div class="container-payment-specific">
      
      <form style={{border:'solid',width:'600px',marginLeft:'1%'}}>
      <h3 class="gatewaytitle">Payment Gateway</h3>
      <label>
        First Name:
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </label>
      <label>
        Last Name:
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Address:
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <label>
        Contact Number:
        <input type="text" value={contactNo} onChange={(e) => setContactNo(e.target.value)} />
      </label>
      <label>
        City:
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      </label>
      <label>
        State:
        <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
      </label>
      <label>
        ZIP:
        <input type="text" value={zip} onChange={(e) => setZip(e.target.value)} />
      </label>
        <label htmlFor="cardNumber">Card Number:
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        </label>
        <br />

        <label htmlFor="expiryMonth">Expiry Month:
        <input
          type="text"
          id="expiryMonth"
          value={expiryMonth}
          onChange={(e) => setExpiryMonth(e.target.value)}
        />
        </label>
        <br />

        <label htmlFor="expiryYear">Expiry Year:
        <input
          type="text"
          id="expiryYear"
          value={expiryYear}
          onChange={(e) => setExpiryYear(e.target.value)}
        />
        </label>
        <br />

        <label htmlFor="cvv">CVV:
        <input type="text" id="cvv" value={cvv} onChange={(e) => setCvv(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handlePayment}>
          Pay
        </button>
      </form>

      {paymentStatus && <div>Payment status: {paymentStatus}</div>}
    </div>
    </div>
  );
};

export default PaymentGateway;
