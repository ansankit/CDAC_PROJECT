import React,{  useContext } from 'react'
import NavBar1 from '../NavBar/Navabar1/NavBar1'
import CardsHome from './CarListCard/CardsHome'
import UserContext from './../../Session/Session';
import './Buycar.css'

const Sort=()=>{
    return (
        <div className="sort-bar">
            this is sort list
        </div>
    )
}


const Buycar = () => {
    const {value,setValue}=useContext(UserContext)
    return (
        <>
                <NavBar1 />
                <div   className="bg-colo3">
                    {/* <Sort/> */}
                    <CardsHome />
                </div>
        </>
    )
}
export default Buycar
