import React from 'react';
import { useState, useEffect  } from 'react';
import { useNavigate} from 'react-router-dom';
import {db} from '../firebase-config'
import { collection, addDoc } from "firebase/firestore";




export default function Signin(){

    // const [type, setType] = useState("user");
    // const [type, setType] = useState("user");
    // const [type, setType] = useState("user");
    // const [type, setType] = useState("user");
    // const [type, setType] = useState("user");
    // const [type, setType] = useState("user");
    // const [type, setType] = useState("user");
    // const [type, setType] = useState("user");







    let navigate = useNavigate();
    var mail = localStorage.getItem(`${localStorage.getItem("current")}`);
    function remove(){
        localStorage.removeItem(`${localStorage.getItem("current")}`);
        navigate('/');
    }

    function store(){

        if(!document.querySelector('.name').value){
        alert("enter the name");
            return;
        }

    
            if(!document.querySelector('.deep').value){
               alert("enter the deep");
                    return;
                 }
        
                
                if(document.querySelector('.type').value==="user"){
                    if(!document.querySelector('.year_value').value){
                    alert("enter the year");
                            return;
                    }
                }


                    if(!document.querySelector('.code_value').value){
                        alert("enter the code");
                            return;
                        }

                        if(document.querySelector('.password').value!==document.querySelector('.confirm').value){
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
        
        if(!document.querySelector('.reg').value){
           alert("enter the Reg.No");
                return; }

            localStorage.setItem(`${mail}_type`,document.querySelector('.type').value);
            localStorage.setItem(`${mail}_reg`,document.querySelector('.reg').value);
            localStorage.setItem(`${mail}_password`,document.querySelector('.password').value);
            localStorage.setItem(`${mail}_code`,document.querySelector('.code_value').value);
            localStorage.setItem(`${mail}_year`,document.querySelector('.year_value').value);
            localStorage.setItem(`${mail}_deep`,document.querySelector('.deep').value);
            localStorage.setItem(`${mail}_name`,document.querySelector('.name').value);


            const usersCollectionRef = collection(db, "users")
const createusers = async () => {
    await addDoc(usersCollectionRef, {Name : document.querySelector('.name').value});
};

createusers();


                            navigate('/password');
                
                                                
    }




    function change(){
        if(document.querySelector('.type').value==="admin"){
            document.querySelector('.code_admin').classList.remove("d-none");
            document.querySelector('.code').classList.add("d-none");
            document.querySelector('.year').classList.add("d-none");
        } else if(document.querySelector('.type').value==="supervisor"){
            document.querySelector('.code_admin').classList.add("d-none");
            document.querySelector('.code').classList.remove("d-none");
            document.querySelector('.year').classList.add("d-none");  
        }else{
            document.querySelector('.code_admin').classList.add("d-none");
            document.querySelector('.code').classList.remove("d-none");
            document.querySelector('.year').classList.remove("d-none");  
        }
    }




    return(
    <div className='container'>
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

        
        <div className='year'><h3>Year/Section *</h3><input className='year_value'/></div>
        <h2>Class Code *<span className='code'>(ask your Admin)</span>  <span className='code_admin d-none'>(Generate the code for your students and supervisors)</span> </h2><input className='code_value'/>

        <h3>New Password *</h3><input className='password' type={"password"}/>
        <h3>Confirm Password *</h3><input className='confirm' type={"password"}/>

        <button onClick={store}>Submit</button>

        
    </div>
    );
}