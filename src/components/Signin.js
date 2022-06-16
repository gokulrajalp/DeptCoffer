import React from 'react';
import { useState, useEffect  } from 'react';
import { useNavigate} from 'react-router-dom';
import {db} from '../firebase-config'
import { collection, addDoc } from "firebase/firestore";
import './signin.css'



export default function Sign(){

    const [type, setType] = useState("user");
    const [name, setName] = useState();
    const [id, setId] = useState();
    const [department, setDepartment] = useState();
    const [year, setYear] = useState();
    const [code, setCode] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setconfirmPassword] = useState();
    const [mail, setMail] = useState(localStorage.getItem(`${localStorage.getItem("current")}`));







    let navigate = useNavigate();
    function remove(){
        localStorage.removeItem(`${localStorage.getItem("current")}`);
        navigate('/');
    }

    function store(){

        if(!name){
        alert("enter the name");
            return;
        }

    
            if(!department){
               alert("enter the deep");
                    return;
                 }
        
                
                if(type==="user"){
                    if(!year){
                    alert("enter the year");
                            return;
                    }
                }


                    if(!code){
                        alert("enter the code");
                            return;
                        }

                        if(password!==confirmPassword){
                             alert("enter the password and confirm password");
                                return;
                            }

            let values = Object.values(localStorage);
        for(var i=0; i<values.length; i++){
            if(values[i]===id){
                alert("this reg.no is already registered");
                return;
            }
        }
        
        if(!id){
           alert("enter the Reg.No");
                return; }

            localStorage.setItem(`${mail}_type`,type);
            localStorage.setItem(`${mail}_reg`,id);
            localStorage.setItem(`${mail}_password`,password);
            localStorage.setItem(`${mail}_year`,year);
            localStorage.setItem(`${mail}_deep`,department);
            localStorage.setItem(`${mail}_name`,name);


            const usersCollectionRef = collection(db, "users");
const createusers = async () => {
    await addDoc(usersCollectionRef, {Name : name, Type: type, Id: id, Password:password, Year : year, Department: department, Mail: mail});
};

createusers();


                            navigate('/password');
                
                                                
    }

const [admin_code, setAdmin_code] = useState("(ask your Admin)");


    function change(e){
        setType(document.querySelector('.type').value);
        alert(type);
        if(type==="admin"){
            setAdmin_code("(Generate the code for your students and supervisors)");
            document.querySelector('.year').classList.add("d-none");
        } else if(type==="supervisor"){
            setAdmin_code("(ask your Admin)");
            document.querySelector('.year').classList.add("d-none");  
        }else{
            setAdmin_code("(ask your Admin)");
            document.querySelector('.year').classList.remove("d-none");  
        }
    }



    return(<div>
    <div className='container'>
        <h1>Welcome to the DeptCoffer</h1>
        <>{mail}</><button onClick={remove}>change and delete this mail</button>
<br/><br/>
<h3>use this application as</h3>
        <select className='type_1' onChange={change}>
            <option value="user">User</option>
            <option value="supervisor">Supervisor</option>
            <option value="admin">Admin</option>
        </select>




        
        <h3>name *</h3><input className='name'  onChange={(e)=>{setName(e.target.value)}}/>
        <h3>ID.No *</h3><input className='reg' onChange={(e)=>{setId(e.target.value)}}/>
        <h3>Department *</h3><input className='deep' onChange={(e)=>{setDepartment(e.target.value)}}/>

        
        <div className='year'><h3>Year/Section *</h3><input className='year_value' onChange={(e)=>{setYear(e.target.value)}}/></div>
        <h2>Class Code *<span>{admin_code}</span> </h2><input className='code_value' onChange={(e)=>{setCode(e.target.value)}}/>

        <h3>New Password *</h3><input className='password' type={"password"} onChange={(e)=>{setPassword(e.target.value)}}/>
        <h3>Confirm Password *</h3><input className='confirm' type={"password"} onChange={(e)=>{setconfirmPassword(e.target.value)}}/>

        <button onClick={store}>Submit</button>

        </div>
    </div>
    );
}