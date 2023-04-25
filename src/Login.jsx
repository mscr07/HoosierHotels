// import React, { useState } from "react";
// import LandingPage from "./LandingPage";
// import { useNavigate } from "react-router-dom";
// import './App.css';
// // import { GoogleLogin } from 'react-google-login';
// import { NavLink } from "react-router-dom";
// import "./login.css"
// import { Navbar } from "react-bootstrap";
// import Navbar from "./components/navbar"

// export const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');
//     const navigate = useNavigate();


//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (!email || !password) {
//             setErrorMessage('Please enter both email and password.');
//             return;
//         }
//         else{
//             login();
//         }
        
//     }

//     const login = () => {
//         var myHeaders = new Headers();
//         myHeaders.append("Content-Type", "application/json");
       
//         var raw = JSON.stringify({
//           "email": email,
//           "password": password
//         });
        
//         var requestOptions = {
//             method: 'POST',
//             headers: myHeaders,
//             body: raw,
//             redirect: 'follow'
//         };
        
//         fetch("http://localhost:8081/api/v1/login/", requestOptions)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(response.statusText);
//             }
//             return response.text();
//         })
//         .then(result => {
//             console.log('Login successful!', result);
//             navigate("/LandingPage");
//         })
//         .catch(error => {
//             console.log('error', error);
//             // console.log('error status', error.response.status);
//             // console.log('error body', error.response.body);
//             setErrorMessage('Invalid email or password. Please try again.');
//         });
//       }
//     // const handleGoogleLoginSuccess = (response) => {
//     //     console.log('Login successful!', response);
//     //     // Handle Google login success
//     // };
      
//     // const handleGoogleLoginFailure = (response) => {
//     //     console.log('Login failed!', response);
//     //     // Handle Google login failure
//     // };

//     return (
//         <div className="auth-form-container">
//             <h2>Login</h2>
//             <form className="login-form" onSubmit={handleSubmit}>
//                 <label htmlFor="email">Email</label>
//                 <input
//                     type="email"
//                     name="email"
//                     id="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="youremail@gmail.com"
//                     required
//                 />

//                 <label htmlFor="password">Password</label>
//                 <input
//                     type="password"
//                     name="password"
//                     id="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="********"
//                     required
//                 />
                
//                 {errorMessage && <p className="error-message">{errorMessage}</p>}
                
//                 <div className='handleSubmit'>
//                   <button>Login</button>
//                {/* <NavLink to="/LandingPage">Login</NavLink> */}
//                </div>
//             </form>
            
//             {/* <GoogleLogin
//                 clientId="2250362399862-iahaueqgi5ocumjlmdc3e572oc0omn4k.apps.googleusercontent.com"
//                 buttonText="Login with Google"
//                 onSuccess={handleGoogleLoginSuccess}
//                 onFailure={handleGoogleLoginFailure}
//                 cookiePolicy={'single_host_origin'}
//             /> */}

//             {/* <Navbar isLoggedIn={this.state.isLoggedIn} /> */}
            
//             <div>
//                 <NavLink to="/Register">Don't have an account? Register here</NavLink>
//             </div>
//         </div>
//     );
// }

import React, { useState } from "react";
import LandingPage from "./LandingPage";
import { useNavigate } from "react-router-dom";
import './App.css';
import { NavLink } from "react-router-dom";
import "./login.css";
import { Row,Col } from "react-bootstrap";

// import { Navbar } from "react-bootstrap";
import Navbar from "./components/navbar";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    
    const navigate = useNavigate();

    sessionStorage.setItem('isLoggedIn',false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setErrorMessage('Please enter both email and password.');
            return;
        } else {
            login();
        }
    }

    const login = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
       
        var raw = JSON.stringify({
          "email": email,
          "password": password
        });
        
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        
        fetch("https://hoosier-hotel.herokuapp.com/api/v1/login/", requestOptions)
        .then(response => {
            // if (!response.ok) {
            //     throw new Error(response.statusText);
            // }
            return response.json();
        })
        .then(result => {
            console.log('Login successful!', result);
            console.log(isLoggedIn);
            console.log(JSON.stringify(result));
            setIsLoggedIn(true);
            setIsAdmin(true);

            sessionStorage.setItem('isLoggedIn',true);
            sessionStorage.setItem('email',result.email);
            sessionStorage.setItem('userId',result.id);
            sessionStorage.setItem('usertype',result.userType);

            // sessionStorage.setItem('Phone',result.contactNumber);
            // if
            // sessionStorage.setItem('isAdmin',result.userType);
            
            navigate("/LandingPage");
        })
        .catch(error => {
            console.log('error', error);
            setErrorMessage('Invalid email or password. Please try again.');
        });
    }

    return (

        <div className="loginpagecontainer">

        <Row>
        {/* <div className="auth-form-container"> */}
        <Col style={{display:'flex',flexDirection:'column',justifyContent:"center",fontWeight:'bold',fontSize:'20px',marginLeft:'10%',color:'black',backgroundColor:'rgba(255,255,255,0.6)',marginTop:'10%'}}>
       <span style={{fontSize:'35px'}}> There's a better way to Go!!!!! </span><p style={{fontSize:'35px'}}>HOOSIER HOTELS</p><span>Sign Up/ In now to get the best deals on our hotels</span><div>1: Log in to get an extra 10% off</div><div>2: Get early access to exclusive deals</div><div>3: Wishlist favorite hotels</div><div>4: Easy sharing with friends make plans together</div><div>5: Access your favorite hotels across multiple devices</div>
        </Col>
            <Col>
            
            <form className="login-form" style={{width:'450px',marginLeft:'25%',marginTop:"25%"}} onSubmit={handleSubmit}>
            <h2 style={{marginBottom:'20px',marginLeft:'40%'}}>Login</h2>
                <label  htmlFor="email">Email</label>
                <input style={{border:"0px"}}
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="youremail@gmail.com"
                    required
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="********"
                    required
                />
                
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                
                <div className='handleSubmit'>
                    <button style={{marginBottom:'20px',backgroundColor:'#7c3fd8'}}>Login</button>
                </div>
                <div>
                <NavLink style={{color:'#7c3fd8'}} to="/Register">Don't have an account? Signup</NavLink>
            </div>
            </form>
            </Col>
            
            {/* <Navbar isLoggedIn={isLoggedIn} />            */}
            
            </Row> 
        {/* </div> */}
        </div>
        
        
    );
}
