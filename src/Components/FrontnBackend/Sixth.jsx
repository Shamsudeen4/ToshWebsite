import React from 'react'
import api from '../Images/frontnbackend/Ellipse 8.png'
// import { PiPlayCircleFill } from "react-icons/pi";
import vid from '../Images/frontnbackend/Student Spotlight_ Meet Baruch, Fullstack student.mp4'
function Sixth() {
  return (
    <div>
      <div className=' flex flex-col items-center gap-[100px]  py-[6%]'>
        <div className=' flex flex-col items-center text-center gap-[15px]'>
            <h1 className=' capitalize font-poppins text-[50px] font-bold w-[44vw] leading-[55px] sm:w-[75vw] sm:leading-[40px] sm:text-[40px]'>What Our Students are saying about us</h1>
            <h4 className=' font-euclid w-[44vw] text-[#000000B2] sm:w-[80vw]'>At Toshconsult, we are committed to shaping 
                your tech skills and empowering your career.
                 Explore the unique benefits that set us 
                 apart and pave the way for your success.
            </h4>
        </div>
        <div className=' flex items-center gap-10 sm:flex-col'>
            <div className=' flex flex-col gap-[70px] rounded-[20px] shadow-[#0000001A] shadow-xl bg-[white] p-11  sm:w-[80%] sm:items-center sm:px-14'>
                <div>
                    <h1 className=' font-euclid text-[16px] w-[30vw] sm:w-[80vw] sm:text-center'>“At Toshconsult, we are committed to 
                        shaping your tech skills and empowering 
                        your career. Explore the unique benefits 
                        that set us apart and pave the way for 
                        your success.”
                    </h1>
                </div>
                <div className='flex gap-4 items-center'>
                    <div>
                        <img src={api} alt="" />
                    </div>
                    <div>
                        <h1 className=' font-evolventa font-semibold'>Gbadegesin Faruq</h1>
                        <h4 className=' font-euclid text-[#000000B2]'>Frontend developer, MSME Ecosystem</h4>
                    </div>
                </div>
            </div>
            <div className=' flex flex-col items-center'>
                <video className=' rounded-[20px] w-[33vw] sm:w-[90vw]'  src={vid} controls />
                {/* <div className=' absolute bottom-52'>
                <PiPlayCircleFill className='relative' size={70} color='white'  />
                </div> */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Sixth
