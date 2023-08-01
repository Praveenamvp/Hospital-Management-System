
import React, { useState,Route,Routes } from "react";
import img from './updateatient.png'
import './UpdateDoctor.css'
import { Link, useNavigate,navigate } from 'react-router-dom';
import Menu from "./Menu";


function UpdateDoctor() {
  const navigate = useNavigate()

    const [patient, setPatient] = useState({

        user: {
        },
          
        "firstName": "",
        "lastName": "",
        "dateOfBirth": "",
        "age": 0,
        "gender": "",
        "address": "",
        "phoneNumber":"",
        "email": "",
        "bloodGroup": "",
        "passwordString":""
    
      });
      var register = async () => {
        try {
          
          fetch("https://localhost:7206/api/User/AddPatient", {
      "method": "POST",
      headers: {
        "accept": "text/plain",
        "Content-Type": 'application/json'
      },
      "body": JSON.stringify({ ...patient, "patient": {} })
    }).then(async (res) => {
      var myDataa = await res.json();
      localStorage.setItem("token", myDataa.token)
      localStorage.setItem("role", myDataa.role)
      localStorage.setItem("userId", myDataa.userId)
      if(res.status===201)
      {
        
           alert("Successfully Added Patient Details")
           navigate('/patient')

      }
      else{
        alert("UnSuccessfull in Added Patient Details")

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
                      <h2 id="heading2" >Add Patient Details</h2><br />
                  
                      <input type="text" className="btn-input" name="holdername" placeholder="FirstName" 
                     onChange={(event) => {
                        setPatient({ ...patient, "firstName": event.target.value })
      
                      }} />
                      <input type="text" className="btn-input" name="holdername" placeholder="LastName"onChange={(event) => {
                  setPatient({ ...patient, "lastName": event.target.value })

                }}  />
                      <input type="date" className="btn-input" name="holdername" placeholder="DOB" onChange={(event) => {
                  setPatient({ ...patient, "dateOfBirth": event.target.value })

                }} />
                      <input type="number" className="btn-input" name="holdername" placeholder="Age" onChange={(event) => {
                  setPatient({ ...patient, "age": event.target.value })

                }} />
                 
                <input type="text" className="btn-input" name="holdername" placeholder="Phone" onChange={(event) => {
                  setPatient({ ...patient, "phoneNumber": event.target.value })

                }} />
                 <input type="text" className="btn-input" name="holdername" placeholder="Address" onChange={(event) => {
                  setPatient({ ...patient, "address": event.target.value })

                }} />
                     
                      
                      <input type="text" className="btn-input" name="holdername" placeholder="Email"onChange={(event) => {
                  setPatient({ ...patient, "email": event.target.value })

                }}  />
             
              
                      <input type="text" className="btn-input" name="holdername" placeholder="Blood Group" onChange={(event) => {
                  setPatient({ ...patient, "bloodGroup": event.target.value })
                }} />
                <input type="password" className="btn-input" name="password" placeholder="Password" onChange={(event) => {
                  setPatient({ ...patient, "passwordString": event.target.value })
                }} />
                      <div className="row" >
                        <div className="col-md-12" >
                          <button className="login-button" onClick={register} >Add Details</button>
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
export default UpdateDoctor;
