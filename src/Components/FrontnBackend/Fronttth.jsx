import React from 'react'
import line from '../Images/frontnbackend/Line 2.png'
function Fronttth() {
  return (
    <div>
      <div className=' flex flex-col items-center gap-[100px] py-[8%]'>
      <div className=' flex flex-col items-center text-center'>
            <h1 className=' font-poppins font-bold text-[50px] w-[40vw] leading-[60px]'>Steps To Get Started</h1>
            <h4 className=' font-euclid text-center w-[43vw]'>At Toshconsult, we are committed to 
                shaping your tech skills and empowering 
                your career. Explore the unique benefits 
                that set us apart and pave the way for 
                your success.
            </h4>
        </div>
        <div className=' flex items-center gap-[30px]'>
            <div className=' flex flex-col gap-10'>
            <h1 className=' font-poppins font-bold text-[150px] text-[#00000033]  leading-[60px]'>01.</h1>
            <h4 className=' font-euclid  w-[13vw] font-semibold'>Choose your preferred course
            </h4> </div>
            <div className=' relative bottom-16'>
               <img src={line} alt="" />
            </div>
            <div className=' flex flex-col gap-10'>
            <h1 className=' font-poppins font-bold text-[150px] text-[#00000033]  leading-[60px]'>02.</h1>
            <h4 className=' font-euclid  w-[13vw] font-semibold'>Reach out to us to purchase course
            </h4>  
            </div>
            <div className=' relative bottom-16'>
                 <img src={line} alt="" />
            </div>
            <div className=' flex flex-col gap-10'>
            <h1 className=' font-poppins font-bold text-[150px] text-[#00000033]  leading-[60px]'>03.</h1>
            <h4 className=' font-euclid  w-[11vw] font-semibold'>Start learning and become professional
            </h4>  
            </div>
        </div>
      </div>
    </div>
  )
}

export default Fronttth
