import React from "react";
import { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./HomePage.css";

function HomePage(props) {
  const imageLinks = [
    "https://i.ibb.co/Jr6Txcf/taj.jpg",
    "https://i.ibb.co/54FfR7z/b1.jpg",
    "https://i.ibb.co/2SJ2Nhq/b2.jpg",
    "https://i.ibb.co/wBXvWsR/b3.jpg",
    "https://i.ibb.co/j9Kdyjj/b4.jpg",
    "https://i.ibb.co/3TkLvfJ/b5.jpg",
    "https://i.ibb.co/RhZxXKL/b6.jpg",
    "https://i.ibb.co/0yhb8zb/b7.jpg",
    "https://i.ibb.co/6XnyG1D/b8.jpg",
    "https://i.ibb.co/XVYc6Vj/b9.jpg",
    "https://i.ibb.co/R4FphRj/hotel1.jpg",
    "https://i.ibb.co/9nZRmSg/hotel2.jpg",
    "https://i.ibb.co/7Rjr80s/hotel3.jpg",
    "https://i.ibb.co/nM30qLL/hotel5.jpg",
    "https://i.ibb.co/wL6fgyn/hotel6.jpg",
    "https://i.ibb.co/fGH2rxL/hyat.jpg",
    "https://i.ibb.co/T8LnPBg/l1.jpg",
    "https://i.ibb.co/kc6WmXc/l2.jpg",
    "https://i.ibb.co/GMY65kT/l3.jpg",
    "https://i.ibb.co/Krxv3JQ/l4.jpg",
    "https://i.ibb.co/W0BSJ4L/l5.jpg",
    "https://i.ibb.co/YWwXsrW/l6.jpg",
    "https://i.ibb.co/PtMdQjw/l7.jpg",
    "https://i.ibb.co/sKhkjWq/l8.jpg",
    "https://i.ibb.co/gD0tzC9/l9.jpg",
    "https://i.ibb.co/9rVsRb4/marriot.jpg",
  ];

  const [bookingStatus, setBookingStatus] = useState("");

  const handleBookNowClick = (hotelId) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "user": {
        "id": 12
      },
      "checkInDate": "2023-04-10",
      "checkOutDate": "2023-04-15",
      "numGuests": 4,
      "hotel": {
        "hotelId": hotelId
      }
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://hoosier-hotel.herokuapp.com/api/v1/hotels/" + hotelId + "/bookings", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result);
        setBookingStatus("Booking successful!");
      })
      .catch(error => {
        console.log('error', error);
        setBookingStatus("Booking failed.");
      });
  };

  return (
    <Container>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {props.hotels.map((hotel, index) => (
          <Col key={hotel.hotelId}>
            <Card>
              <div className="card-img-wrapper">
                <Card.Img variant="top" src={imageLinks[Math.floor(Math.random() * imageLinks.length)]} />
              </div>
              <Card.Body>
                <Card.Title>{hotel.hotelName}</Card.Title>
                <div className="card-text-wrapper">
                  <Card.Text>
                    <p className="card-text">Rating: {hotel.rating}</p>
                    <p className="card-text">Number of People: {hotel.numPeople}</p>
                    <p className="card-text">Rooms: {hotel.rooms}</p>
                  </Card.Text>
                  <button onClick={() => handleBookNowClick(hotel.hotelId)}>Book Now</button>
                  {bookingStatus && <p>{bookingStatus}</p>}               
                  </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomePage;
