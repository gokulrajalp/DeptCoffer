import React from 'react';
import { useNavigate } from 'react-router-dom';
import './user.css';
export default function User(){

    let navigate = useNavigate();
    function logout(){
            navigate(`/`);
    }

    function submit(){
        if(!localStorage.getItem(`${localStorage.getItem(`${localStorage.getItem("current")}`)}_req`)){
            localStorage.setItem(`${localStorage.getItem(`${localStorage.getItem("current")}`)}_req`,1)
        }else{
            var req = parseInt(localStorage.getItem(`${localStorage.getItem(`${localStorage.getItem("current")}`)}_req`));
        }

        localStorage.setItem(`${localStorage.getItem(`${localStorage.getItem("current")}`)}_title_${req}`,"leave letter");
        req++;
    }



    return(
    <div >
        <div className='msg1'>
        <a id="greet1">Welcome </a>
        <a id="user_name1">{localStorage.getItem(`${localStorage.getItem(`${localStorage.getItem("current")}`)}_name`)} </a> 
        <a id="pro">to DeptCoffer</a>
        </div>
        <br></br>
        <div className='container'>
        <h1><u>Request Status</u></h1>
        <p className='para'>No request found</p>
        <br></br>
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
        <h1 id="h12"><u>Add new Request</u></h1>
        <div className='req'>
        <h3 id="req1">Request title</h3><input className='title'/>
        <br></br>
        <br></br>
        <h3 id="req2" className="sub" >Request Subject</h3><input className='subject'/>
        <br></br>
        <br></br>
        <h3 id="req3">Request Description</h3><textarea className='description '/>
        <br></br>
        <br></br>
        </div>
       <button onClick={submit} className="btn btn-success" type="submit">Submit</button>
        <button onClick={logout} id="logout" className="btn btn-success" type="submit">Logout</button>
    </div>
    </div>
    );
}