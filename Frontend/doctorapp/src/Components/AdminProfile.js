import doccard from './doccard.jpg'
import React, { Routes ,Route} from "react";
import { Link } from "react-router-dom";
import  { useEffect, useState } from "react";

import Admin from './Admin'
import './Login.css'
function AdminProfile() {
  const [user, setUser] = useState({

    "userId": 0
  });
  useEffect(() => {
      const token = localStorage.getItem('token');
      const id = localStorage.getItem('id');
   console.log(id)
   setUser({...user,"userId": id}) 
   console.log(user.userId)

   fetch("https://localhost:7206/api/User/GetSingleDoctor", {
        "method": "POST",
        headers: {
          "accept": "text/plain",
          "Content-Type": 'application/json'
        },
        "body": JSON.stringify({ ...user, "user": {} })
      }).then(async (res) => {
        var myDataa = await res.json();
        console.log(myDataa)
       
        if(res.status==200)
        {
          console.log(res.status)
          
          
        }
      }
      ).catch((err) => {
        console.log(err)
      })
  });

    return (
      <div>

<Admin/>
<div class="card" >
  <img class="card-img-top" src={doccard} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>


      </div>
   )


  
   

  
}
export default AdminProfile;
