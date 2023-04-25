import React, { useState, useEffect } from "react";
// import './App.css';
import zxcvbn from 'zxcvbn';
import { Link } from "react-router-dom";
import LandingPage from "./LandingPage";
import "./Register.css"

export const Register = (props) => {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [contactno, setContactNo] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDOB] = useState('');
    const [gender, setGender] = useState('');
    const [usertype, setUserType] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [passwordStrength, setPasswordStrength] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordStrengthError, setPasswordStrengthError] = useState('');
    const [passwordMatchError, setPasswordMatchError] = useState('');
    const [formIsValid, setFormIsValid] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [showPasswordStrength, setShowPasswordStrength] = useState(false);

    useEffect(() => {
        setFormIsValid(pass === confirmPassword && passwordStrength === 'Strong' && emailError === '');
    }, [pass, confirmPassword, passwordStrength, emailError]);


    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        const regex = /\S+@\S+\.\S+/;
        if (!regex.test(e.target.value)) {
            setEmailError('Please enter a valid email address.');
            setFormIsValid(false);
        } else {
            setEmailError('');
            setFormIsValid(pass === confirmPassword && passwordStrength === 'Strong' && emailError === '');
        }
    }


    const handlePasswordChange = (e) => {
        const pass = e.target.value;
        setPass(pass);
        setShowPasswordStrength(true);
        const passwordScore = zxcvbn(pass).score;
        switch (passwordScore) {
            case 0:
                setPasswordStrengthError('Very weak');
                break;
            case 1:
                setPasswordStrengthError('Weak');
                break;
            case 2:
                setPasswordStrengthError('Medium');
                break;
            case 3:
                setPasswordStrengthError('Strong');
                break;
            default:
                setPasswordStrengthError('Very strong');
                break;
        }
        setFormIsValid(pass === confirmPassword && passwordStrength === 'Strong' && emailError === '');
    }


    const handleConfirmPasswordChange= (e) => {
        setConfirmPassword(e.target.value);
        setPasswordMatchError(e.target.value !== pass ? 'Passwords do not match' : '');
        setFormIsValid(e.target.value === pass && passwordStrength === 'Strong' && emailError === '');
    }

    const handleContactNumberChange = (event) => {
        const { value } = event.target;
        // Allow only digits and limit the length to 10
        const formattedValue = value.replace(/[^0-9]/g, '').substring(0, 10);
        setContactNo(formattedValue);
      };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        // Submit form data to backend API here
        try {
            /*const response = await axios.post('http://localhost:8081/api/v1/users/', {
              firstname,
              lastname,
              contactno,
              email,
              dob,
              gender,
              usertype,
              pass,
            });*/

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "firstName": firstname,
        "lastName": lastname,
        "email": email,
        "password": pass,
        "contactNumber": contactno,
        "dob": dob,
        "gender": gender,
        "userType": usertype
        });
        console.log(firstname);

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://localhost:8081/api/v1/users/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

            
                console.log(`FirstName: ${firstname}, LastName: ${lastname}, ContactNo: ${contactno} Email: ${email}, DOB: ${dob}, Gender: ${gender}, UserType: ${usertype}, Password: ${pass}`);
                // Clear form after successful submission
                setFirstName('');
                setLastName('');
                setContactNo('');
                setEmail('');
                setDOB('');
                setGender('');
                setUserType('');
                setPass('');
                setConfirmPassword('');
                setPasswordStrength('');
                setEmailError('');
                setFormIsValid(false);
                window.location='/';
            } catch (error) {
                console.log(error);
            }
            }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            {error && <div className="error-message">{error}</div>}
        <form className="register-form" onSubmit={handleSubmit} style={{width:'600px'}}>
        
            <label htmlFor="firstname">First name</label>
            <input value={firstname} name="firstname" onChange={(e) => setFirstName(e.target.value)} id="firstname" placeholder="first Name"/>
            <label htmlFor="lastname">Last name</label>
            <input value={lastname} name="lastname" onChange={(e) => setLastName(e.target.value)} id="lastname" placeholder="last Name" />
           

            <label htmlFor="contactno">Contact Number</label>
            <input value={contactno} name="contactno" onChange={handleContactNumberChange} type="number" id="contactno" placeholder="Contact Number" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={handleEmailChange} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="dob">Date of Birth</label>
            <input value={dob} name="dob" onChange={(e) => setDOB(e.target.value)} type="date" id="dob" placeholder="Date of Birth" />
            {/* <label htmlFor="gender">Gender</label>
            <input value={gender} name="gender" onChange={(e) => setGender(e.target.value)} id="gender" placeholder="Gender" /> */}
            <br/>
            <label>
            Gender:
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            </select>
            </label>
            <br/>
            <label>
            User Type:
            <select value={usertype} onChange={(e) => setUserType(e.target.value)}>
            <option value="">Select userType</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
            </select>
            </label>
            <label htmlFor="password">password</label>
            <input value={pass} onChange={handlePasswordChange} type="password" placeholder="********" id="password" name="password" />
            {passwordStrengthError && <p>{passwordStrengthError}</p>}
            <label htmlFor="confirm_password">confirm password</label>
            <input value={confirmPassword} onChange={handleConfirmPasswordChange} type="password" placeholder="********"  id="confirm_password" name="confirm password" />
            {passwordMatchError && <p>{passwordMatchError}</p>}           
            {/* <Link to="/LandingPage"> */}
            <button style={{backgroundColor:'#7c3fd8'}} onClick={handleSubmit}>Register</button><br/>
            <Link style={{color:'#7c3fd8'}} to="/">Already have an account? Login here</Link>
            {/* </Link> */}
        </form>
        {/* <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button> */}
        <div>
      
    </div>

    </div>
    )
    
}
