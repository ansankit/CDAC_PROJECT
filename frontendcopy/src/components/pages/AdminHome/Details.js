import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import './AdminHome'
const Details = ({items, title} ) =>{
    const history=useHistory()
   
    return(
        
        <div className="container">
            <div><h2>{title}</h2></div>
            <hr />
            <table className="table table-striped table-responsive table-user">
                <thead>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Pincode</th>
                    <th>Mobile</th>
                    <th>Role</th>
                    <th></th>
                </thead>
                <tbody>
            {
                items.map((item)=>{
                    return(
                        <tr>
                            <td>{item.firstName} {item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.address}</td>
                            <td>{item.city}</td>
                            <td>{item.pincode}</td>
                            <td>{item.mobileNo}</td>
                            <td>{item.role}</td>
                            <td><button className="btn btn-danger" 
                                     onClick={()=>{ history.push('/deleteUser',{item:item})}}
                            >Delete</button></td>
                        </tr>    
                        
                    )
                })
                
            }
            </tbody>
            </table>
        </div>


    )
}

export default Details