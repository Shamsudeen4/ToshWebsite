import React from 'react'
// import marke from '../Components/Images/homepage/Vector.png'

function Form() {

  return (
    <div className='flex flex-col lg:items-center gap-[40px] sm:gap-[30px]'>
      <div className='bg-[#FEF3C7B2] lg:w-[60vw] py-4 '>
        <h2 className='font-bold  text-[#FB9B02] pl-10 '>FILL THE FORM BELOW</h2>
      </div>
      <form className=' flex flex-col gap-5 sm:items-center'>
        <div className='flex flex-col gap-1'>
          <label className='font-bold' htmlFor="fname">FULL NAME</label>
          <input id='fname' className='lg:w-[60vw] outline-none pl-4 sm:w-[85vw] lg:h-[6vh] sm:h-[6vh] border rounded' type="text"placeholder='' />
        </div>

        <div className='flex flex-col gap-1'>
          <label className='font-bold' htmlFor="email">EMAIL</label>
          <input id='email' className='lg:w-[60vw] outline-none pl-4 lg:h-[6vh] sm:w-[85vw] border rounded sm:h-[6vh] ' type="text"placeholder='' />
        </div>

        <div className='flex flex-col gap-1'>
          <label className='font-bold' htmlFor="message">TYPE YOUR MESSAGE</label>
          <textarea className='border outline-none lg:w-[60vw] sm:w-[85vw] pl-5 pt-5' name="" id="name" cols="30" rows="10"></textarea>
        </div>
        <button className='rounded-md text-white lg:w-[8vw]  py-1 bg-[#FB9B02] border-[1px] border-[#FB9B02] hover:text-[#FB9B02] hover:bg-[white] transition duration-300 sm:w-[50vw]'>Send Now</button>
      </form>
      
    </div>
  )
}

export default Form