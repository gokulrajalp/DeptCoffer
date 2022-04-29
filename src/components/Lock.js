import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function Lock(){
    let navigate = useNavigate();
    
    function verify(){
    let value = document.querySelector('#mail').value;
        if(value==="gokulrajalp@gmail.com"){
            navigate('/signin');
        }
        
    };
    
    return(
    <div>
        <h1>Enter your mail ID to unlock this application</h1>
            <input id='mail' type='mail'/><br/>
            <button onClick={verify}>verify</button>
    </div>
    );
}