
import React, { useState,Route,Routes } from "react";
import img from './updateatient.png'
import './UpdateDoctor.css'
import { Link, useNavigate,navigate } from 'react-router-dom';
import Admin from "./Admin";
import Menu from "./Menu";

function DocRegister() {
  const navigate = useNavigate()

    const [doctor, setDoctor] = useState({

        user: {
        },
          
        "firstName": "",
        "lastName": "",
        "dateOfBirth": "",
        "age": 0,
        "phone": "",
        "address": "",
        "gender":"",
        "email": "",
        "specialization": "",
        "licenseNumber": "",
        "experience": 0,
        "passwordString":""
    
      });
      var updatedoc = async () => {
        try {
          
          fetch("https://localhost:7206/api/User/AddDoctor", {
      "method": "POST",
      headers: {
        "accept": "text/plain",
        "Content-Type": 'application/json'
      },
      "body": JSON.stringify({ ...doctor, "doctor": {} })
    }).then(async (res) => {
      var myDataa = await res.json();
      localStorage.setItem("token", myDataa.token)
      localStorage.setItem("role", myDataa.role)
      localStorage.setItem("userId", myDataa.userId)
      if(res.status==201)
      {
     alert("Successfully Added Doctor Details")
     navigate('/disapproveddoc')
        
      }
      if(res.status==400){
        alert("UnSuccessfull in Added Doctor Details")

      }

    }
    )
        } catch (error) {
          console.error(error);
        }
      };

  return (<div>
    <Menu/>
          <div className="col-12 col-lg-11" >
         
          <div className="cd">
            <div className="card card0 rounded-0" >

              <div className="row">
                <div className="col-md-5 d-md-block d-none p-0 box"  >
                  <img src={img} className="img-updatedoctor"></img>
                </div>

                <div className="col-md-7 col-sm-12 p-0 box">
                  <div className="card rounded-0 border-0 card2 " id="paypage">
                    <div className="form-card">
                      <br />
                      <h2 id="heading2" >Add Doctor Details</h2><br />
                     
                      <input type="text" className="btn-input" name="holdername" placeholder="FirstName" 
                     onChange={(event) => {
                        setDoctor({ ...doctor, "firstName": event.target.value })
      
                      }} />
                      <input type="text" className="btn-input" name="holdername" placeholder="LastName"onChange={(event) => {
                  setDoctor({ ...doctor, "lastName": event.target.value })

                }}  />
                      <input type="date" className="btn-input" name="holdername" placeholder="DOB" onChange={(event) => {
                  setDoctor({ ...doctor, "dateOfBirth": event.target.value })

                }} />
                      <input type="number" className="btn-input" name="holdername" placeholder="Age" onChange={(event) => {
                  setDoctor({ ...doctor, "age": event.target.value })

                }} />
                 
                <input type="phone" className="btn-input" name="holdername" placeholder="Phone" onChange={(event) => {
                  setDoctor({ ...doctor, "phone": event.target.value })

                }} />
                 <input type="text" className="btn-input" name="holdername" placeholder="Address" onChange={(event) => {
                  setDoctor({ ...doctor, "address": event.target.value })

                }} />
                     
                      
                      <input type="text" className="btn-input" name="holdername" placeholder="Email"onChange={(event) => {
                  setDoctor({ ...doctor, "email": event.target.value })

                }}  />
                      <input type="text" className="btn-input" name="holdername" placeholder="Specialization"onChange={(event) => {
                  setDoctor({ ...doctor, "specialization": event.target.value })

                }}  />
                      <input type="text" className="btn-input" name="holdername" placeholder="LisenceNumber" onChange={(event) => {
                  setDoctor({ ...doctor, "licenseNumber": event.target.value })

                }} />
                      <input type="number" className="btn-input" name="holdername" placeholder="Experience" onChange={(event) => {
                  setDoctor({ ...doctor, "experience": event.target.value })
                  
                }} />
                      <input type="password" className="btn-input" name="password" placeholder="Password" onChange={(event) => {
                  setDoctor({ ...doctor, "passwordString": event.target.value })
                }} />
                      <div className="row" >
                        <div className="col-md-12" >
                          <button className="login-button" onClick={updatedoc} >Add Details</button>
                        </div>
                        <br /><p>n</p><br />

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
   
  </div>);

}
export default DocRegister;
