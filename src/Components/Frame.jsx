import React from 'react'
import marke from '../Components/Images/homepage/Vector.png'

function Frame() {
  return (
    <div className='flex items-center justify-center text-center'>
      <div className='flex flex-col lg:w-[30%] mt-[15%] items-center justify-center gap-5'>
        <div className='h-20 w-20 flex items-center justify-center rounded-[50%] bg-[#FEF3C7B2] mb-5' >
          <img src={marke} alt="" />
        </div>
        <h1 className='font-bold lg:text-[22px]'>THANK YOU FOR APPLYING WITH US!</h1>
        <h6 className='text-[gray]'>Your applicatio has been sent to our team successfuly.  oue team will get back to you in the next 24 hours</h6>
      </div>
    </div>
  )
}

export default Frame