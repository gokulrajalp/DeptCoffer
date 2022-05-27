import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Password.css';
export default function Signin(){

    let navigate = useNavigate();
    const verify = () =>{
        alert(localStorage.getItem(`${localStorage.getItem(`${localStorage.getItem("current")}`)}_type`));
        if(document.querySelector('.password').value===localStorage.getItem(`${localStorage.getItem(`${localStorage.getItem("current")}`)}_password`)){
            navigate(`/${localStorage.getItem(`${localStorage.getItem(`${localStorage.getItem("current")}`)}_type`)}`);
        }
    }



    return(
    <div>
        <form onSubmit={verify}> 
        <div class="msg">
        <a id="greet">Welcome   </a>
        <a id="user_name">{localStorage.getItem(`${localStorage.getItem(`${localStorage.getItem("current")}`)}_name`)}</a>
        </div>
        <div class="pwd">
        <h1 class="h11">Enter your Password</h1>
        <div class="container"></div>
        <input id="pass" className='password form-control' type='password' placeholder="password"></input>
        <br></br>
        <button type="submit" class="btn btn-outline-success">Verify</button> 
        </div>
        </form>
    </div>
    );
}