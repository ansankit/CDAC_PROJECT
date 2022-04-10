
import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import './NavBar2.css';


const Navbar2 = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

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
        <div>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/Adminhome' className='navbar-logo' onClick={closeMobileMenu}>
                        HMDC<i className='fas fa-car' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                    <li className='nav-item'>
                        <Link to='/getusers' className='nav-links' onClick={closeMobileMenu}>Get Users </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/userkyc' className='nav-links' onClick={closeMobileMenu}>User KYC </Link>
                    </li>

                    <li className='nav-item'>
                    <Link to='/getallmodel' className='nav-links' onClick={closeMobileMenu}>Models</Link>
                    </li>

                    <li className='nav-item'>
                    <Link to='/getallcompany' className='nav-links' onClick={closeMobileMenu}>Companies</Link>
                    </li>

                    <li className='nav-item'>
                    <Link to='/addcompany' className='nav-links' onClick={closeMobileMenu}>Add Company</Link>
                    </li>

                    <li className='nav-item'>
                    <Link to='/addmodel' className='nav-links' onClick={closeMobileMenu}>Add Model</Link>
                    </li>

                    
                    <li className='nav-item'>
                    <Link to='/logout' className='nav-links' onClick={closeMobileMenu}>Logout</Link>
                    </li>

                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar2