import React from 'react'
import high from '../Images/homepage/Group 4.png'
import high2 from '../Images/homepage/Group 2.png'
function Hhighexp() {
  return (
    <div className='flex flex-col items-center justify-center w-[100%] h-[100vh] gap-[50px] bg-[#FEF3C780]'>
     <div className='m-12 flex flex-col items-center justify-center w-[100%] h-[100vh] gap-[50px] '>
      <div className='  flex flex-col gap-[20px] bg-[white] rounded-[15px] py-[50px] px-[30px]'>
       <div> 
        <img className='w-[58px] h-[58px]' src={high} alt="" />
        </div>
        <div className='flex flex-col gap-[10px] justify-items-center'>
            <h1 className='text-[16px] font-raleway font-bold'>HIGHLY EXPECTATION</h1>
            <h4 className='text-[12px] font-poppins w-[65vw] text-[#00000099]' >Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. 
                Eget aenean accumsan bibendum 
                gravida maecenas augue.
            </h4>
        </div>
      </div>

      <div className='flex flex-col gap-[20px] bg-[white] rounded-[15px] py-[50px] px-[30px]'>
       <div> 
        <img className='w-[58px] h-[58px]' src={high2} alt="" />
        </div>
        <div className='flex flex-col gap-[10px] justify-items-center'>
            <h1 className='text-[16px] font-raleway font-bold'>HIGHLY EXPECTATION</h1>
            <h4 className='text-[12px] font-poppins w-[65vw] text-[#00000099]' >Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. 
                Eget aenean accumsan bibendum 
                gravida maecenas augue.
            </h4>
        </div>
      </div>
      </div>
      </div>
  )
}

export default Hhighexp
