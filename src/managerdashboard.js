import React, { useState } from "react";
import { Dbchart } from "./components/Dashboardchart";
import { Card } from "react-bootstrap";
import Navbar from "./components/navbar";
function Managerdb(){
    return(
        <>
        <Navbar/>
        <div style={{marginTop:'100px',marginLeft:'20px'}}>
        <h1>Analytics</h1>
        </div>
        
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
        <Card style={{width:"250px", height:"150px",overflow:'scroll',backgroundColor:'#d5dee8'}}>
                    <Card.Body>
                    <Card.Title style={{ fontSize:'25px', color:'black'}}>Sales</Card.Title>
                    <Card.Text>
                         <h2>2600$</h2>
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{width:"250px", height:"150px",overflow:'scroll',backgroundColor:'#d5dee8'}}>
                    <Card.Body>
                    <Card.Title style={{ fontSize:'25px', color:'black'}}>Expenses</Card.Title>
                    <Card.Text>
                         <h2>2500$</h2>
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{width:"250px", height:"150px",overflow:'scroll',backgroundColor:'#d5dee8'}}>
                    <Card.Body>
                    <Card.Title style={{ fontSize:'25px', color:'black'}}>Profit/Loss</Card.Title>
                    <Card.Text>
                         <h2>100$</h2>
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{width:"250px", height:"150px",overflow:'scroll',backgroundColor:'#d5dee8'}}>
                    <Card.Body>
                    <Card.Title style={{ fontSize:'25px', color:'black'}}>Turnover</Card.Title>
                    <Card.Text>
                         <h2>100$</h2>
                    </Card.Text>
                    </Card.Body>
                </Card>
                </div>

        <Dbchart/>

        </>

    );
}
export default Managerdb;