import React, { useState } from 'react';
import Navbar from './navbar';
import LandingPage from '../LandingPage';
import { Link } from 'react-router-dom';

function Booking() {
  
 
  return(
    
        <div>
          <Navbar/>
          <div style={{marginTop:"10%",display:'flex',flexDirection:'column', justifyContent:'center'}}>
          <h1>Your booking has been confirmed!</h1>
          
          
          <img src="https://dec1osz9a7g7e.cloudfront.net/staah_staging_staah_staging_mbawih_icon_nw.png" style={{height:'300px',width:'300px',margin:'auto'}}/>
          <div style={{marginTop:"6%",textAlign:'center'}}> 

          <Link to={"/LandingPage"}>
          <button style={{backgroundColor:'rgb(124,63,216)',color:'white'}} > Redirect to home </button>
          </Link>
          </div>
          </div>
        </div>
  );
}

export default Booking;