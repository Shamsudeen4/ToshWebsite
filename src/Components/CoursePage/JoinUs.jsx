import React from 'react'

function JoinUs() {
  return (
    <div className='  flex flex-col justify-center items-center w-[100%] lg:h-[50vh] sm:h-[40vh] bg-[white]'>
    <div className=' flex flex-col gap-6 items-center justify-center bg-[#C12DC1] py-[50px] px-[300px] rounded-[20px] sm:rounded-none sm:px-9 text-center'>
      <h1 className='font-raleway text-[white] text-[30px] font-bold sm:text-[25px] uppercase'>lIKE TO JOIN US?</h1>
      <h2 className='text-[14px] text-[white] w-[31vw] sm:w-[82vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet.</h2>
      <button className='bg-[white] px-[30px] py-[10px]  text-[#C12DC1] rounded-[10px] border-[2px] border-solid border-[#ffffff] transition duration-300 hover:text-[white] hover:bg-transparent '>Apply Now</button>
    </div>
  </div>
  )
}

export default JoinUs