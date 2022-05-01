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
        var check = false;
        for(var i=0; i<Num; i++){
            if(value===localStorage.getItem(`${i}`)){
                check = true;
                localStorage.setItem("current",i);
            }
        }
        
        if(check){
            navigate('/password');
        }else{
            localStorage.setItem(`${Num}`,value);
            localStorage.setItem("current",Num);
            Num++;
            localStorage.setItem("Num",Num);
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