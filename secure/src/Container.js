import React from 'react'
import Footer from './Footer'
import Hero from './Hero'
import Navbar from './Navbar'

const Container = () => {
  return (
    <div className='Container'>
        <Navbar />
        <Hero got='I got it' />
        <Footer  boy="am just trying"/>
    </div>
  )
}

export default Container