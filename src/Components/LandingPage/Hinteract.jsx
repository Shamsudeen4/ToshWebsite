import React from 'react'
import fami from '../Images/homepage/Rectangle 11.png'
function Hinteract() {
  return (
    <div className='bg-[white]  w-[100%] h-[100vh] items-center justify-center flex flex-col p-[60px]'>
      <div className=' flex flex-col gap-[70px] items-center '>
        <div>
            <img src={fami} alt="" />
        </div>
        <div className='flex flex-col gap-4 '>
            <h1 className='font-raleway font-bold capitalize text-[25px] w-[80vw] leading-7'>interact with talented folks in the community</h1>
            <h4 className='text-[12px] font-poppins w-[80vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue.</h4>
        </div>
      </div>
    </div>
  )
}

export default Hinteract
