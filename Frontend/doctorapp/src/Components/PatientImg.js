import patienthome from './patienthome.jpg'
import React, { Routes, Route } from "react";
import { Link } from "react-router-dom";
import { useState } from 'react';
import ApprovedDoctors from './ApprovedDoctors';
import './Login.css'
import {  useNavigate } from 'react-router-dom';
import PatientHome from './PatientHome';


function PatientImg() {
  const [imageToggle,setToggle] = useState(false);
    const navigate = useNavigate()


    var log =()=>
    {
localStorage.clear();
    }
    
    return (
        <div>
          

<nav class="navbar navbar-expand-lg navbar-light bg-light" >
  <a class="navbar-brand" ><Link  className="nav-d" to="/approveddoctors" onClick={()=>
  {
    setToggle(true)
  }}>Get All Doctors</Link></a>
  <a class="navbar-brand" ><Link className="nav-d" to="/updatepatient" onClick={()=>
  {
    setToggle(true)
  }}>Update Profile</Link></a>

 <a class="navbar-brand" ><Link className="nav-d" to="/patientprofile" onClick={()=>
  {
    setToggle(true)
  }}>Account</Link></a> 

  <a class="navbar-brand" ><Link className="nav-d" onClick={log} to="/" >Log out</Link></a>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  
  <button className='nav-admin'>Patient</button>


</nav>
 

        </div>
        


    );
}
export default PatientImg;
