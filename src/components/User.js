import React from 'react';
import { useState, useEffect  } from 'react';
import { useNavigate} from 'react-router-dom';
import {db} from '../firebase-config'
import { collection, addDoc, getDocs } from "firebase/firestore";
import './user.css';




export default function User(){





    const usersCollectionRef = collection(db, "request");
    const [users, setUsers] = useState([]);
    

    let key = localStorage.getItem("key");
    let name = localStorage.getItem("name");



    useEffect(()=>{
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
      
            setUsers(data.docs.map((doc)=> ({ ...doc.data(), id: doc.id})));
         
        };

        getUsers();
    }, []);
    
    
    
 





    const [req_title, setReq_title] = useState();
    const [req_subject, setReq_subject] = useState();
    const [req_describtion, setReq_describtion] = useState();
    
   
function request(){

var num=1;

    users.forEach((users)=>{
        alert(num);
        if(key===users.key){
            if(users.req_num){  
                alert(num);
                num = users.req_num+1;
            }else{
                num = 1;
                alert(num);
            }
            
        }
    });


if(req_title && req_subject && req_describtion){
    const sentRequest = async () => {
        await addDoc(usersCollectionRef, {key: key,req_num : num, req_title: req_title, req_subject: req_subject, req_describtion: req_describtion, Name : name});
    };

    sentRequest();

    alert("request sent sucessfully");

}else{
    alert(req_title, req_subject, req_describtion);
    
}
}
    let navigate = useNavigate();
    function logout(){
            navigate(`/`);
    }

    // function submit(){
    //     if(!localStorage.getItem(`${localStorage.getItem(`${localStorage.getItem("current")}`)}_req`)){
    //         localStorage.setItem(`${localStorage.getItem(`${localStorage.getItem("current")}`)}_req`,1)
    //     }else{
    //         var req = parseInt(localStorage.getItem(`${localStorage.getItem(`${localStorage.getItem("current")}`)}_req`));
    //     }

    //     localStorage.setItem(`${localStorage.getItem(`${localStorage.getItem("current")}`)}_title_${req}`,"leave letter");
    //     req++;
    // }



    return(
    <div >
        <div className='msg1'>
        <a id="greet1">Welcome </a>
        <a id="user_name1"> {localStorage.getItem(`name`)} </a> 
        <a id="pro">to DeptCoffer</a>
        </div>
        <br></br>
        <div id='hi'>
        <h1>Request Status</h1>
        <p className='para'>No request found</p>
        <table>
            <tr>
                <th>S.No</th>
                <th>Request-Title</th>
                <th>Supervisor-Approval</th>
                <th>Admin-Approval</th>
            </tr>
            <tr>
                <td>1</td>
                <td>On-Duty</td>
                <td><button className="btn btn-success" type="submit">Approved</button></td>
                <td><button className="btn btn-danger" type="submit">Pending</button></td>
            </tr>
        </table>
        <br></br>






        <h1 id="h12">Add new Request</h1>
        <div className='req'>
        <h3 id="req1">Request title</h3><input className='title' onChange={(e)=>{setReq_title(e.target.value)}}/>
        <br></br>
        <br></br>
        <h3 id="req2" className="sub" >Request Subject</h3><input className='subject' onChange={(e)=>{setReq_subject(e.target.value)}}/>
        <br></br>
        <br></br>
        <h3 id="req3">Request Description</h3><textarea className='description' onChange={(e)=>{setReq_describtion(e.target.value)}}/>
        <br></br>
        <br></br>
        </div>






       <button onClick={request} className="btn btn-outline-success" type="submit">Submit</button>
        <button onClick={logout} id="logout" className="btn btn-outline-success" type="submit">Logout</button>
    </div>




{/* {users.map((users)=>{
    return <div><h1>name : {users.Mail}</h1><h1>key : {users.key}</h1></div>
})} */}






    </div>
    );
}