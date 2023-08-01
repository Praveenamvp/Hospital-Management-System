import logo from './logo.svg';
import './Admin.css';
import React, { Routes ,Route,useState,useEffect} from "react";
import { Link, useNavigate,navigate } from "react-router-dom";
import DocPro from './DocPro';

function Admin() {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
         getdoctors();
       }, []);
       const navigate = useNavigate()
var log =()=>{
    localStorage.clear()
}
    var getdoctors=()=>
    {
        const token = localStorage.getItem('token');
        console.log(token)
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        };
        fetch('https://localhost:7206/api/User/GetAllDoctors',config)  
         .then(res => {
            setDoctors(res);
         })
         .catch(error => {
           console.error(error);
         });
    }
  
    
    
  return ( 
       <div >


<nav class="navbar navbar-expand-lg navbar-light bg-light" >
  <a class="navbar-brand" ><Link  className="nav-d"to="/getalldoctors">Get All Doctors</Link></a>
  <a class="navbar-brand" ><Link className="nav-d" to="/updatepassword">Update Password</Link></a>

  <a class="navbar-brand" ><Link className="nav-d" onClick={log} to="/">Log out</Link></a>


  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>&nbsp;<button className='nav-admin' to="/admin">Admin</button>


</nav>

</div>

  )}
  export default Admin;

  


