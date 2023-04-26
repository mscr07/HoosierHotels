import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminCheckout from "./AdminCheckout";
import { colors } from "@mui/material";

export const CheckoutForm = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    
    const nav = useNavigate();

    const handleSubmit = (e) => {
        nav("/AdminCheckout");
    }

    return (
             <form className="login-form" style={{width:'500px',marginLeft:'35%',marginTop:"5%", backgroundColor:"blueviolet"}}>
                
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="enter name"
                    required
                />

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
                
                <div className='handleSubmit'>
                    <button style={{marginBottom:'20px',backgroundColor:'#7c3fd8'}} onClick={handleSubmit}>checkout</button>
                </div>
                </form>
    );
}
