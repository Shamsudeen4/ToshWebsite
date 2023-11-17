import React from 'react'
import Benefit from '../ServicePage/Benefit'
import Reviews from '../ServicePage/Reviews'
import Home from '../ServicePage/Home'
import Allservices from '../ServicePage/Allservices'
import Contactus from '../ServicePage/Contactus'
import NavBar from '../NavBar'
import Footer from '../Footer'

function Servicepage() {
  return (
    <div>
        <NavBar/>
        <Home/>
        <Benefit/>
        <Allservices/>
        <Reviews/>
        <Contactus/>
        <Footer/>
    </div>
  )
}

export default Servicepage