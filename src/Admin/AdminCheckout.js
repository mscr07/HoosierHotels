import React, { useState } from 'react';
import LandingPage from '../LandingPage';
import {useNavigate} from "react-router-dom";

function AdminCheckout() {

  
    const nav = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "guestName": sessionStorage.getItem('firstname'),
        "checkInDate": sessionStorage.getItem('checkInDate'),
        "checkOutDate": sessionStorage.getItem('checkOutDate'),
        "numGuests": sessionStorage.getItem('numberOfGuests'),
        "hotel": {
            "hotelId": 17
        }
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://hoosier-hotel.herokuapp.com/api/v1/hotels/17/bookings/check-out", requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result);
            nav("/LandingPage");
          })
        };

  return (

    <div>
          <div style={{marginTop:"10%",display:'flex',flexDirection:'column', justifyContent:'center'}}>
          <h1>Successful checkout</h1>
          
          
          <img src="https://dec1osz9a7g7e.cloudfront.net/staah_staging_staah_staging_mbawih_icon_nw.png" style={{height:'300px',width:'300px',margin:'auto'}}/>
          <div style={{marginTop:"6%",textAlign:'center'}}> 

          <button style={{backgroundColor:'rgb(124,63,216)',color:'white'}} onClick={handleSubmit}> Redirect to home </button>        
          </div>
          </div>
        </div>

    );
}
export default AdminCheckout;