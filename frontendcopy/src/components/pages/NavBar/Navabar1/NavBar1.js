import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../../Session/Session';
import './NavBar1.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Logout from './../../Logout/Logout';




function NavBar1() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const { value, setValue } = useContext(UserContext)
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/CustHome' className='navbar-logo' onClick={closeMobileMenu}>
          {value.data.firstName }{value.data.lastName }
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

            <li className='nav-item'>
              <Link to='/Sellcar' className='nav-links' onClick={closeMobileMenu}>
                Sell Car
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/Buycar' className='nav-links' onClick={closeMobileMenu}>Buy Car</Link>
            </li>

            <li className='nav-item'>
              <Link to='/EditProfile' className='nav-links' onClick={closeMobileMenu}>Edit Profile</Link>
            </li>

            <li className='nav-item'>
              <Link to='/viewProfile' className='nav-links' onClick={closeMobileMenu}>View Profile</Link>
            </li>

            <li className='nav-item'>
              <Link to='/getmycars' className='nav-links' onClick={closeMobileMenu}>List My Car</Link>
            </li>

            <li className='nav-item'>
              <Link to='/logout' className='nav-links' onClick={closeMobileMenu}>Logout</Link>
            </li>

          
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar1;