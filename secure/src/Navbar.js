import React from 'react'
import Dropdown from './Dropdown'
import logo from './img/lock1.svg'

const Navbar = () => {
  return (
    <div className='nav'>
       <h1><img src={logo} alt='logo' height='30px' width='30px'/>S<span>E</span>C<span>U</span>R<span>E</span></h1>
       <div className='nav-links'>
        <a href='H'>HOME</a>
        <a href='A'>ABOUT US</a>
        <a href='S'>SECURE</a>
        <Dropdown />
        <a href='H'>CONTACT US</a>
        <button className='start-btn'>GET STARTED</button>
        </div>
    </div>
  )
}

export default Navbar