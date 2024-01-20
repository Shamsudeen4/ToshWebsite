import React from 'react'
import a from '../Images/frontnbackend/Group 24.png'
import b from '../Images/frontnbackend/Group 29 (1).png'
import c from '../Images/frontnbackend/Group 26.png'
import d from '../Images/frontnbackend/Group 28.png'
import e from '../Images/frontnbackend/Group 27.png'
function Fifth() {
  return (
    <div className=' flex flex-col w-[100%] items-center '>
      <div className=' flex flex-col gap-[50px] sm:items-center '>
        <div className='flex flex-col items-center text-center gap-4 '>
            <h1 className=' font-poppins text-[50px] font-bold w-[44vw] leading-[55px] sm:w-[80vw] sm:leading-[32px] sm:text-[30px]'>Enrich your business with our expert software solutions</h1>
            <h4 className=' font-euclid w-[44vw] text-[#000000B2] sm:w-[80vw] '>At Toshconsult, we are committed to shaping your tech 
                skills and empowering your career. Explore the unique 
                benefits that set us apart and pave the way for your 
                success.
            </h4>
        </div>
        <div className=' bg-[#F8E7F8] flex flex-col gap-[30px] items-center py-[9%] rounded-[30px] w-[70vw] sm:w-[90%] px-[8%]'>
                <div className=' flex gap-[30px] sm:flex-col'>
                    <div className='flex items-center gap-[15px] bg-[white] px-[30px] py-[20px] rounded-[30px]'>
                        <img src={a} alt="" />
                        <h4 className=' font-evolventa text-[20px] font-semibold'>Web Development</h4>
                    </div>
                    <div className='flex items-center gap-[15px] bg-[white] px-[20px] py-[20px] rounded-[30px]'>
                        <img src={b} alt="" />
                        <h4 className=' font-evolventa text-[20px] font-semibold'>Digital Marketing</h4>
                    </div>
                    <div className='flex items-center gap-[15px] bg-[white] px-[30px] py-[20px] rounded-[30px]'>
                        <img src={c} alt="" />
                        <h4 className=' font-evolventa text-[20px] font-semibold'>UI/UX Design</h4>
                    </div>
                   
                </div>
                <div className='flex gap-[30px] sm:flex-col items-center'>
                    <div className='flex items-center gap-[15px] bg-[white] px-[30px] py-[20px] rounded-[30px]'>
                        <img src={d} alt="" />
                        <h4 className=' font-evolventa text-[20px] font-semibold '>Software Development</h4>
                    </div>
                    <div className='flex items-center gap-[15px] bg-[white] px-[30px] py-[20px] rounded-[30px]'>
                        <img src={e} alt="" />
                        <h4 className=' font-evolventa text-[20px] font-semibold'>Mobile App Development</h4>
                    </div>
                    <div className='flex items-center gap-[15px] bg-[black] border-[1px] border-[black] hover:bg-transparent hover:text-[black] duration-500 text-[white] px-[20px] py-[20px] rounded-[30px]'>
                       <button className=' '>Reach Out</button>
                    </div>
                   
                </div>
               
        </div>
      </div>
    </div>
  )
}

export default Fifth
