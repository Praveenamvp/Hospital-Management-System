import logo from './patienthome.jpg'
import React, { Routes ,Route} from "react";
import { Link } from "react-router-dom";
import Menu from './Menu'
import './Register.css'

function Register() {
  

    return (
      <div>
      <Menu/>
      
          
<div class="card bg-dark text-white">
  <img src={logo} class="card-img" alt="..."/>
  <div className="card-img-overlay card-tex">
   
    <h1 className="card-tex">Hey User Welcome to SMS Medico get started
    </h1>
    <div class="slider"></div>
        <div class="btn">
            <Link class="login" to="/docregister">&nbsp;&nbsp;Doctor &nbsp;&nbsp;&nbsp; Register</Link>
            <Link class="signup" to="/registerpatient">Patient Register</Link>
        </div>
    
  </div>
</div>

      </div>
   )

  
}
export default Register;
