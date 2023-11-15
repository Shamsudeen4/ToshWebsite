import React from 'react'
import NavBar from '../NavBar'
import Homepage from './Homepage'
import Footer from '../Footer'
import Logostab from './Logostab'
import HomeAbout from './HomeAbout'
import Hservices from './Hservices'
import HACourses from './HACourses'
import Hreviews from './Hreviews'
import Hbecome from './Hbecome'

import Ndfooter from '../Ndfooter'
function Hompage() {
  return (
    <div>
    <div className='sm:hidden relative w-[100%] h-[100vh] flex flex-col'>
      <NavBar />
      <Homepage/>
      <Logostab />
      <HomeAbout/>
      <Hservices/>
      <HACourses/>
      <Hreviews/>
      <Hbecome/>
      <Footer/>
    </div>
    <div className='2xl:hidden  w-[100%] h-[100vh] flex flex-col'>
      <NavBar/>
      <Homepage/>
      <Logostab />
      <HomeAbout/>
      <Hservices/>
      <HACourses/>
      <Hbecome/>
      <Hreviews/>
      
      <Ndfooter/>
    </div>
    </div>
  )
}

export default Hompage
