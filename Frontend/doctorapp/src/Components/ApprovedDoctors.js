


import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import PatientImg from "./PatientImg";

function ApprovedDoctors() {
    const [doctors, setDoctors] = useState([
     
    ]);



     useEffect( () => {
        const token = localStorage.getItem('token');
      console.log(token)
        fetch('https://localhost:7206/api/User/GetAllApprovedDoctors', {
            "method": "GET",
            headers: {
              "accept": "text/plain",
              "Content-Type": 'application/json',
              "Authorization": "Bearer "+token
            },
          
          })
            .then(async (res) => {
              var myDataa = await res.json();
              setDoctors(myDataa)
             
            }
            ).catch((err) => {
              console.log(err)
            })
        }
      
      
      
      );


    if (doctors.length == 0) {
        return <div ><PatientImg/>
            <h1 className="alert alert-danger" >Loading the docter details... </h1></div>
    }
    return (


        <div><PatientImg/><br />
            <h4>DOCTOR DETAILS</h4><br />

            <div className="alterTable ">
                <table className="table table-striped ">
                    <thead>
                        <tr className="table-info">
                            <th scope="col">FIRST NAME</th>
                            <th scope="col">D.O.B</th>
                            <th scope="col">AGE </th>
                            <th scope="col">GENDER</th>
                            <th scope="col">ADDRESS</th>
                            <th scope="col">PHONE NUMBER</th>
                            <th scope="col">EMAIL</th>
                            <th scope="col">STATUS</th>
                            <th scope="col">SPECIALIZATION</th>
                            <th scope="col">EXPERIENCE</th>

                        </tr>
                    </thead>
                    <tbody>
                        { doctors.map((u) => (
                            <tr key={u.id}>
                                <td >{u.firstName}</td>
                                <td>{u.dateOfBirth}</td>
                                <td >{u.age}</td>
                                <td >{u.gender}</td>
                                <td >{u.address}</td>
                                <td >{u.phone}</td>
                                <td >{u.email}</td>
                                <td > <button
                                    className='btn-change'
                                    style={{ backgroundColor: u.status === 'bending' ? '#f9d2c0' : '#cbf2d9' }}

                                >
                                    {u.status}
                                </button></td>


                                <td>{u.specialization}</td>
                                <td>{u.experience}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div></div>

    );
}
export default ApprovedDoctors;