import logo from './logo.svg';
import './Admin.css';
// import React, { Routes ,Route,useState,useEffect} from "react";
import { Link } from "react-router-dom";

import {  useNavigate } from 'react-router-dom';


function Menu() {
  const navigate = useNavigate()

var log =()=>{
    localStorage.clear()
    navigator('/Menu')
}
    
  
    
    
  return ( 
       <div >


<nav class="navbar navbar-expand-lg navbar-light bg-light" >
<a class="navbar-brand" ><Link  className="nav-d"to="/getalldoctors">AboutUs</Link></a>&nbsp;&nbsp;&nbsp;

  <a class="navbar-brand" ><Link  className="nav-d"to="/register">SignUp</Link></a>&nbsp;
  <a class="navbar-brand" ><Link className="nav-d" to="/login">LogIn</Link></a>
  &nbsp;
  <a class="navbar-brand" ><Link className="nav-d" onClick={log} to="/">Log out</Link></a>


  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button className='nav-admin' to="/admin"><b>SMS</b> Medico</button>


</nav>

</div>

  )}
  export default Menu;

  


