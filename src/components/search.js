import { ImLocation } from "react-icons/im";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaBed } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from 'react';
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
// import ExpenseItem from "./ExpenseItem";
import axios from 'axios';
import HomePage from "./home";
import {Link} from "react-router-dom";
import LandingPage from "../LandingPage";



function Search(props) {

  // const [loading, setLoading] = useState(false);
  const [hotels, setHotels] = useState(null);

  const [location, setLocation] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState('');

  


  const handleSearch = (event) => {
    event.preventDefault();

    axios.get(`https://hoosier-hotel.herokuapp.com/api/v1/hotels/search?location=${location}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&numberOfGuests=${numberOfGuests}`)
    .then(response => {
        // handle response
        //console.log(response);
        setHotels(response.data);
        console.log(response.data);
        props.onSearch(response.data);
        const data = {
          checkInDate: checkInDate,
          checkOutDate: checkOutDate,
          numberOfGuests: numberOfGuests,
        };
        props.onSubmit(data);
        sessionStorage.setItem('checkInDate',checkInDate);
        sessionStorage.setItem('checkOutDate',checkOutDate);
        sessionStorage.setItem('numberOfGuests',numberOfGuests);
        console.log(response.hotelId);
    
      })
      .catch(error => {
        // handle error
      });
  }
  
  return (
    <div className="App">
      <div className="search-container">
      <div className="search-textbox">
        <ImLocation size={25} />
        <input
          type="text"
          className="no-border-textbox search-textbox"
          id="destination"
          placeholder="Destination"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="search-textbox">
        <BsFillCalendarDateFill size={25} />
        <input
          type="date"
          className="no-border-textbox search-textbox"
          id="checkin"
          placeholder="Check-In"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
        />
      </div>
      <div className="search-textbox">
        <BsFillCalendarDateFill size={25} />
        <input
          type="date"
          className="no-border-textbox search-textbox"
          id="checkout"
          placeholder="Check-Out"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
        />
      </div>
      <div className="search-textbox">
        <IoMdContact size={25} />
        <input
          type="number"
          className="no-border-textbox search-textbox"
          id="travelers"
          placeholder="Travelers"
          value={numberOfGuests}
          onChange={(e) => setNumberOfGuests(e.target.value)}
        />
      </div>
        <div className="ButtonSearch">      
          <button onClick={handleSearch}>Search</button>
        </div>
        </div>
        {/* {hotels && <HomePage hotels={hotels} />} */}
        </div>
  );
}

export default Search;


