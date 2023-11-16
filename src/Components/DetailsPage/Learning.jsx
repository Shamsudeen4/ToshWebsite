import React from 'react'
import mark from '../Images/homepage/Vector.png'

function Learning() {
  return (
    <div className='lg:grid grid-cols-2 mt-[5%] px-20 gap-5'>
      <div className='flex flex-col gap-5 lg:w-[80%] ml-[%]'>
        <div className='bg-[#FEF3C7B2] text-[#FB9B02] font-bold rounded-md py-2'>
          <h2 className='ml-5'>WHAT YOU’LL LEARN</h2>
        </div>
        <div className='flex gap-4 font-bold'>
          <img className='lg:w-5' src={mark} alt="" />
          <h5>HTML</h5>
        </div>
        <div className='flex gap-4 font-bold'>
          <img className='lg:w-5' src={mark} alt="" />
          <h5>CSS</h5>
        </div>
        <div className='flex gap-4 font-bold'>
          <img className='lg:w-5' src={mark} alt="" /> 
          <h5>Javascript</h5>
        </div>
        <div className='flex gap-4 font-bold'>
          <img className='lg:w-5' src={mark} alt="" />
          <h5>React jS</h5>
        </div>
        <div className='flex gap-4 font-bold'>
          <img className='lg:w-5' src={mark} alt="" />
          <h5>Tailwind CSS</h5>
        </div>
        <div className='flex gap-4 font-bold'>
          <img className='lg:w-5' src={mark} alt="" />
          <h5>Bootstrap</h5>
        </div>
      </div>
      {/* ///////////////COURSE BENEFIT///////// */}
      <div className='flex flex-col gap-5 lg:w-[80%]'>
        <div className='bg-[#F8E7F8] text-[#C12DC1] font-bold rounded-md py-2'>
          <h2 className='ml-5'>COURSE BENEFITS</h2>
        </div>
        <div className='flex gap-4 font-bold'>
          <img className='lg:w-5' src={mark} alt="" />
          <h5>Project Handoff</h5>
        </div>
        <div className='flex gap-4 font-bold'>
          <img className='lg:w-5' src={mark} alt="" />
          <h5>Community Collaboration</h5>
        </div>
        <div className='flex gap-4 font-bold'>
          <img className='lg:w-5' src={mark} alt="" /> 
          <h5>Group Project</h5>
        </div>
        <div className='flex gap-4 font-bold'>
          <img className='lg:w-5' src={mark} alt="" />
          <h5>Expert Instructors</h5>
        </div>
        <div className='flex gap-4 font-bold'>
          <img className='lg:w-5 sm: w-5' src={mark} alt="" />
          <h5>Access to real life project</h5>
        </div>
        <div className='flex gap-4 font-bold'>
          <img className='lg:w-5' src={mark} alt="" />
          <h5>Job Opportunity</h5>
        </div>
      </div>
      {/* ///////////////COURSE Details///////// */}
      <div className='flex flex-col gap-5 lg:w-[80%] mt-[4%]'>
        <div className='bg-[#F8E7F8] text-[#C12DC1] font-bold rounded-md py-2'>
          <h2 className='ml-5'>COURSE DETAILS</h2>
        </div>
        <div className='flex gap-4 font-bold'>
          <img className='w-5' src={mark} alt="" />
          <h5>Duration:   12 weeks</h5>
        </div>
        <div className='flex gap-4 font-bold'>
          <img className='w-5' src={mark} alt="" />
          <h5>Level:   intermediate, advance.</h5>
        </div>  
      </div>
    </div>
  )
}

export default Learning