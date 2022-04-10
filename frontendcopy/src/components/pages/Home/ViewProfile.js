
import NavBar1 from '../NavBar/Navabar1/NavBar1'
import React, { Component, useContext, useEffect } from 'react'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import './ViewProfile.css'
import UserContext from './../../Session/Session';
const ViewProfile = () => {
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
    const { value, setValue } = useContext(UserContext)

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

    return (
        <>
            <NavBar1 />
            <center className="row container d-flex justify-content-center">
                <div className="col-xl-6 col-md-12">
                    <div className="card user-card-full">
                        <div style={{ display: 'flex' }}>
                            <div className="col-sm-4 bg-c-lite-green user-profile">
                                <div className="card-block text-center text-white">
                                    <div className="m-b-25">
                                        {" "}
                                        <img
                                            src="https://img.icons8.com/bubbles/100/000000/user.png"
                                            className="img-radius"
                                            alt="pic"
                                        />{" "}
                                    </div>
                                    <h6 className="f-w-600">
                                        {firstName} {lastName}
                                    </h6>
                                </div>

                            </div>
                            <table className="table-margin">
                                <tr><td>Email</td><td>{email}</td></tr>
                                <tr><td>Phone</td><td>{mobileNo}</td></tr>
                                <tr><td>Address</td><td>{address}</td></tr>
                                <tr><td>Pincode</td><td>{pincode}</td></tr>
                                <tr><td>City</td><td>{city}</td></tr>
                            </table>
                        </div>
                    </div>
                </div>
            </center>
        </>
    );
};

export default ViewProfile;
