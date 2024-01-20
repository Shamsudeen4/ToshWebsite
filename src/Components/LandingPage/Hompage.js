import React from 'react'
import NavBar from '../NavBar'

import Footer from '../Footer'
import Logostabn from './Logostabn'
import HomeAbout from './HomeAbout'
import Hservices from './Hservices'

import Hreviews from './Hreviews'

import Hbecome2 from './Hbecome2'

import Ndfooter from '../Ndfooter'
// import Homenew from './Homenew'
// import HomeTech from './HomeTech'
import Hmission from './Hmission'
import Homepage from './Homepage'
import HACourses from './HACourses'
import { Helmet } from 'react-helmet'
function Hompage() {
  return (
    <div>
      <Helmet>  
        <title>Home | Toshconsult Technologies Inc</title>  
        
        <meta name="description" content="Tutorial for React Helmet" />  
        <meta name="theme-color" content="#E6E6FA" />  
      </Helmet>  
    <div className='sm:hidden relative w-[100%] h-[100vh] flex flex-col'>
  
      <NavBar home='active' />
      {/* <Homenew/> */}
      <Homepage/>
      <Logostabn />
      <HomeAbout/>
      <Hservices/>
      <HACourses/>
      <Hmission/>
      <Hreviews/>
      <Hbecome2/>
      <Footer/>
   
    </div>
    <div className='lg:hidden  w-[100%] h-[100vh] flex flex-col'>
      <NavBar/>
      {/* <Homenew/> */}
      <Homepage/>
      <Logostabn />
      <HomeAbout/>
      <Hservices/>
      <HACourses/>
      <Hmission/>
      <Hreviews/>
      <Hbecome2/>
      <Ndfooter/>
    </div>
    </div>
  )
}

export default Hompage
