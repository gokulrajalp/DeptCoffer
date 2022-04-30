import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function Lock(){
    let navigate = useNavigate();
    
    function verify(){
    let value = document.querySelector('#mail').value;
    var Num;
        if(!localStorage.getItem("Num")){
            Num=0;
            localStorage.setItem("Num",Num);
        }else{
            Num = parseInt(localStorage.getItem("Num"));
        }
        localStorage.setItem(`${Num}`,"gokulrajalp@gmail.com");
        Num++;
        localStorage.setItem(`${Num}`,"gokulraja@gmail.com");
        Num++;
        var check = false;
        for(var i=0; i<Num; i++){
            if(value===localStorage.getItem(`${i}`)){
                check = true;
            }
        }
        if(check){
            navigate('/password');
        }else{
            navigate('/signin'); 
        }
    }
    
    return(
    <div>
        <h1>Enter your mail ID to unlock this application</h1>
            <input id='mail' type='mail'/><br/>
            <button onClick={verify}>verify</button>
    </div>
    );
}