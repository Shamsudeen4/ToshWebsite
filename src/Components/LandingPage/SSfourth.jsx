import React from 'react'
import f from '../Images/servicepage/Rectangle 100.png'
import s from '../Images/servicepage/Rectangle 101.png'
import t from '../Images/servicepage/Component 3.png'
import ff from '../Images/servicepage/Rectangle 103.png'
import ss from '../Images/servicepage/Rectangle 104.png'
import se from '../Images/servicepage/Rectangle 105.png'
function Sfourth() {
  return (
    <div className=''>
    <div className='flex flex-col gap-[30px] w-[100%] h-[100vh] items-center justify-center bg-[white]'>
      <div>
        <h1 className='text-[50px] leading-[60px] capitalize font-raleway font-bold w-[45vw] text-center'>Standard Portfolio</h1>
      </div>
      <div className='flex gap-6'>
        <button className='bg-[#F9F9F9] text-[#000000] hover:bg-[#FB9B02] hover:text-[white] px-[40px] py-[10px] rounded-[10px] font-raleway font-semibold text-[16px]  '>All Portfolio</button>
        <button className='bg-[#F9F9F9] text-[#000000] hover:bg-[#FB9B02] hover:text-[white] px-[40px] py-[10px] rounded-[10px] font-raleway font-semibold text-[16px]  '>Fintech</button>
        <button className='bg-[#F9F9F9] text-[#000000] hover:bg-[#FB9B02] hover:text-[white] px-[40px] py-[10px] rounded-[10px] font-raleway font-semibold text-[16px]  '>Education</button>
        <button className='bg-[#F9F9F9] text-[#000000] hover:bg-[#FB9B02] hover:text-[white] px-[40px] py-[10px] rounded-[10px] font-raleway font-semibold text-[16px]  '>SaaS & CRM</button>
        <button className='bg-[#F9F9F9] text-[#000000] hover:bg-[#FB9B02] hover:text-[white] px-[40px] py-[10px] rounded-[10px] font-raleway font-semibold text-[16px]  '>E-Commerce</button>
      </div>
      <div className='flex flex-col gap-[30px]'>
        <div className='flex gap-[30px]'>
            <img className='w-[23vw] h-[17vw]' src={f} alt="" />
            <img className='w-[23vw] h-[17vw]' src={s} alt="" />
            <img className='w-[23vw] h-[17vw]' src={t} alt="" />
        </div>
        <div className='flex gap-[40px]'>
            <img className='w-[23vw] h-[17vw]' src={ff} alt="" />
            <img className='w-[23vw] h-[17vw]' src={ss} alt="" />
            <img className='w-[23vw] h-[17vw]' src={se} alt="" />

        </div>
      </div>
    </div>
    </div>
  )
}

export default Sfourth
