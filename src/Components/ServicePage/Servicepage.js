import React from 'react'
import Benefit from '../ServicePage/Benefit'
import Reviews from '../ServicePage/Reviews'
import Home from '../ServicePage/Home'
import Allservices from '../ServicePage/Allservices'
import Contactus from '../ServicePage/Contactus'
import NavBar from '../NavBar'
import Footer from '../Footer'
import { Helmet } from 'react-helmet'

function Servicepage() {
  return (
    <div>
      <Helmet>  
        <title>Services | Toshconsult Technologies Inc</title>  
        
        <meta name="description" content="Tutorial for React Helmet" />  
        <meta name="theme-color" content="#E6E6FA" />  
      </Helmet>  
        <NavBar services="active"/>
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