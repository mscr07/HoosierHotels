import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
// import {Booking} from "./Booking";
import PaymentGateway from "./payment";
import Navbar from "./navbar";


export default function Checkout(props) {

  const location = useLocation();

  // const searchParams = new URLSearchParams(location.search);

  const [locationParam, setLocationParam] = useState('');
  const [checkInDateParam, setCheckInDateParam] = useState('');
  const [checkOutDateParam, setCheckOutDateParam] = useState('');
  const [numberOfGuestsParam, setNumberOfGuestsParam] = useState('');
  const [price,setPrice] = useState('')

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    //setLocationParam(searchParams.get("location"));
    setPrice(parseInt(searchParams.get("price")));
    setCheckInDateParam(searchParams.get("checkin"));
    setCheckOutDateParam(searchParams.get("checkout"));
    setNumberOfGuestsParam(parseInt(searchParams.get("noogguests")));
  },[]);

  // const CheckoutPage(){
  //   window.location("/Booking");
  // }


  const totalDays =
    (new Date(checkOutDateParam) -
      new Date(checkInDateParam)) /
    (1000 * 3600 * 24);
  return (
    
    <div><Navbar />
    <div style={{backgroundImage:"url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80')", backgroundSize:'cover',height:"100vh"}} class="border-2">
      <div class="center-align">
        {/*<img src={props.hotel.url_2} width="350" alt="Hotel" class="mb-2" />*/}
        <div class="poppins billing-hotel-name text-truncate">
        </div>
      </div>
      <div style={{border:"", width:'450px',marginLeft:'10%', borderTopLeftRadius:'20px',borderBottomRightRadius:'20px',backgroundColor:"rgba(255,255,255,0.8)",marginTop:'8%',height:'400px'}}>
{/*         <div class="poppins" style={{ fontSize: 14 }}>
          <div class="card border-0 ">
            <div class="card-body pt-0">
              <hr class="my-2 mb-3" />
              <div class="row ">
                <div class="col">
                  <div class="row justify-content-between mb-1">
                    <div class="col-6">
                      <p class="mb-1">
                        <b>Check In</b>
                      </p>
                    </div>
                    <div class="flex-sm-col col-auto">
                      <p class="mb-1">{checkInDateParam}</p>
                    </div>
                  </div>
                  <div class="row justify-content-between mb-1">
                    <div class="col">
                      <p class="mb-1">
                        <b>Check Out</b>
                      </p>
                    </div>
                    <div class="flex-sm-col col-auto">
                      <p class="mb-1">{checkOutDateParam}</p>
                    </div>
                  </div>
                  <div class="row justify-content-between mb-1">
                    <div class="col">
                      <p class="mb-1">
                        <b>Guests</b>
                      </p>
                    </div>
                    <div class="flex-sm-col col-auto">
                      <p class="mb-1">{numberOfGuestsParam}</p>
                    </div>
                  </div>
                  <div class="row justify-content-between mb-1">
                    <div class="col">
                      <p class="mb-1">
                        <b>Rooms Cost</b>
                      </p>
                    </div>
                    <div class="flex-sm-col col-auto">
                      <p class="mb-1">
                        $
                        {Math.ceil(numberOfGuestsParam/2)*
                          totalDays*price}
                      </p>
                    </div>
                  </div>
                  <div class="row justify-content-between mb-1">
                    <div class="col">
                      <p class="mb-1">
                        <b>Service Fee</b>
                      </p>
                    </div>
                    <div class="flex-sm-col col-auto">
                      <p class="mb-1">$100</p>
                    </div>
                  </div>
                  <div class="row justify-content-between mb-1">
                    <div class="col">
                      <p class="mb-1">
                        <b>Tax</b>
                      </p>
                    </div>
                    <div class="flex-sm-col col-auto">
                      <p class="mb-1">$30</p>
                    </div>
                  </div>
                  <hr class="my-2" />
                  <div class="row justify-content-between">
                    <div class="col-6">
                      <p>
                        <b>Total</b>
                      </p>
                    </div>
                    <div class="flex-sm-col col-auto">
                      <p class="mb-1">
                        $
                        {Math.ceil(numberOfGuestsParam/2) *
                          totalDays *price +
                          120}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <h3 style={{marginLeft:'20%',paddingTop:'20px'}} >Checkout Summary</h3>
        <span style={{marginLeft:'30px',marginBottom:'30px',fontSize:'20px'}}>
        <strong>Check In:</strong> {checkInDateParam}
        </span>
        <br/>
        <span style={{marginLeft:'30px',marginBottom:'30px',fontSize:'20px'}}>
        <strong>Check Out:</strong> {checkOutDateParam}
        </span>
        <br/>
        <span style={{marginLeft:'30px',marginBottom:'30px',fontSize:'20px'}}>
        <strong>Guests:</strong> {numberOfGuestsParam}
        </span >
        <br/>
        <span style={{marginLeft:'30px',marginBottom:'30px',fontSize:'20px'}}>
        <strong>Rooms Cost: </strong> ${Math.ceil(numberOfGuestsParam/2)*totalDays*price} 
        </span>
        <br/>
        <span style={{marginLeft:'30px',marginBottom:'30px',fontSize:'20px'}}>
        <strong>Service Fee:</strong> $100
        </span>
        <br/>
        <span style={{marginLeft:'30px',marginBottom:'30px',fontSize:'20px'}}>
        <strong>Tax:</strong> $30
        </span>
        <br/>
        <span style={{marginLeft:'30px',marginBottom:'30px',fontSize:'20px'}}>
        <strong>Total:</strong> ${Math.ceil(numberOfGuestsParam/2) *totalDays *price +120}
        </span>
        <br/>
        <Link  to={"/PaymentGateway"}>
    <button style={{marginLeft:'37%',marginBottom:'30px'}}>checkout</button>
    </Link>
      </div>
  
    </div>
</div>
  );
}