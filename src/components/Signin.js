import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signin(){
    let navigate = useNavigate();
    var mail = localStorage.getItem(`${localStorage.getItem("current")}`);
    function remove(){
        localStorage.removeItem(`${localStorage.getItem("current")}`);
        navigate('/');
    }

    function store(){



        if(document.querySelector('.type').value!=="select"){
            localStorage.setItem(`${mail}_type`,document.querySelector('.type').value);
            }else{
                alert("enter the type of usage");
                return;
            }



        if(document.querySelector('.name').value){
        localStorage.setItem(`${mail}_name`,document.querySelector('.name').value);
        }else{
            alert("enter the name");
            return;
        }

        

        
    
    
            if(document.querySelector('.deep').value){
                localStorage.setItem(`${mail}_deep`,document.querySelector('.deep').value);
                }else{
                    alert("enter the deep");
                    return;
                }
        
        
                if(document.querySelector('.year').value){
                    localStorage.setItem(`${mail}_year`,document.querySelector('.year').value);
                    }else{
                        alert("enter the year");
                        return;
                    }
            
            
                    if(document.querySelector('.code').value){
                        localStorage.setItem(`${mail}_code`,document.querySelector('.code').value);
                        }else{
                            alert("enter the code");
                            return;
                        }

                        if(document.querySelector('.password').value===document.querySelector('.confirm').value){
                            localStorage.setItem(`${mail}_password`,document.querySelector('.password').value);
                            }else{
                                alert("enter the password and confirm password");
                                return;
                            }

            let values = Object.values(localStorage);
        for(var i=0; i<values.length; i++){
            if(values[i]===document.querySelector('.reg').value){
                alert("this reg.no is already registered");
                return;
            }
        }
        
        if(document.querySelector('.reg').value){
            localStorage.setItem(`${mail}_reg`,document.querySelector('.reg').value);
            }else{
                alert("enter the Reg.No");
                return;
            }
                            navigate('/password');
                
                                                
    }
    return(
    <div>
        <h1>Welcome to the DeptCoffer</h1>
        <>{mail}</><button onClick={remove}>change and delete this mail</button>
<br/><br/>
<h3>use this application as</h3>
        <select className='type' onChange={change}>
            <option value="user">User</option>
            <option value="supervisor">Supervisor</option>
            <option value="admin">Admin</option>
        </select>




        
        <h3>name *</h3><input className='name' />
        <h3>ID.No *</h3><input className='reg' />
        <h3>Department *</h3><input className='deep'/>

        
        <h3>Year/Section *</h3><input className='year'/>
        <h2>Class Code *(is you are an admin generate new code)</h2><input className='code'/>

        <h3>New Password *</h3><input className='password' type={"password"}/>
        <h3>Confirm Password *</h3><input className='confirm' type={"password"}/>

        <button onClick={store}>Submit</button>

        
    </div>
    );
}