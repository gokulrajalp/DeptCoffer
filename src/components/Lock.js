import React from 'react';
import './lock.css';
import { useState, useEffect  } from 'react';
import { useNavigate} from 'react-router-dom';
import {db} from '../firebase-config'
import { collection,getDocs } from "firebase/firestore";



export default function Lock(){
    let navigate = useNavigate();




    const usersCollectionRef = collection(db, "users");
    const [users, setUsers] = useState([]);
    const [mail, setMail] = useState();
    
    useEffect(()=>{
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
      
            setUsers(data.docs.map((doc)=> ({ ...doc.data(), id: doc.id})));
         
        };

        getUsers();
    }, []);
    
    
    
    function verify(){
    // var Num;
    //     if(!localStorage.getItem("Num")){
    //         Num=0;
    //         localStorage.setItem("Num",Num);
    //     }else{
    //         Num = parseInt(localStorage.getItem("Num"));
    //     }
        var check = false;
        users.map((users)=>{
            if(mail===users.Mail){
                check = true;
                localStorage.setItem("key",users.id);

            }
        });
        
        
        if(check){
            navigate('/password');
        }else{
            // localStorage.setItem(`${Num}`,mail);
            // localStorage.setItem("current",Num);
            // Num++;
            localStorage.setItem("mail",mail);
            // localStorage.setItem("Num",Num);
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
    <span  id="basic-addon1">Enter your mail ID</span>
  </div>
  <input type="mail" id="mail" name="fname" onChange={(e)=>{setMail(e.target.value)}}></input>

  </div> 
<br/>
<button type="submit" class="btn btn-outline-success">Verify</button>
</form>
</div>
</div>



{/* {users.map((users)=>{
    return <div><h1>name : {users.Mail}</h1><h1>type : {users.Type}</h1></div>
})} */}


</body>
    </html>
    
    );
}