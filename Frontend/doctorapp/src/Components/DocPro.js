import patient from './patientprofile.jpg'
import React, { Routes ,Route,useEffect,useState} from "react";

import './Patient.css'
import Doctor from './Doctor';
function DocPro(){
    const [doctors, setDoctors] = useState({
        "firstName":"",
        "dateOfBirth":"",
        "email":"",
        "phone":"",
        "specialization":"",
      }
        
      );
  
      const [IdDTO, setUser] = useState({
  
          "userId": localStorage.getItem('userId'),
        });
      
      useEffect(() => {
          console.log(IdDTO.userId)
          const token = localStorage.getItem('token');
          console.log(token)
  
           fetch("https://localhost:7206/api/User/GetSingleDoctor", {
              "method": "POST",
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ token,
  
              },
              "body": JSON.stringify({ ...IdDTO, "IdDTO": {} })
            })
              .then(async (res) => {
                var myDataa = await res.json();
              setDoctors(myDataa)
               console.log(myDataa.firstName)
              }
              ).catch((err) => {
                console.log(err)
              })
          });
    return (<div>
     <Doctor/>
    <section className="vh-100 " id="mainn">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-lg-6 mb-4 mb-lg-0">
        <div class="card mb-3" >
          <div class="row g-0">
            
            <div class="col-md-4 gradient-custom text-center text-white"
             >
              <img className='main-im' src={patient}
              
                alt="Avatar" class="img-fluid my-5"  />             

              <h5>{doctors.firstName}</h5>
              <i class="far fa-edit mb-5"></i>
            </div>
            <div class="col-md-8">
              <div class="card-body p-4">
                <h3>{doctors.firstName}</h3>
                <hr class="mt-0 mb-4"/>
                <div class="row pt-1">
                  <div class="col-6 mb-3">
                    <h5>Email</h5>
                    <p class="text-muted">{doctors.email}</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h5>Phone</h5>
                    <p class="text-muted">{doctors.phone}</p>
                  </div>
                </div>
                <br/>
                <hr class="mt-0 mb-4"/>
                <div class="row pt-1">
                  <div class="col-6 mb-3">
                    <h5>Specialization</h5>
                    <p class="text-muted">{doctors.specialization}</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h5>Age</h5>
                    <p class="text-muted">{doctors.age}</p>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  </div>);

}
export default DocPro;