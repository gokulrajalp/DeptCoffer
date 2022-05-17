import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signin(){

    let navigate = useNavigate();
    const verify = () =>{
        
        if(document.querySelector('.password').value===localStorage.getItem(`${localStorage.getItem(`${localStorage.getItem("current")}`)}_password`)){
            navigate(`/${localStorage.getItem(`${localStorage.getItem(`${localStorage.getItem("current")}`)}_type`)}`);
        }
    }



    return(
    <div>
        <h1>Welcome {localStorage.getItem(`${localStorage.getItem(`${localStorage.getItem("current")}`)}_name`)}</h1>
        <h1>Enter your Password</h1>
        <input className='password' />
        <button onClick={verify}>Verify</button>
    </div>
    );
}