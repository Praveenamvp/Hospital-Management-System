
import React, { useState } from "react";
import img from './updateatient.png'
import './UpdateDoctor.css'
import { Link, useNavigate } from 'react-router-dom';
import Doctor from "./Doctor";


function UpdateDoctor() {
    const [doctor, setDoctor] = useState({

        
        user: {
        },
          "id":0,
        "firstName": "",
        "lastName": "",
        "dateOfBirth": "",
        "age": 0,
        "phoneNumber": "",
        "address": "",
        "email": "",
        "specialization": "",
        "licenseNumber": "",
        "experience": 0,
    
      });
      var updatedoc = async () => {
        try {
            
            const token = localStorage.getItem('token');
            
          await fetch('https://localhost:7206/api/User/UpdateDoctorDetails', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer '+ token,

            },
            body: JSON.stringify(doctor)
          });
          alert("Update Doctor Details Successfull")
        } catch (error) {
          console.error(error);
        }
      };

  return (<div><Doctor/>
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
                      <h2 id="cc" >UPDATE YOUR PROFILE</h2><br />
                      <input type="text" className="btn-input" name="holdername" placeholder="User Id" 
                      onChange={(event) => {
                        setDoctor({ ...doctor, "id": event.target.value })
      
                      }}/>
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
                  setDoctor({ ...doctor, "phoneNumber": event.target.value })

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
                      <div className="row" >
                        <div className="col-md-12" >
                          <button className="login-button" onClick={updatedoc} >Update Details</button>
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
