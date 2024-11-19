import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/Want a Car with office cell.jpg';

import './App.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='navbar'>
      <div className='logo-container'>
        <img className='logo' src={logo} alt='Company Logo' />
      </div>
      <div className='hamburger' onClick={toggleMenu}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link to='/' className='no-highlight'>Home</Link></li>
        <li><Link to='BookingAppointment' className='no-highlight'>Book an Appointment</Link></li>
        <li><Link to='/about' className='no-highlight'>About</Link></li>
        <li><Link to='/contact' className='no-highlight'>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
