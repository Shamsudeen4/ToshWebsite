import React from 'react'
import pat1 from '../Images/servicepage/Matmos logo.png'
import pat2 from '../Images/servicepage/ALPHABILLS STRAIGHT.png'
import pat3 from '../Images/servicepage/adalo.png'


function Contactus() {
  return (
    <div className='flex items-center flex-col justify-center gap-12 py-8'>
      <div className='flex flex-col gap-5 ml-[%]'>
        <h3 className='font-bold'>Our Trusted Clients</h3>
        <div className='gap-7 lg:flex items-center'>
            <img src={pat1} alt="" />
            <img src={pat2} alt="" />
            <img src={pat3} alt="" />
            <img src={pat1} alt="" />
            <img src={pat2} alt="" />
        </div>
      </div>
    <div className='bg-[#C12DC1] lg:w-[60%] py-8 rounded-xl text-center lg:flex-col gap-5 lg:flex'>
      <h1 className='font-bold text-white'>LIKE TO WORK WITH US?</h1>
      <p className='lg:w-[50%] text-white justify-center lg:relative left-[25%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet.
        </p>
        <button className='bg-white p-4 lg:w-[15%] lg:relative left-[40%] font-bold rounded-xl text-[#C12DC1]'>Contact Us</button>
    </div>
  </div>
  )
}

export default Contactus