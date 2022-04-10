





import React,{ useState, useEffect,useContext } from 'react'
import './Kyc.css'
import UserContext from './../../Session/Session';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import NavBar1 from './../NavBar/Navabar1/NavBar1';
//need userContext;
const Kyc = () => {

  const {value,setValue}=useContext(UserContext)
  const url = 'http://localhost:8080'
  const [idcard, setIdcard] = useState('')
  const [rcbook, setRcbook] = useState('')
  const [carinsurance, setCarIns] = useState('')
  const [drivinglicense, setDrivingLis] = useState('')
  const [carnumber, setCarno] = useState('')
  const history = useHistory();

  const postKyc = () => {
    
       const data = new FormData()
       data.append('idcard', idcard)
       data.append('rcbook',rcbook)
       data.append('carinsurance', carinsurance)
       data.append('drivinglicense', drivinglicense);
       data.append('carnumber', carnumber);
      
       console.log(value.data)
 
       // http://localhost:8080/postcar
 
       axios.post(url + '/postkyc', data).then((response) => {
         const result = response.data
         if (result.status === 'success') {
           alert('Car Added Sucesssfully')
           history.push('/CustHome')
         }
         else {
           alert('Error While Adding Data')
         }
       })

   }

  return(

    <div >
      <NavBar1 />
      <div className="bg-colo3">
        <center><h2>KYC Page</h2></center>
        <br></br><br></br>
        <div className="container1">
          <th>
            Choose Your Validation ID:
            <tr className="form-control">
              <select>
                <option value="Aadhar Card">Aadhar</option>
                <option value="PAN Card">PAN Card</option>
                <option value="Ration Card">Ration Card</option>
                <option value="Passport">Passport</option>
              </select>&nbsp;&nbsp;&nbsp;&nbsp;
              <input 
                  onChange={(event) => {
                    setIdcard(event.target.files[0])
                  }}
                  type="file" />
              
              <br></br><br></br>
            </tr>
          </th><br></br>
          <th>
            Upload Vehicle RC:
            <tr  className="form-control">
              <input 
                type="file"
                onChange={(event) => {
                  setRcbook(event.target.files[0])
                }}
              />  
             
            </tr>
          </th><br></br>
          <th  >
            Upload Vehicle Insurance:
            <tr className="form-control">
            <input 
                type="file"
                onChange={(event) => {
                  setCarIns(event.target.files[0])
                }}
              />
            </tr>
          </th><br></br>
          <th  >
            Upload Driving License:
            <tr className="form-control">
            <input 
                type="file"
                onChange={(event) => {
                  setDrivingLis(event.target.files[0])
                }}
              />  
            </tr>
          </th><br/>
          <th  >
            Car Number:
            <tr className="form-control">
            <input 
                type="text"
                onChange={(event) => {
                  setCarno(event.target.value)
                }}
              />  
            </tr>
          </th>
        </div>
        <center><button onClick={postKyc} className="btn btn-success input-maargin">SUBMIT</button></center>
      </div>
    </div>

  );
}

export default Kyc