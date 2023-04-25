import React, { useState } from 'react';

function BookingForm() {
  const [name, setName] = useState('');
  const [hotel, setHotel] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const data = { name, hotel, date };
    fetch('https://hoosier-hotel.herokuapp.com/apis/bookingAPI', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then(() => {
      alert('Booking successful!');
      setName('');
      setHotel('');
      setDate('');
    });
  };

  return (
    <div>
      <h2>Book a Hotel</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={event => setName(event.target.value)}/>
            </label>
            <br />
            <label>
              Hotel:
              <select value={hotel} onChange={event => setHotel(event.target.value)}>
                <option value="">Select a hotel</option>
                <option value="hotel1">Hotel 1</option>
                <option value="hotel2">Hotel 2</option>
                <option value="hotel3">Hotel 3</option>
              </select>
            </label>
            <br />
            <label>
              Date:
              <input
                type="date"
                value={date}
                onChange={event => setDate(event.target.value)}
              />
            </label>
            <br />
            <button type="submit">Book</button>
          </form>
        </div>)
}
export default BookingForm;