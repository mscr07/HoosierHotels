import "./components/styles.css";
import ExpenseItem from "./components/ExpenseItem";
import Search from "./components/search";
import Banner from "./components/Banner";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";

import Chat from "./components/Chat";


export default function LandingPage(props) {

  

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

  const [hotels,setHotels] = useState([]);
  let getHotels = (arr_obj) => {
    setHotels(arr_obj);
    console.log('#############'+arr_obj);
  }
  const [data,setData] = useState([]);
  let getData = (arr_ob) => {
    setData(arr_ob);
    console.log(JSON.stringify(arr_ob));
  }
  //let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://hoosier-hotel.herokuapp.com/api/v1/hotels", requestOptions)
      .then(response => response.json())
      .then(result => setHotels(result))
      .catch(error => console.log('error', error));
  },[])

  return (
    <div>
      <Navbar />
      <Banner />
      <div className="container">
        <Search
        onSearch={getHotels}
        onSubmit={getData}>

        </Search>
        <div className="flexbox margin-5">
          {hotels.map((hotel) => {
            return (
              <ExpenseItem
                hotelId={hotel.hotelId}
                searchParams = {data}
                hotel={hotel.hotelName}
                rating={hotel.rating}
                img={imageLinks[Math.floor(Math.random() * imageLinks.length)]}
                price={hotel.priceRange}
                beds = {Math.ceil(parseInt(sessionStorage.getItem("numberOfGuests"))/2)}
                people = {sessionStorage.getItem("numberOfGuests")}
                
              ></ExpenseItem>
            );
          })}
        </div>
      </div>
      <Chat></Chat>
      <Footer />
    </div>
  );
}
