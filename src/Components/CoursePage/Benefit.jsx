import React from 'react'
import p1 from '../Images/coursepage/Group 9.png'
import p2 from '../Images/coursepage/Group 10.png'
import p3 from '../Images/coursepage/Group 11.png'
import p4 from "../Images/coursepage/Group 12.png"


function Benefit() {
  return (
    <div className='lg:flex flex-col '>
        <div className='ml-[8%] flex-col lg:w-[45%] gap-1 flex mt-[10%]'>
            <h5 className='text-[#FB9B02] font-bold'>Benefits</h5>
            <h1 className='font-bold lg:text-[35px]'>Best Place To learn Growth</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue.</p>
        </div>

        <div className='lg:ml-[10%] lg:flex mt-[5%] gap-6'>
            <div className='LearningPlaces flex flex-col items-center lg:w-[21%] border-[2px]-[#F8E7F8]  p-4 gap-1 shadow-md'>
                <img className='w-24 pb-5' src={p1} alt="" />
                <h2 className='font-bold '>EXPERIENCE INSTRUCTORS</h2>
                <h6 className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Eget aenean accumsan bibendum gravida maecenas augue. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    .</h6>
            </div>

            <div className='LearningPlaces flex flex-col items-center lg:w-[21%] p-4 gap-1 shadow-md'>
                <img className='w-24 pb-5' src={p2} alt="" />
                <h2 className='font-bold '>WORKING EXPERIENCE</h2>
                <h6 className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Eget aenean accumsan bibendum gravida maecenas augue. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    .</h6>
            </div>

            <div className='LearningPlaces flex flex-col items-center lg:w-[21%] p-4 gap-1 shadow-md'>
                <img className='w-24 pb-5' src={p3} alt="" />
                <h2 className='font-bold '>COLLABORATIVE PROJECT</h2>
                <h6 className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Eget aenean accumsan bibendum gravida maecenas augue. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    .</h6>
            </div>

            <div className='LearningPlaces flex flex-col items-center lg:w-[21%] p-4 gap-1 shadow-md'>
                <img className='w-24 pb-5' src={p4} alt="" />
                <h2 className='font-bold '>NETWORK WITH OTHERS FOLKS</h2>
                <h6 className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Eget aenean accumsan bibendum gravida maecenas augue. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    .</h6>
            </div>
        </div>
    </div>
  )
}

export default Benefit