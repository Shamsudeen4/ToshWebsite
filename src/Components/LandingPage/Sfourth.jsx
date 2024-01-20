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
    <div className='flex flex-col gap-[40px] w-[100%] h-[100vh] items-center justify-center bg-[white]'>
      <div>
        <h1 className='text-[50px] leading-[60px] capitalize font-raleway font-bold w-[45vw] text-center sm:text-[35px] sm:w-[75vw] sm:leading-9'>What other business owners are saying about us</h1>
      </div>
      <div className='sm:hidden flex flex-col gap-[30px]'>
        <div className='flex gap-[30px]'>
            <img className='w-[23vw] h-[17vw]' src={f} alt="" />
            <img className='w-[23vw] h-[17vw]' src={s} alt="" />
            <img className='w-[23vw] h-[17vw]' src={t} alt="" />
        </div>
        <div className='flex gap-[30px] '>
            <img className='w-[23vw] h-[17vw]' src={ff} alt="" />
            <img className='w-[23vw] h-[17vw]' src={ss} alt="" />
            <img className='w-[23vw] h-[17vw]' src={se} alt="" />

        </div>
      </div>
      <div className='lg:hidden flex flex-col gap-[30px]'>
        <div className='flex gap-[20px]'>
            <img className='w-[36vw] h-[32vw]' src={f} alt="" />
            <img className='w-[36vw] h-[32vw]' src={s} alt="" />
        </div>
        <div className='flex gap-[20px]'>
            <img className='w-[36vw] h-[32vw]' src={t} alt="" />
            <img className='w-[36vw] h-[32vw]' src={ff} alt="" />
        </div>
            <div className='flex gap-[20px] '>
           <img className='w-[36vw] h-[32vw]' src={ss} alt="" />
            <img className='w-[36vw] h-[32vw]' src={se} alt="" />

        </div>
      </div>
    </div>
    </div>
  )
}

export default Sfourth
