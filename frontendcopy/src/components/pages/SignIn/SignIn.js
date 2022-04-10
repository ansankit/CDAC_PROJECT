

import './SignIn.css';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UserContext from '../../Session/Session';
import Navbar from './../NavBar/Navbar';
import GetUsers from './../AdminHome/GetUsers';



 




const SignIn=()=>{
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { value, setValue } = useContext(UserContext)
  const history = useHistory(); 
  

  const signinUser = () => {
    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
      alert("Enter valid email pattern like 'abc@gmail.com'")
      return
    }
    if (email.length === 0) {
      alert('please enter email')
    } else if (password.length === 0) {
      alert('please enter password')
    } else {
      
      const data = new FormData()


      data.append('email', email);
      data.append('password', password);

      
      const url = 'http://localhost:8080'


      // http://localhost:8080/signin
      axios.post(url + '/login', data).then((response) => {

        const result = response.data

        
        if (result.status === 'success') {
          setValue(result)

          alert('Login Succesfull')
          if (result.data.role === 'admin') {
            history.push('/AdminHome')
          }
          else {
            history.push('/CustHome')
          }
        }
        else {
          alert('Login Filed, Email or password incorrect')
        }
      })

    }
  }


  return(
          <div id="loginform" >
            
            <h2 id="headerTitle">Login</h2>
            <div>
                <div className="row">
                  <label>Email</label>
                  <input 
                      type="text" 
                      placeholder="Enter your username"
                      onChange={(event) => {
                        setEmail(event.target.value)
                      }}
                      placeholder="enter your email"
                  />
                </div> 
                <div className="row">
                  <label>Password</label>
                  <input  
                      type="password" 
                      placeholder="Enter your password"
                      onChange={(event) => {
                        setPassword(event.target.value)
                      }}
                      placeholder="enter your password"
                      
                  />
                </div> 
                <div id="button" className="row">
                  <button onClick={signinUser}>Login</button>
                </div>
                <Link className="row" to="/signup">don't have an account</Link>
                <Link className="row" to="/ChangePassword">forgot password ?</Link>
            </div>
          
          </div>
  )

}
export default SignIn


