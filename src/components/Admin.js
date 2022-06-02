import React from 'react';
import { useNavigate } from 'react-router-dom';
import './admin.css';
export default function Admin(){

    let navigate = useNavigate();
    function logout(){
            navigate(`/`);
    }
// let status=document.querySelector('.status');



    return(
    <div>
         <div class="Logout">
        <button onClick={logout} className="btn btn-outline-success " 
        type="submit">Logout</button>
        </div>
        <section class="hello">
        <div className='msg2'>
        <a id="greet2">Welcome </a> 
       <a id="user_name2"> {localStorage.getItem(`${localStorage.getItem(`${localStorage.getItem("current")}`)}_name`)}</a> 
      <a id="pro1"> to DeptCoffer</a>
      </div>
     
      <div className='pen'>
        <h1 className='h13'>Pending requests</h1>
        <p className='para1'>No request found for approval</p>
        </div>
        <div className='tableContent'>
        <table className='table1'>
            <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Reg No</th>
                <th>Request-Title</th>
                <th>Status</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Aditya</td>
                <td>1913003</td>
                <td>Leave</td>
                <td><button className="btn btn-outline-success " type="submit">Approved</button></td>
            </tr>
            <tr>
                <td>2</td>
                <td>Arun</td>
                <td>1913009</td>
                <td>On-Duty</td>
                <td><button className="btn btn-outline-danger" type="submit">Pending</button></td>
            </tr>
            <tr>
                <td>3</td>
                <td>Gokulraja</td>
                <td>1913028</td>
                <td>Fees Structure</td>
                <td><button className="btn btn-outline-success status" type="submit">Delivered</button></td>
            </tr>
            
        </table>
        {/* <br></br> */}
       
        
        </div>
        </section>
    </div>
    );
}