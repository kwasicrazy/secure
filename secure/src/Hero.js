import React from 'react'
import logo from './img/method.svg'
import lock from './img/lock1.svg'

const Hero = (props) => {
  console.log(props);
  return (
    <div  className='hero'>
        <div className='hero-text'>
            <h1 style={{marginBottom:'0px'}}><span>SECURED</span> PAYMENT</h1>
            <h1 style={{marginTop:'0px'}}>METHOD EVER</h1>
            <p>Transfering money from one account to any other account has never been easier</p>
            <div className='start'>
                <button style={{marginRight:'10px'}} className='start-btn'>GET STARTED</button>
                <a href='H'>CONTACT US</a>
                <h3>{props.got}</h3>
            </div>
        </div>
        <div className='hero-img' style={{ position: 'relative', display: 'flex' }}>
  <img style={{marginBottom:'20px', marginTop:'20px'}} className='img' src={logo} alt='logo' height={600} width={400} />
  <div style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)' }}>
    <button style={{display:'flex', borderRadius:'20px', border:'none', backgroundColor:'black', color:'yellow', padding:'5px'}} className='img-btn'><img src={lock} alt='lock' height={30} width={30}/><div>SECURED PAYMENT</div></button>
        </div>
      </div>

    </div>
  )
}

export default Hero