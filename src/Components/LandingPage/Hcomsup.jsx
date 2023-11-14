import React from 'react'
import logo from '../Images/homepage/Group 5.png'
import logo2 from '../Images/homepage/Group 7.png'
import logo3 from '../Images/homepage/Group 6.png'
import logo4 from '../Images/homepage/Group 8.png'
function Hcomsup() {
  return (
    <div className='font-raleway font-semibold flex flex-col w-[100%] h-[100vh]  justify-center items-start gap-[40px] p-[40px]'>
      <div className='flex items-center justify-center gap-[10px] border-2 border-solid border-[#FEF3C7] w-[55vw] py-3 rounded-[10px]'>
        <img src={logo} alt="" />
        <h3 className='text-[12px] font-poppins'>Community Support</h3>
      </div>
      <div className='flex items-center gap-[10px] border-2 border-solid border-[#F8E7F8] w-[70vw] py-3 rounded-[10px] justify-center'>
        <img src={logo2} alt="" />
        <h3 className='text-[12px] font-poppins '>Flexible Working Environment</h3>
      </div>
      <div className='flex items-center gap-[10px] border-2 border-solid border-[#F8E7F8]  w-[58vw] py-3 rounded-[10px] justify-center'>
        <img src={logo3} alt="" />
        <h3 className='text-[12px] font-poppins'>Collaborate With Folks</h3>
      </div>
      <div className='flex items-center gap-[10px] border-2 border-solid border-[#FEF3C7] w-[45vw] py-3 rounded-[10px] justify-center'>
        <img src={logo4} alt="" />
        <h3 className='text-[12px] font-poppins'>24/7 Support</h3>
      </div>
    </div>
  )
}

export default Hcomsup
