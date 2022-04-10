
import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router-dom';
import './Sellcar.css'
const CarDetails = ({items, title} ) =>{

     const history=useHistory()
        console.log(items);
    
    return(
        <div className="container">
            <div><h2>{title}</h2></div>
            <hr />
            <table className="table table-striped table-responsive table-user">
                <thead >
                    <th>Company</th>
                    {/* <th>Company Id</th> */}
                    <th>Model</th>
                    <th>Fuel Type</th>
                    <th>Km</th>
                    <th>Price</th>
                    <th>Color</th>
                    <th>Date</th>
                    <th>City</th>
                    <th></th>
                    <th></th>
                </thead>
                <tbody>
            {
                
                items.map((item)=>{
                    return(
                        <tr>
                            <td>{item.companyName}</td>
                            {/* <td>{item.companyId}</td> */}
                            <td>{item.modelName}</td>
                            <td>{item.fuelType}</td>
                            <td>{item.kmDriven}</td>
                            <td>{item.price}</td>
                            <td>{item.color}</td>
                            <td>{item.date}</td>
                            <td>{item.city}</td>
                            <td><button className="btn btn-warning list-btn" 
                                      onClick={()=>{ history.push('/Sellcar',{item:item})}}
                            > Edit </button></td>
                            <td><button className="btn btn-danger list-btn" 
                                      onClick={()=>{ history.push('/deleteCar',{item:item})}}
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

export default CarDetails