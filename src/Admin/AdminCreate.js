import { HowToReg, Password } from "@mui/icons-material";
import React, { useState } from "react";
// import "./AdminCreate.css"

export const AdminCreate =() =>{

    const [hotelname, setHotelName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [numRooms, setNumRooms] = useState('');
    const [roomTypes, setRoomTypes] = useState([]);
    const [amenities, setAmenities] = useState([]);
    const [priceRange, setPriceRange] = useState('');
    const [bookings, setBookings] = useState('');
    const [rating, setRating] = useState('');
    const [available, setAvailable] = useState(false);

    const handleAmenitiesChange = (e) => {
        const selectedAmenities = Array.from(
          e.target.selectedOptions,
          (option) => option.value
        );
        setAmenities(selectedAmenities);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              hotelName: hotelname,
              address: address,
              city: city,
              state: state,
              country: country,
              zipCode: zipCode,
              phoneNumber: contactNo,
              email: email,
              website: website,
              numRooms: numRooms,
              roomTypes: roomTypes,
              amenities: amenities,
              priceRange: priceRange,
              bookings: [],
              rating: rating,
              available: available,
            }),
          };
    
          const response = await fetch(
            "https://hoosier-hotel.herokuapp.com/api/v1/hotels",
            requestOptions
          );
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      };

return(
    <div className="adminCreate">
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="youremail@gmail.com"
                    required
                />

                <label htmlFor="hotelName">Hotel Name</label>
                <input
                    type="text"
                    name="Hotel Name"
                    id="Hotel Name"
                    value={hotelname}
                    onChange={(e) => setHotelName(e.target.value)}
                    required
                />
                <label htmlFor="address">Address</label>
                <input
                    type="text"
                    name="address"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />
                <label htmlFor="city">City</label>
                <input
                    type="text"
                    name="city"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                />
                <label htmlFor="state">State</label>
                <input
                    type="text"
                    name="state"
                    id="state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                />
                <label htmlFor="country">Country</label>
                <input
                    type="text"
                    name="country"
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                />
                <label htmlFor="zipcode">Zipcode</label>
                <input
                    type="number"
                    name="zipcode"
                    id="zipcode"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    required
                />
                <label htmlFor="contactno">Contact Number</label>
                <input
                    type="number"
                    name="contactno"
                    id="contacno"
                    value={contactNo}
                    onChange={(e) => setContactNo(e.target.value)}
                    required
                />
                <label htmlFor="website">Website</label>
                <input
                    type="text"
                    name="website"
                    id="website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    required
                />
                <label htmlFor="numrooms">Number of rooms</label>
                <input
                    type="number"
                    name="numrooms"
                    id="numrooms"
                    value={numRooms}
                    onChange={(e) => setNumRooms(e.target.value)}
                    required
                />
                <label htmlFor="roomTypes">Room Types:</label>
                <select id="roomTypes" multiple="multiple" onChange={(e) => 
                setRoomTypes(Array.from(e.target.selectedOptions, (option) => option.value))}>
                <option value="Single">Single</option>
                <option value="Double">Double</option>
                <option value="Twin">Twin</option>
                <option value="Triple">Triple</option>
                <option value="Quad">Quad</option>
                <option value="Suite">Suite</option>
                </select>
                <label htmlFor="amenities">Amenities:</label>
                <select
                    multiple="multiple"
                    id="amenities"
                    name="amenities"
                    value={amenities}
                    onChange={handleAmenitiesChange}
                >
                    <option value="pool">Pool</option>
                    <option value="gym">Gym</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="spa">Spa</option>
                </select>
                <label htmlFor="pricerange">Price Range</label>
                <input
                    type="number"
                    name="pricerange"
                    id="pricerange"
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    required
                />
                <label htmlFor="bookings">bookings</label>
                <input
                    type="text"
                    name="bookings"
                    id="bookings"
                    value={bookings}
                    onChange={(e) => setBookings(e.target.value)}
                    required
                />
                <label htmlFor="ratings">ratings</label>
                <input
                    type="number"
                    name="ratings"
                    id="ratings"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    required
                />
                <label htmlFor="available">available</label>
                <input
                    type="text"
                    name="available"
                    id="available"
                    value={available}
                    onChange={(e) => setAvailable(e.target.value)}
                    required
                />
                
                <div className='handleSubmit'>
                    <button>Add Hotel</button>
                </div>
            </form>
        </div>
);
}