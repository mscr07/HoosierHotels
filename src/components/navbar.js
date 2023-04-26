
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Dashboard from "./dashboard";
import LandingPage from "../LandingPage";
import HomeIcon from '@mui/icons-material/Home';
import { AdminCreate } from "../Admin/AdminCreate";
import CheckoutForm from "../Admin/CheckoutForm";

function Navbar(props) {
  const [isLoggedIn,setIsLoggedIn] = useState(props.isLoggedIn);
  const[userType,setUserType] =  useState('');
  console.log(props.isLoggedIn);

  useEffect(() => {
    setIsLoggedIn(sessionStorage.getItem('isLoggedIn'));
    setUserType(sessionStorage.getItem('usertype'));
  });
  return (
    <nav className="navbar fixed-top navbar-light navbar-container nav-bar-container">
      
      <div className="sub-nav-container nav-padding-left">
        <a className="nav-link nav-active nav-item" href="/LandingPage">
          <HomeIcon>
            Home
          </HomeIcon>
        </a>
        <a className="nav-link nav-item" href="/About">
          About
        </a>
        {userType === "admin" && <a className="nav-link nav-item" href="/Managerdb">
          Dashboard
        </a>}
        {userType === "admin" && <a className="nav-link nav-item" href="/AdminCreate">
          Add Hotels
        </a>}
        {userType === "admin" && <a className="nav-link nav-item" href="/CheckoutForm">
          Checkout
        </a>}
      </div>

      

      <div className="sub-nav-container">
        
      {isLoggedIn ? (
  <Link to="/" style={{ padding: "10px", backgroundColor: "rgb(124,63,216)", color: "white", border: "none", cursor: "pointer" }}>
    Logout
  </Link>
) : (
  <>
    <Link to="/" style={{ padding: "10px", backgroundColor: "rgb(124,63,216)", color: "white", border: "none", cursor: "pointer", textDecoration: "none" }}>
      Login
    </Link>
    <Link to="/Register" style={{ padding: "10px", backgroundColor: "rgb(124,63,216)", color: "white", border: "none", cursor: "pointer", textDecoration: "none", marginLeft: "10px" }}>
      Signup
    </Link>
  </>
)}
      </div>
    </nav>
  );
}

export default Navbar;

