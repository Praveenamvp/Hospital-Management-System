import './App.css';
import AdminProtected from './Components/Protected/AdminProtected';
import GetAllDoctersProtected from './Components/Protected/GetAllDoctorsProtected'
import UpdatePasswordProtected from './Components/Protected/GetAllDoctorsProtected'
import ApprovedDoctorsProtected from './Components/Protected/ApprovedDoctorsProtected';
import UpdateDoctorsProtected from './Components/Protected/UpdateDoctorsProtected';
import DoctorProtected from './Components/Protected/DoctorProtected';
import UpdatePatientProtected from './Components/Protected/UpdatePatientProtected'
import PatientProfileProtected from './Components/Protected/PatientProfileProtected';
import PatientProtected from './Components/Protected/PatientProtected';
import GetAllPatientProtected from './Components/Protected/GetAllPatientProtected';
import DoctorProfileProtected from './Components/Protected/DoctorProfileProtected'
import Doctor from './Components/Doctor';
import Login from './Components/Login';
import Patient from './Components/Patient';
import DocRegister from './Components/DocRegister'
import RegisterPatient from './Components/RegisterPatient'
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GetAllPatient from './Components/GetAllPatient';
import UpdateDoctor from './Components/UpdateDoctor';
import UpdatePatient from './Components/UpdatePatient';
import Admin from './Components/Admin';
import GetAllDocters from './Components/GetAllDocters';
import Register from './Components/Register'
import DisapprovedDoc from './Components/DisapprovedDoc';
import AdminProfile from './Components/AdminProfile';
import UpdatePassword from './Components/UpdatePassword'
import ApprovedDoctors from './Components/ApprovedDoctors';
import PatientProfile from './Components/PatientProfile';
import PatientHome  from './Components/PatientHome';
import PatientImg  from './Components/PatientImg';
import DocPro from './Components/DocPro';
import Menu from './Components/Menu';



function App() {
  var token;
  var role;
  return (
    <div className="App">
      
    <BrowserRouter>
    <Routes>
    


    <Route path='/' element={<Menu/>}/>
     <Route path='/login' element={<Login/>}/>  
  <Route path='/register' element={<Register/>}/>  
  <Route path='/registerpatient' element={<RegisterPatient />}/> 
    <Route path='/docregister' element={<DocRegister />}/> 
    <Route path='/disapproveddoc' element={<DisapprovedDoc />}/> 


  

  <Route path='/doctor' element={
          <DoctorProtected token={token} role={role}>
            <Doctor/>
          </DoctorProtected>
          }/>
                   <Route path='/docpro' element={
          <DoctorProfileProtected token={token}>
            <DocPro/>
          </DoctorProfileProtected>
          }/>
           <Route path='/getalldoctors' element={
          <GetAllDoctersProtected token={token}>
            <GetAllDocters/>
          </GetAllDoctersProtected>
          }/>
                 <Route path='/updatepassword' element={
          <UpdatePasswordProtected token={token} >
            <UpdatePassword/>
          </UpdatePasswordProtected>
          }/>  <Route path='/patient' element={
            <PatientProtected token={token} role={role}>
              <Patient/>
            </PatientProtected>
            }/>
              <Route path='/updatepatient' element={
          <UpdatePatientProtected token={token}>
            <UpdatePatient/>
          </UpdatePatientProtected>
          }/>
              <Route path='/getallpatient' element={
          <GetAllPatientProtected token={token}>
            <GetAllPatient/>
          </GetAllPatientProtected>
          }/>
            <Route path='/patientprofile' element={
          <PatientProfileProtected token={token}>
            <PatientProfile/>
          </PatientProfileProtected>
          }/>
            
                   <Route path='/approveddoctors' element={
          <ApprovedDoctorsProtected token={token}>
           <ApprovedDoctors/>
          </ApprovedDoctorsProtected>
          }/>
          <Route path='/updatedoctor' element={
          <UpdateDoctorsProtected token={token}>
            <UpdateDoctor/>
          </UpdateDoctorsProtected>
          }/>
          <Route path='/admin' element={
          <AdminProtected token={token} role={role}>
            <Admin/>
          </AdminProtected>
          }/>
      </Routes></BrowserRouter>
   
    
  
      
    </div>
  );
}

export default App;
