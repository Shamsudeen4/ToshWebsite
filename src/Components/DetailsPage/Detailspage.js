import React from 'react'
import Home from './Home'
import Course from './Course'
import Learning from './Learning'
import Contactus from './Contactus'
import NavBar from '../NavBar'
import Footer from '../Footer'

function Detailspage() {
  return (
    <div>
        <NavBar courses="active"/>
        <Home/>
        <Course/>
        <Learning/>
        <Contactus/>
        <Footer/>
    </div>
  )
}

export default Detailspage