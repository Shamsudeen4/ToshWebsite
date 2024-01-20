import React from 'react'
import p1 from '../Images/coursepage/Group 9.png'
import p2 from '../Images/coursepage/Group 10.png'
import p3 from '../Images/coursepage/Group 11.png'
import p4 from "../Images/coursepage/Group 12.png"


function Benefit() {
  return (
    <div className='flex flex-col items-center justify-center lg:w-[100%] lg:h-[90vh] sm:pt-[100px] '>
    <div className='flex flex-col lg:gap-[60px] sm:gap-[70px] lg:ml-[100px]'>
        <div className=' flex-col lg:w-[45%] gap-2 flex '>
            <h5 className='text-[#FB9B02] font-semibold'>Benefits</h5>
            <h1 className='font-semibold capitalize lg:text-[35px]'>Best Place To learn Growth</h1>
            <p className=' capitalize lg:w-[35vw] sm:w-[85vw] text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue.</p>
        </div>

        <div className=' flex sm:flex-col   gap-[40px]'>
            <div className='LearningPlaces flex flex-col items-center lg:w-[21%] border-[1px] justify-center rounded-[14px] sm:py-[40px] lg:p-4 gap-1 border-solid border-[#F8E7F8]'>
                <img className='lg:w-[3.5vw] pb-5' src={p1} alt="" />
                <h2 className='font-semibold '>EXPERIENCE INSTRUCTORS</h2>
                <h6 className='text-center text-[12px] sm:w-[70vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Eget aenean accumsan bibendum gravida maecenas augue. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h6>
            </div>
            <div className='LearningPlaces flex flex-col items-center lg:w-[21%] border-[1px] justify-center rounded-[14px] sm:py-[40px]  lg:p-14 gap-1 border-solid border-[#FEF3C7]'>
                <img className='lg:w-[3.5vw] pb-5' src={p2} alt="" />
                <h2 className='font-semibold '>WORKING EXPERIENCE</h2>
                <h6 className='text-center text-[12px] lg:w-[15vw] sm:w-[70vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Eget aenean accumsan bibendum gravida maecenas augue. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h6>
            </div>
            <div className='LearningPlaces flex flex-col items-center lg:w-[21%] border-[1px] justify-center rounded-[14px]  lg:p-4 sm:py-[40px] gap-1 border-solid border-[#FEF3C7]'>
                <img className='lg:w-[3.5vw] pb-5' src={p3} alt="" />
                <h2 className='font-semibold '>COLLABORATIVE PROJECT</h2>
                <h6 className='text-center text-[12px] sm:w-[70vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Eget aenean accumsan bibendum gravida maecenas augue. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h6>
            </div>
            <div className='LearningPlaces flex flex-col items-center lg:w-[21%] border-[1px] justify-center rounded-[14px] sm:py-[40px] lg:p-4 gap-1 border-solid border-[#F8E7F8]'>
                <img className='lg:w-[3.5vw] pb-5' src={p4} alt="" />
                <h2 className='font-semibold '>NETWORK WITH OTHERS FOLKS</h2>
                <h6 className='text-center text-[12px] sm:w-[70vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Eget aenean accumsan bibendum gravida maecenas augue. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h6>
            </div>


        </div>
    </div>
    </div>
  )
}

export default Benefit