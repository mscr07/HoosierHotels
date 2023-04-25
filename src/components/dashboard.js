import React, { useState } from "react";


const Dashboard = () => {
  const [bookings, setBookings] = useState([]);

  const handleAddBooking = (booking) => {
    setBookings((prevBookings) => [...prevBookings, booking]);
  };

  const handleCancelBooking = (id) => {
    setBookings((prevBookings) => prevBookings.filter((booking) => booking.id !== id));
  };
const settrue=useState(true);
  return (
    <div>
      <h1>My Bookings</h1>
      {/* <h1>My Bookings</h1>
      <div>
        {bookings.map((booking) => (
          <div key={booking.id}>
            <p>{booking.date}</p>
            <p>{booking.roomType}</p>
            <button onClick={() => handleCancelBooking(booking.id)}>Cancel</button>
          </div>
        ))}
      </div>
      <form onSubmit={(e) => {
        e.preventDefault();
        const date = e.target.elements.date.value;
        const roomType = e.target.elements.roomType.value;
        const booking = { id: Date.now(), date, roomType };
        handleAddBooking(booking);
      }}>
        <input type="date" name="date" />
        <select name="roomType">
          <option value="single">Single</option>
          <option value="double">Double</option>
          <option value="suite">Suite</option>
        </select>
        <button type="submit">Book Now</button>
      </form> */}
      {/* {settrue && <Dbchart/>} */}
    </div>
  );
};

export default Dashboard;
