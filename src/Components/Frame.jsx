import React from 'react'
import marke from '../Components/Images/homepage/Vector.png'

function Frame() {
  return (
    <div className=' flex items-center justify-center h-[100vh] w-[100%]'>
    <div className='flex items-center justify-center text-center'>
      <div className='flex flex-col   items-center justify-center  bg-[white] shadow-xl gap-5 px-[50px] py-[130px] rounded-[20px]'>
        <div className='h-20 w-20 flex items-center justify-center rounded-[50%] bg-[#FEF3C7] mb-5' >
          <img src={marke} alt="" />
        </div>
        <h1 className='font-bold lg:text-[30px] font-evolventa'>THANK YOU FOR APPLYING WITH US!</h1>
        <h6 className='text-[#00000080] w-[30vw] font-poppins'>Your application has been sent to our team successfully.  Our team will get back to you in the next 24 hours</h6>
      </div>
    </div>
    </div>
  )
}

export default Frame