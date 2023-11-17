import React from 'react'

function Form() {
  return (
    <div className='lg:flex flex-col'>
      <div className='bg-[#FEF3C7B2] lg:w-[40%] ml-[8%] mt-[5%] py-4 '>
        <h2 className='font-bold  text-[#FB9B02] ml-7'>FILL THE FORM BELOW</h2>
      </div>
      <form className='ml-[8%] flex flex-col mt-8 gap-5'>
        <div className='flex flex-col gap-1'>
          <label className='font-bold' htmlFor="">FULL NAME</label>
          <input className='lg:w-[30%] sm: w-[90%] border rounded' type="text"placeholder='' />
        </div>

        <div className='flex flex-col gap-1'>
          <label className='font-bold' htmlFor="">EMAIL</label>
          <input className='lg:w-[30%] sm: w-[90%] border rounded' type="text"placeholder='' />
        </div>

        <div className='flex flex-col gap-1'>
          <label className='font-bold' htmlFor="">TYPE YOUR MESSAGE</label>
          <textarea className='border lg:w-[30%] sm: w-[90%]' name="" id="" cols="30" rows="10"></textarea>
        </div>
        <button className='rounded-md text-white lg:w-[8%] sm: w-[35%] py-1 bg-[#FB9B02]'>Send Now</button>
      </form>
    </div>
  )
}

export default Form