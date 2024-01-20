import React from 'react'
import house from '../Images/frontnbackend/tabler-icon-school.png'
import house2 from '../Images/frontnbackend/tabler-icon-building-estate.png'
import house3 from '../Images/frontnbackend/tabler-icon-users-group.png'
function Frontth() {
  return (
    <div>
      <div className=' flex flex-col gap-[80px] items-center bg-[#121212] py-[5.5%]'>
        <div className=' flex flex-col items-center text-center text-[white]'>
            <h1 className=' font-poppins font-bold text-[50px] w-[40vw] leading-[60px]'>Why you should take this course</h1>
            <h4 className=' font-euclid text-center w-[43vw]'>At Toshconsult, we are committed to 
                shaping your tech skills and empowering 
                your career. Explore the unique benefits 
                that set us apart and pave the way for 
                your success.
            </h4>
        </div>
        <div className=' flex gap-[20px]'>
            <div className=' flex flex-col gap-10 bg-[black] p-11 rounded-[20px]'>
                <div>
                    <img src={house} alt="" />
                </div>
                <div className=' flex flex-col gap-5  text-[white]'>
                    <h1  className=' font-evolventa text-[20px] font-semibold'>Advance learning</h1>
                    <h4 className=' font-euclid w-[16vw] leading-5'>At Toshconsult, we are 
                        committed to shaping your 
                        tech skills and empowering
                         your career. Explore the 
                         unique benefits that set 
                         us apart and pave the way
                          for your success.
                    </h4>
                </div>
            </div>
            <div className=' flex flex-col gap-10 bg-[black] p-11 rounded-[20px]'>
                <div>
                    <img src={house2} alt="" />
                </div>
                <div className=' flex flex-col gap-5  text-[white]'>
                    <h1  className=' font-evolventa text-[20px] font-semibold'>Advance learning</h1>
                    <h4 className=' font-euclid w-[16vw] leading-5'>At Toshconsult, we are 
                        committed to shaping your 
                        tech skills and empowering
                         your career. Explore the 
                         unique benefits that set 
                         us apart and pave the way
                          for your success.
                    </h4>
                </div>
            </div>
            <div className=' flex flex-col gap-10 bg-[black] p-11 rounded-[20px]'>
                <div>
                    <img src={house3} alt="" />
                </div>
                <div className=' flex flex-col gap-5  text-[white]'>
                    <h1  className=' font-evolventa text-[20px] font-semibold'>Advance learning</h1>
                    <h4 className=' font-euclid w-[16vw] leading-5'>At Toshconsult, we are 
                        committed to shaping your 
                        tech skills and empowering
                         your career. Explore the 
                         unique benefits that set 
                         us apart and pave the way
                          for your success.
                    </h4>
                </div>
            </div>
           
        </div>
      </div>
    </div>
  )
}

export default Frontth
