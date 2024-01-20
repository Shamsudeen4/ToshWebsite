import React from 'react'
import first from '../Images/coursepage/Matmos logo.png'
import second from '../Images/coursepage/ALPHABILLS STRAIGHT.png'
import third from '../Images/coursepage/adalo.png'
import fourth from '../Images/coursepage/airrand.png'
import fifth from '../Images/coursepage/Frame 4.png'
function Logostabn() {
  return (
    <div className='lg:flex lg:items-center lg:justify-center lg:gap-24 bg-[#FEF9E3] lg:py-8 sm:flex sm:py-7 sm:items-center sm:justify-center sm:gap-6'>
      <img src={first} alt="" />
      <img src={second} alt="" />
      <img className='sm:hidden' src={third} alt="" />
      <img className='sm:hidden w-[11vw]' src={fourth} alt="" />
      <img className='sm:hidden' src={fifth} alt="" />
    </div>
  )
}

export default Logostabn
