import React, { useState } from 'react';

function HotelForm() {
  const [hotelName, setHotelName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [numRooms, setNumRooms] = useState(0);
  const [roomTypes, setRoomTypes] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const [priceRange, setPriceRange] = useState(0);
  const [rating, setRating] = useState(0);
  const [available, setAvailable] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // submit the form data to the backend
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("localhost:8081/api/v1/hotels/New%20York", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Hotel Name:
        <input type="text" value={hotelName} onChange={(event) => setHotelName(event.target.value)} />
      </label>
      <label>
        Address:
        <input type="text" value={address} onChange={(event) => setAddress(event.target.value)} />
      </label>
      <label>
        City:
        <input type="text" value={city} onChange={(event) => setCity(event.target.value)} />
      </label>
      <label>
        State:
        <input type="text" value={state} onChange={(event) => setState(event.target.value)} />
      </label>
      <label>
        Country:
        <input type="text" value={country} onChange={(event) => setCountry(event.target.value)} />
      </label>
      <label>
        Zip Code:
        <input type="text" value={zipCode} onChange={(event) => setZipCode(event.target.value)} />
      </label>
      <label>
        Phone Number:
        <input type="text" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
      </label>
      <label>
        Email:
        <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <label>
        Website:
        <input type="text" value={website} onChange={(event) => setWebsite(event.target.value)} />
      </label>
      <label>
        Number of Rooms:
        <input type="number" value={numRooms} onChange={(event) => setNumRooms(event.target.value)} />
      </label>
      <label>
        Room Types:
        <select multiple value={roomTypes} onChange={(event) => setRoomTypes(Array.from(event.target.selectedOptions, (option) => option.value))}>
          <option value="single">Single</option>
          <option value="double">Double</option>
          <option value="twin">Twin</option>
          <option value="suite">Suite</option>
        </select>
      </label>
      <label>
        Amenities:
        <select multiple value={amenities} onChange={(event) => setAmenities(Array.from(event.target.selectedOptions, (option) => option.value))}>
          <option value="pool">Pool</option>
          <option value="gym">Gym</option>
          <option value="spa">Spa</option>
          </select>
      </label>
      </form>
)}
export default HotelForm;
