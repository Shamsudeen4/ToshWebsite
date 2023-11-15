import React from 'react'
import first from '../Images/homepage/Matmos logo.png'
import second from '../Images/homepage/ALPHABILLS STRAIGHT.png'
import third from '../Images/homepage/adalo.png'
function Logostab() {
  return (
    <div className='2xl:flex 2xl:items-center 2xl:justify-center 2xl:gap-24 bg-[#FEF9E3] 2xl:py-8 sm:flex sm:py-7 sm:items-center sm:justify-center sm:gap-6'>
      <img src={first} alt="" />
      <img src={second} alt="" />
      <img className='sm:hidden' src={third} alt="" />
      <img className='sm:hidden' src={first} alt="" />
      <img className='sm:hidden' src={second} alt="" />
    </div>
  )
}

export default Logostab
