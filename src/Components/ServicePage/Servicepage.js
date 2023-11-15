import React from 'react'
import Benefit from '../ServicePage/Benefit'
import Reviews from '../ServicePage/Reviews'
import Home from '../ServicePage/Home'
import Allservices from '../ServicePage/Allservices'
import Contactus from '../ServicePage/Contactus'

function Servicepage() {
  return (
    <div>
        <Home/>
        <Benefit/>
        <Allservices/>
        <Reviews/>
        <Contactus/>
    </div>
  )
}

export default Servicepage