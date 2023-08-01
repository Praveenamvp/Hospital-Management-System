
import React, { useState } from "react";
import img from './updateatient.png'
import { Link, useNavigate } from 'react-router-dom';
import PatientImg from './PatientImg'
import './Patient.css'

function UpdatePatient() {
    const [patient, setPatient] = useState({

        
        user: {
        },
          "id":0,
        "firstName": "",
        "lastName": "",
        "dateOfBirth": "",
        "age": 0,
        "phone": "",
        "address": "",
        "email": "",
        "bloodGroup": "",
    
      });
      var updatepatient = async () => {
        try {
          var token=localStorage.getItem('token')
          
          await fetch('https://localhost:7206/api/User/UpdatePatientDetails', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer '+ token,
            },
            body: JSON.stringify(patient)
          })
          .then(async (data) => {
            if(data.status==202)
            {
              alert("Update Patient Details Successfull")

            }
            else{
              alert("Update Patient Details was UnSuccessfull")

            }
            
          })
          //leaves();
        } catch (error) {
          console.error(error);
        }
      };

  return (<div ><PatientImg/>
        <div className="col-12 col-lg-12" >
         
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
                        setPatient({ ...patient, "id": event.target.value })
      
                      }}/>
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
                 
                <input type="phone" className="btn-input" name="holdername" placeholder="Phone" onChange={(event) => {
                  setPatient({ ...patient, "phone": event.target.value })

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
                      <div className="row" >
                        <div className="col-md-12" >
                          <button className="login-button" onClick={updatepatient} >Update Details</button>
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
export default UpdatePatient;
