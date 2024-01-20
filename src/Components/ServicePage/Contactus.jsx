import React from 'react'
import pat1 from '../Images/servicepage/Matmos logo.png'
import pat2 from '../Images/servicepage/ALPHABILLS STRAIGHT.png'
import pat3 from '../Images/servicepage/adalo.png'


function Contactus() {
  return (
    <div className='flex font-raleway items-center flex-col justify-center gap-12 py-8'>
      <div className='flex flex-col gap-5  sm:items-center sm:gap-8'>
        <h3 className='font-bold'>Our Trusted Clients</h3>
        <div className='gap-[100px] flex items-center sm:gap-[30px] '>
            <img src={pat1} alt="" />
            <img src={pat2} alt="" />
            <img className=' sm:hidden' src={pat3} alt="" />
            <img src={pat1} className=' sm:hidden' alt="" />
            <img src={pat2} className=' sm:hidden' alt="" />
        </div>
      </div>
    <div className='bg-[#C12DC1] lg:w-[60%] py-8 rounded-xl text-center flex-col gap-5 flex items-center sm:gap-[30px]'>
      <h1 className='font-bold text-white'>LIKE TO WORK WITH US?</h1>
      <p className='lg:w-[50%] text-white justify-center '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet.
        </p>
        <button className='bg-white p-4 w-[10vw] sm:w-[50vw]  font-bold rounded-xl text-[#C12DC1] border-[2px] border-[white] hover:text-[white] hover:bg-transparent transition duration-300'>Contact Us</button>
    </div>
  </div>
  )
}

export default Contactus