
import React, { useState } from "react";
import './Login.css'
import pat from './doclogo.jpg'
import { Link, useNavigate } from 'react-router-dom';
import Menu from './Menu'

import { Doctor } from './Doctor'
function Login() {

  const navigate = useNavigate()
  const [user, setUser] = useState({

    "userId": 0,
    "password": ""
  });

  var login = () => {
    console.log(user)
    fetch("https://localhost:7206/api/User/LoginUser", {
      "method": "POST",
      headers: {
        "accept": "text/plain",
        "Content-Type": 'application/json'
      },
      "body": JSON.stringify({ ...user, "user": {} })
    })
      .then(async (res) => {
        var myDataa = await res.json();
        localStorage.setItem("token", myDataa.token)
        localStorage.setItem("role", myDataa.role)
        localStorage.setItem("userId", myDataa.userId)
        if(res.status==200)
        {
          if(myDataa.role=="doctor")
          {
            alert("login was successfull")

            navigate("/doctor");

          }
          else if(myDataa.role=="patient")
          {
            alert("login was successfull")
            navigate("/patient");
            

          }
          else if(myDataa.role=="admin"){
            navigate("/admin");
            alert("login was successfull")

          }
          
          
          
        }
        else {
          alert("login was unsuccessfull")
        }
      }
      ).catch((err) => {
        console.log(err)
      })
  }




  return (<div>
     <Menu/> 
    <div className="container-fluid">
      <div className="row justify-content-center tr" >
        <div className="col-12 col-lg-11" >
          <div className="cd">
            <div className="card card0 rounded-0" >

              <div className="row">
                <div className="col-md-5 d-md-block d-none p-0 " id="box" >
                  <br /><br />
                  <img src={pat} ></img>
                </div>

                <div className="col-md-7 col-sm-12 p-0 box">
                  <div className="card rounded-0 border-0 card2" id="paypage" >
                    <div className="form-card">
                      <br />
                      <h2 id="heading2" >Login</h2>
                                 <header class="subHeader">Welcome to <b>SMS medico!</b> Please Enter your Details</header>
                                 <br />

                      <input type="text" className="btn-input" name="holdername" placeholder="User Id" onChange={(event) => {
                        setUser({ ...user, "userId": event.target.value })
                      }} />
                      <input type="password" className="btn-input" name="holdername" placeholder="Password" onChange={(event) => {
                        setUser({ ...user, "password": event.target.value })
                      }} />


                      <div className="row" >
                        <div className="col-md-6">
                          <Link className="forgot" to="/register">sign in</Link>			                        </div>
                        <div className="col-md-6" >
                          <button className="login-btn" onClick={login}>Login</button>
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
      </div>
    </div>
  </div>);

}
export default Login;
