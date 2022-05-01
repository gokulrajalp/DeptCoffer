import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signin(){

    let navigate = useNavigate();
    function logout(){
            navigate(`/`);
    }



    return(
    <div>
        <h1>Welcome {localStorage.getItem(`${localStorage.getItem(`${localStorage.getItem("current")}`)}_name`)} to DeptCoffer</h1>
        <h1>Request Status</h1>
        <p>No request found</p>
        
        <h1>Add new Request</h1>
        <h3>Request title</h3><input className='title'/>
        <h3>Request Subject</h3><input className='subject'/>
        <h3>Request Describtion</h3><input className='describtion'/>
       <button onClick={logout}>Submit</button>
        <button onClick={logout} id="logout">Logout</button>
    </div>
    );
}