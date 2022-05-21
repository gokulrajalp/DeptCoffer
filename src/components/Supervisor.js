import React from 'react';
import { useNavigate } from 'react-router-dom';
import './supervisor.css';
export default function Supervisor(){

    let navigate = useNavigate();
    function logout(){
            navigate(`/`);
    }



    return(
    <div>
        <div className='msg3'>
        <a id="greet3">Welcome </a>
           <a id="user_name3"> {localStorage.getItem(`${localStorage.getItem(`${localStorage.getItem("current")}`)}_name`)} </a>
            <a id="pro2">to DeptCoffer</a>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className='pen1'>
        <h1 className='h14'>Pending requests</h1>
        <p className='para2'>No request found for approval</p>
        <br></br>
        <table className='table2'>
            <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Reg No</th>
                <th>Request-Title</th>
                <th>Supervisor-Status</th>
                <th>Admin-Status</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Aditya</td>
                <td>1913003</td>
                <td>Leave</td>
                <td><button className="btn btn-success" type="submit">Approved</button></td>
                <td><button className="btn btn-success" type="submit">Approved</button></td>
            </tr>
            <tr>
                <td>2</td>
                <td>Arun</td>
                <td>1913009</td>
                <td>On-Duty</td>
                <td><button className="btn btn-success" type="submit">Approved</button></td>
                <td><button className="btn btn-danger" type="submit">Pending</button>
                </td>
            </tr>
            <tr>
                <td>3</td>
                <td>Gokulraja</td>
                <td>1913028</td>
                <td>Fees Structure</td>
                <td><button className="btn btn-success" type="submit">Approved</button></td>
                <td><button className="btn btn-success" type="submit">Delivered</button></td>
            </tr>
        </table>
        <br></br>
        <button onClick={logout} id="logout" className="btn btn-success" type="submit">Logout</button>
        </div>
    </div>
    );
}