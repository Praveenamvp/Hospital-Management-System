
import React, { useState } from "react";
import img from './updatepassword.png'
import './UpdateDoctor.css'
import { Link, useNavigate } from 'react-router-dom';
import Patient from "./Patient";
import Admin from './Admin'
import AdminProfile from "./AdminProfile";

function UpdateDoctor() {
    const [user, setuser] = useState({
       
          "userId":0,
        "password": "",
        
      });

      var updatepas = async () => {
        try {
            
            const token = localStorage.getItem('token');
           
            user.userId=Number(localStorage.getItem('userId'));
          await fetch('https://localhost:7206/api/User/UpdateUserPassword', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer '+ token,

            },
            body: JSON.stringify(user)
          })
              
          .then(res => {
              if (res.status == 202) {
                  alert("update password was successfull");
              }
              if(res.status == 401 || res.status == 400) {
                  {
                      alert("update password was unsuccessfull");

                  }
              }
          })
          
        } catch (error) {
          console.error(error);
        }
      };

  return (<div><Admin/>
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
                      <br />                      <br />
                      <br />

                      <h2 id="heading2" >Enter Your New Password</h2><br />
                      <input type="password" className="btn-input" name="holdername" placeholder="Password" 
                      onChange={(event) => {
                        setuser({ ...user, "password": event.target.value })
      
                      }}/>
                     
                 
              
                      <div className="row" >
                        <div className="col-md-12" >
                          <button className="login-button" onClick={updatepas} >Update Password</button>
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
