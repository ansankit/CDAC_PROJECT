import axios from 'axios';
import { useState } from 'react'
import './EditProfile.css'
import { Link, useHistory } from 'react-router-dom';
import React, { Component ,useContext, useEffect} from 'react'
import NavBar1 from './../NavBar/Navabar1/NavBar1'
import UserContext from './../../Session/Session';

const EditProfile = () => {
  // define the state
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [mobileNo, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [pincode, setPincode] = useState('')
  const [city, setcity] = useState('')
  const [security, setSecurity] = useState('')
  const history = useHistory();
  const {value,setValue}=useContext(UserContext)

  useEffect(() => {
    setFirstName(value.data.firstName)
    setLastName(value.data.lastName)
    setEmail(value.data.email)
    setPhone(value.data.mobileNo)
    setPassword(value.data.password)
    setAddress(value.data.address)
    setPincode(value.data.pincode)
    setcity(value.data.city)
    setSecurity(value.data.security)
  }, []);



              const editProfile = () => {
              if (firstName.length === 0) {
                alert('Enter First Name')
              }
              else if (lastName.length === 0) {
                alert('Enter Last Name')
              }
              else if (mobileNo.length === 0) {
                alert('Enter mobile')
              }
              else if (email.length === 0) {
                alert('Enter email ')
              }
              else if (password.length === 0) {
                alert('Enter password')
              }
              else if (address.length === 0) {
                alert('Enter address')
              }
              else if (pincode.length === 0) {
                alert('Enter pincode')
              }
              else if (city.length === 0) {
                alert('Enter city')
              }
              else if (security.length === 0) {
                alert('Enter security')
              }
              else {
                const data = new FormData()
                data.append('firstName', firstName)
                data.append('lastName', lastName);
                data.append('mobileNo', mobileNo);
                data.append('email', email);
                data.append('password', password);
                data.append('address', address);
                data.append('pincode', pincode);
                data.append('city', city);
                data.append('security', security);
                const url = 'http://localhost:8080'
            
                axios.put(url + '/editprofile', data).then((response) => {
                  const result = response.data
                  if (result.status === 'success') {
                    alert('Data Added Sucesssfully')
                    history.push('/signin')
                  }
                  else {
                    alert('Error While Adding Data')
                  }
                })
              }
            }



  return (
    <>
      <NavBar1 />
      <div  className=" bg-colo2">
        <div >
          <h1>Edit Profile</h1>
          <div>
            <div className="col-md-3 ">
              <label>First Name</label>
              <input
                onChange={(event) => {
                  // updating the state with user entered value
                  setFirstName(event.target.value)
                }}
                placeholder="enter your first name"
                className="form-control input-maargin"
                type="text"
                value={firstName}
              />
            </div>
            <div className="col-md-3 ">
              <label>Last Name</label>
              <input
                onChange={(event) => {
                  // updating the state with user entered value
                  setLastName(event.target.value)
                }}
                placeholder="enter your last name"
                className="form-control input-maargin"
                type="text"
                value={lastName}
              />
            </div>
            <div className="col-md-3 ">
              <label>Mobile</label>
              <input
                onChange={(event) => {
                  // updating the state with user entered value
                  setPhone(event.target.value)
                }}
                placeholder="enter your mobile number"
                className="form-control input-maargin"
                type="text"
                value={mobileNo}
              />
            </div>
            <div className="col-md-3 ">
              <label>Email</label>
              <input
                onChange={(event) => {
                  // updating the state with user entered value
                  setEmail(event.target.value)
                }}
                placeholder="enter your email"
                className="form-control input-maargin"
                type="email"
                value={email}
              />
            </div>
            <div className="col-md-3 ">
              <label>Password</label>
              <input
                onChange={(event) => {
                  // updating the state with user entered value
                  setPassword(event.target.value)
                }}
                placeholder="enter your password"
                className="form-control input-maargin"
                type="password"
                value={password}
              />
            </div>
            <div className="col-md-3 ">
              <label>Address</label>
              <input
                onChange={(event) => {
                  setAddress(event.target.value)
                }}
                placeholder="enter your area"
                className="form-control input-maargin"
                type="text"
                value={address}
              />
            </div>
            <div className="col-md-3 ">
              <label>City</label>
              <input
                onChange={(event) => {
                  setcity(event.target.value)
                }}
                placeholder="enter your city"
                className="form-control input-maargin"
                type="text"
                value={city}
              />
            </div>
            <div className="col-md-3 ">
              <label>pincode</label>
              <input
                onChange={(event) => {
                  setPincode(event.target.value)
                }}
                placeholder="enter your pincode"
                className="form-control input-maargin"
                type="text"
                value={pincode}
              />
            </div>
            <div className="col-md-3 ">
              <label>Security</label>
              <input
                onChange={(event) => {
                  setSecurity(event.target.value)
                }}
                placeholder="enter your security"
                className="form-control input-maargin"
                type="text"
                value={security}
              />
            </div>
            <div className="col-md-3 ">
              <button onClick={editProfile} className="btn btn-success input-maargin">
                Update
              </button>
              <Link className="nav-link" to="/signin">already have an account</Link>
            </div>
            
          </div>
        </div>
      </div>
    </>

  )
}



export default EditProfile
