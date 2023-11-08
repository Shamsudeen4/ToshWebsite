import React from 'react'
import NavBar from '../NavBar'
import Homepage from './Homepage'
import Footer from '../Footer'
import Logostab from './Logostab'
function Hompage() {
  return (
    <div className='relative w-[100%] h-[100vh] flex flex-col'>
      <NavBar />
      <Homepage/>
      <Logostab/>
      <Footer/>
    </div>
  )
}

export default Hompage
