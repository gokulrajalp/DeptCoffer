import React from 'react';
import './lock.css';
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
      <html>
          <body>
    <div className='container'>
    <h1 className='h1'>DeptCoffer</h1>
        <div className='align'>
        <h2>Enter your mail ID to unlock this application</h2>


<form onSubmit={verify}>
        <div className='input-group mb-3'>
  <div className='input-group-prepend'>
    <span className='input-group-text' id="basic-addon1">Mail ID</span>
  </div>
  <input id='mail' type='mail' class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
</div>

<br/>
<button className="btn btn-success" type="submit">Verify</button>
</form>
</div>
</div>
</body>
    </html>
    
    );
}