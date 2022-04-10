import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../Session/Session';
import SignIn from './../SignIn/SignIn';

const Logout = () => {

   
    const history = useHistory();
    const {value,setValue} = useContext(UserContext)
    
    return (
        <center className="bg-colo1">
            
            <h1>Thank You </h1>
            <h3>Visit Again..........</h3>
            <a href="/"><button className='btn btn-success' >Home</button></a>
        </center>
    )
    setValue(null)
}


export default Logout
