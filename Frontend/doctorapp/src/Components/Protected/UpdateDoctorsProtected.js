import { Navigate } from "react-router-dom";

function UpdateDoctorsProtected({token,children})
{
    token=localStorage.getItem("token");
    if(token!=null && localStorage.getItem("role")=="doctor")
        return children;
    return <Navigate to='/'/>
}

export default UpdateDoctorsProtected