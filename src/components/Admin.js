import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Admin(){

    let navigate = useNavigate();
    function logout(){
            navigate(`/`);
    }



    return(
    <div>
        <h1>Welcome {localStorage.getItem(`${localStorage.getItem(`${localStorage.getItem("current")}`)}_name`)} to DeptCoffer</h1>
        <h1>Pending requests</h1>
        <p>No request found for approval</p>

        <button onClick={logout} id="logout">Logout</button>
    </div>
    );
}