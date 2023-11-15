import React from 'react'
import p1 from '../Images/coursepage/Group 9.png'
import p2 from '../Images/coursepage/Group 10.png'
import p3 from '../Images/coursepage/Group 11.png'

function Benefit() {
  return (
    <div className='lg:flex flex-col'>
    <div className='ml-[8%] flex-col lg:w-[45%] gap-1 flex mt-[10%]'>
        <h5 className='text-[#FB9B02] font-bold'>Benefits</h5>
        <h1 className='font-bold lg:text-[35px]'>The Purpose Of Hiring us </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, 
           consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue.
        </p>
    </div>

    <div className='lg:ml-[%] lg:flex  justify-center sm:gap-10'>
        <div className='LearningPlaces flex items-center mt-[10%] lg:w-[25%] border-[#F8E7F8]-500 sm: w-[90%] sm: ml-[4%]  p-4 gap-8 shadow-md'>
            {/* <div> */}
              <img className='w- pb-5' src={p1} alt="" />
            {/* </div> */}
          <div className='flex flex-col gap-3 '>
            <h2 className='font-bold '>EXPERIENCE INSTRUCTORS</h2>
            <h6 className='text-[gray]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Eget aenean accumsan bibendum gravida maecenas augue.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit..
            </h6>
          </div>
        </div>

        {/* //////////////////SECOND ///////// */}
        <div className='LearningPlaces flex items-center lg:w-[25%] mt-[10%] border-[2px]-[#F8E7F8] sm: w-[90%] sm: ml-[4%] p-4 gap-8 shadow-md'>
            {/* <div> */}
              <img className='w- pb-5' src={p2} alt="" />
            {/* </div> */}
          <div className='flex flex-col gap-3 '>
            <h2 className='font-bold '>EXPERIENCE INSTRUCTORS</h2>
            <h6 className='text-[gray]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Eget aenean accumsan bibendum gravida maecenas augue.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit..
            </h6>
          </div>
        </div>

        {/* //////////////THIRD SEC///////// */}
        <div className='LearningPlaces flex items-center lg:w-[25%] mt-[10%] border-[2px]-[#F8E7F8] sm: w-[90%] sm: ml-[4%] p-4 gap-8 shadow-md'>
            {/* <div> */}
              <img className='w- pb-5' src={p3} alt="" />
            {/* </div> */}
          <div className='flex flex-col gap-3 '>
            <h2 className='font-bold '>EXPERIENCE INSTRUCTORS</h2>
            <h6 className='text-[gray]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Eget aenean accumsan bibendum gravida maecenas augue.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit..
            </h6>
          </div>
        </div>

      
    </div>
</div>
  )
}

export default Benefit