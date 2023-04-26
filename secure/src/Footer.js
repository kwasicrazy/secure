import React from 'react'
import Card from './Card'
import logo from './img/love.svg'

const Footer = (props) => {
  console.log(props);
  return (
    <div>
        <Card />
        <hr></hr>
        <div className='dev'>
          <h3>{props.boy}</h3>
        <h3>Made with<img src={logo} alt='logo' height='30px' width='30px' /></h3> 
        </div>
    </div>
  )
}

export default Footer