import React from 'react';
import { useState, useEffect  } from 'react';
import { useNavigate} from 'react-router-dom';
import {db} from '../firebase-config'
import { collection,getDocs } from "firebase/firestore";
import './Password.css';


export default function Signin(){

    let navigate = useNavigate();

    const usersCollectionRef = collection(db, "users");
    const [users, setUsers] = useState([]);
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    // const [name, setName] = useState();
    
    useEffect(()=>{
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
      
            setUsers(data.docs.map((doc)=> ({ ...doc.data(), id: doc.id})));
         
        };

        getUsers();
    }, []);
    
    
    
    function verify(){
        var key = localStorage.getItem("key");
        users.forEach((users)=>{
            if(key===users.id){
                if(password===users.Password){
                    navigate(`/${users.Type}`);
                }
                else{
                    setError("This is not a valid password");
                }
            }
        });
    }
    

    return(
    <div>
        <form onSubmit={verify}> 
        <div class="msg">
        <a id="greet">Welcome</a>
        <a id="user_name"> {localStorage.getItem(`name`)} </a>
        </div>
        <div class="pwd">
        <h1 class="h11">Enter your Password</h1>
        <div class="container"></div>
        <input id="pass" className='password form-control' type='password' placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}></input>
        <p>{error}</p>
        <br></br>
        <button type="submit" class="btn btn-outline-success">Verify</button> 
        </div>
        </form>
    </div>
    );
}