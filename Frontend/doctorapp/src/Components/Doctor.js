import logo from './logo.svg'
import React, { Routes ,Route} from "react";
import { Link } from "react-router-dom";
import GetAllPatient from './GetAllPatient';
import UpdateDoctor from './UpdateDoctor';
import DocPro from './DocPro';

function Doctor() {
  
var log =()=>{
  localStorage.clear();
}
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light" >
  <a class="navbar-brand" ><Link  className="nav-d"to="/getallpatient">ViewPatients</Link></a>&nbsp;
  <a class="navbar-brand" ><Link className="nav-d" to="/updatedoctor">UpdateProfile</Link></a>&nbsp;
  <a class="navbar-brand" ><Link className="nav-d" to="/docpro">Account</Link></a>&nbsp;

  <a class="navbar-brand" ><Link className="nav-d" onClick={log} to="/">LogOut</Link></a>


  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>  <button className='nav-admin'>Doctor</button>


</nav>
{/* <DocPro/> */}
      </div>
   )



    
   
   
  
   

  
}
export default Doctor;
