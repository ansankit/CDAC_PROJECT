
import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useState, useEffect,useContext } from 'react'
import axios from 'axios';
import './Sellcar.css'
import NavBar1 from './../NavBar/Navabar1/NavBar1'
import CustHome from './../CustomerHome/CustHome';
import GetMyCars from './GetMyCars';
import UserContext from './../../Session/Session';

const Sellcar = () => {

  const {value,setValue}=useContext(UserContext)
  const url = 'http://localhost:8080'
  const [companyId, setCompanyId] = useState('')
  const [userId, setUserId] = useState('')
  const [modelId, setModelId] = useState('')
  const [fuelType, setFuelType] = useState('')
  const [kmDriven, setKmDriven] = useState('')
  const [price, setPrice] = useState('')
  const [color, setColor] = useState('')
  const [date, setDate] = useState('')
  const [city, setCity] = useState('')
  const [carImage, setCarImage] = useState('')

  const [companies, setCompanies] = useState([]);
  const [models, setModels] = useState([]);

  useEffect(() => {
    loadCompanies();
  }, []);
 
  //get api on load
  const loadCompanies = async () => {
    const result = await axios.get(url+'/getcompanies');
    setCompanies(result.data.data);
    setUserId(value.data.userId)
    console.log(result.data.userId);
  };

   //get api on change
  const loadModels = async (e) => {
    const cid=e.target.value
    setCompanyId(cid)
    const result = await axios.get(url+'/getmodels');
    setModels(result.data.data);
    console.log(result.data);
  };

  const history = useHistory();

  const sellCar = () => {
   if (fuelType.length === 0) {
      alert('Enter Fuel Type')
    }
    else if (kmDriven.length === 0) {
      alert('Enter Kms driven ')
    }
    else if (price.length === 0) {
      alert('Enter Price')
    }
    else if (color.length === 0) {
      alert('Enter Car Color')
    }
    else if (date.length === 0) {
      alert('Enter Date')
    }
    else if (city.length === 0) {
      alert('Enter city')
    }
    else if (carImage.length === 0) {
      alert('Enter state')
    }
    else {
      const data = new FormData()
      data.append('companyId', companyId)
      data.append('userId',userId)
      data.append('modelId', modelId)
      data.append('fuelType', fuelType);
      data.append('price', price);
      data.append('color', color);
      data.append('date', date);
      data.append('city', city);
      data.append('kmDriven', kmDriven);
      data.append('carImage', carImage);
      console.log(value.data)

      // http://localhost:8080/postcar

      axios.post(url + '/postcar', data).then((response) => {
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
  }






  return (
    <>
      <NavBar1 />
      {/* <GetMyCars /> */}
      <div className=" bg-colo3">
        <h1>SellCar Page</h1>
        <div>
          <div className= "col-md-3 ">
            <label >Select Companies</label>
              <select 
                onChange={loadModels}    
                className="form-control">
                {companies.map((company, index ) => (
                  <option value={company.id}>{company.name}</option>
                ))}
              </select>
          </div>

          

          <div className="col-md-3 ">
            <label >Select Models</label>
              <select 
                onChange={(event) => {
                  setModelId(event.target.value)
                }}
                className="form-control"  >
                {models.map((model, index) => (
                  <option value={model.modelId}>{model.modelname}</option>
                ))}
              </select>
          </div>

            <div className="col-md-3 ">
            <label>Fuel Type</label>
            

                <select 
                onChange={(event) => {
                  // updating the state with user entered value
                  setFuelType(event.target.value)
                }}
                className="form-control"  >
                <option value='Petrol'>Petrol</option>
                <option value='Diesel'>Diesel</option>
                <option value='CNG'>CNG</option>
                <option value='Electric'>Electric</option>
              </select>

          </div>       
      
          {/* <div className="col-md-3 ">
            <label>Fuel Type</label>
            <input
              onChange={(event) => {
                // updating the state with user entered value
                setFuelType(event.target.value)
              }}
              placeholder="Petrol/Diesel/CNG"
              className="form-control input-maargin"
              type="text"
            />
          </div> */}

          <div className="col-md-3">
            <label>Price</label>
            <input
              onChange={(event) => {
                // updating the state with user entered value
                setPrice(event.target.value)
              }}
              placeholder="Enter Price"
              className="form-control input-maargin"
              type="number"
            />

          </div>
          <div className="col-md-3 ">
            <label>KMs Driven</label>
            <input
              onChange={(event) => {
                // updating the state with user entered value
                setKmDriven(event.target.value)
              }}
              placeholder="enter KMs driven"
              className="form-control input-maargin"
              type="number"
            />
          </div>
          <div className="col-md-3 ">
            <label>Color</label>
            <input
              onChange={(event) => {
                // updating the state with user entered value
                setColor(event.target.value)
              }}
              placeholder="enter vehicle color"
              className="form-control input-maargin"
              type="text"
            />
          </div>
          <div className="col-md-3 ">
            <label>City</label>
            <input
              onChange={(event) => {
                // updating the state with user entered value
                setCity(event.target.value)
              }}
              placeholder="Enter City"
              className="form-control input-maargin"
              type="text"
            />
          </div>
          <div className="col-md-3 ">
            <label>Date</label>
            <input
              onChange={(event) => {
                setDate(event.target.value)
              }}

              className="form-control input-maargin"
              type="Date"
            />
          </div>

          <div className="col-md-3 ">
            <label>Car Image</label>
            <input
              onChange={(event) => {
                setCarImage(event.target.files[0])
              }}
              className="form-control input-maargin"
              type="file"
            />
          </div>
         
            
          
          <div className="col-md-3 ">
            <div  className="btn btn-warning input-maargin">
              <Link to='/kyc' >Upload Kyc </Link>
            </div>
            <button onClick={sellCar} className="btn btn-success input-maargin">
              Submit Car
            </button>
          </div>
        </div>
      </div>
    </>

  )
}

export default Sellcar
