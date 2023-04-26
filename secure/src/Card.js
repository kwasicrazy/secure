import React from 'react'
import logo1 from './img/stripe.svg';
import logo2 from './img/paylib.svg';
import logo3 from './img/cheque.svg';
import logo4 from './img/bitpay.svg';


const Card = () => {
  return (
    <div className='Card-list'>
         <div className='Card'>
            <img className='footer-img'src={logo1} alt='logo' height={30} width={30}/>
            <div>
            <p style={{marginTop:0, marginBottom:0}}>FAST & SECURED</p>
            <p style={{marginTop:0}}>ZERO CHARGES</p>
            </div>
        </div>
        <div className='Card'>
            <img className='footer-img' src={logo2} alt='logo' height={30} width={30}/>
            <div>
            <p style={{marginTop:0, marginBottom:0}}>FAST & SECURED</p>
            <p style={{marginTop:0}}>ZERO CHARGES</p>
            </div>
        </div>
        <div className='Card'>
            <img className='footer-img' src={logo3} alt='logo' height={30} width={30}/>
            <div>
            <p style={{marginTop:0, marginBottom:0}}>FAST & SECURED</p>
            <p style={{marginTop:0}}>ZERO CHARGES</p>
            </div>
        </div>
        <div className='Card'>
            <img className='footer-img' src={logo4} alt='logo' height={30} width={30}/>
            <div>
            <p style={{marginTop:0, marginBottom:0}}>FAST & SECURED</p>
            <p style={{marginTop:0}}>ZERO CHARGES</p>
            </div>
        </div>
    </div>
    
  )
}

export default Card