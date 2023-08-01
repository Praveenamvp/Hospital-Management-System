import { Navigate } from "react-router-dom";

function PatientProtected({token,role,children})
{
    token=localStorage.getItem("token");
    role=localStorage.getItem("role");
    if(token!=null && role=="patient")
        return children;
    return <Navigate to='/'/>
}

export default PatientProtected 