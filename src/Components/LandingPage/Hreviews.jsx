import React from 'react'
import small from '../Images/homepage/Ellipse 4 (1).png'
import small2 from '../Images/homepage/Ellipse 4.png'
import btn from '../Images/homepage/Frame 63.png'
import rev1 from '../Images/homepage/rev1.png'
import rev from '../Images/homepage/rev.png'

function Hreviews() {
  return (
    <div className='bg-[#FEF3C780] '>
    <div className='flex flex-col gap-20 items-center justify-center  w-[100%] h-[100vh] sm:h-[160vh] '>
      <div className='pt-32 flex flex-col gap-5 text-center items-center '>
        <h1 className='font-raleway font-bold text-[30px] sm:text-[25px] sm:font-semibold'>What People Are Saying</h1>
        <h4 className='w-[46vw] text-[14px] font-poppins sm:w-[75vw] sm:text-[#00000080]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue.</h4>
      </div>
      <div className='2xl:hidden absolute left-0 '>
        <img className=' ' src={rev1} alt="" />
      </div>
      <div className='2xl:hidden absolute  right-0 top-[7200px]  '>
        <img className=' ' src={rev} alt="" />
      </div>
      <div className='flex flex-col items-end justify-center gap-16 sm:items-center sm:gap-32'>
      <div className='flex gap-32 sm:flex-col sm:items-center sm:gap-10'>
        <div className='flex flex-col gap-8 bg-[white] p-[70px] sm:items-start rounded-[10px] sm:rounded-[15px] sm:px-[50px] sm:py-[40px]  '>
            <div className=''><img src={small2} alt="" /></div>
             
            <div className='flex flex-col gap-3'>
            <h2 className=' uppercase text-[20px] font-raleway font-bold sm:text-[18px]'>ibrahim omotosho</h2>
            <h3 className='w-[23vw] text-[14px] font-poppins  leading-5 sm:w-[55vw] sm:text-[#00000099]'><em>“Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Eget aenean accumsan 
                bibendum gravida maecenas augue.”</em>
            </h3>
            </div>
        </div>
        <div className='flex flex-col gap-8 bg-[white] p-[70px] rounded-[10px] sm:rounded-[15px] sm:px-[50px] sm:py-[40px]  '>
         <div><img src={small} alt="" /></div>
         <div className='flex flex-col gap-3'>
            <h2 className=' uppercase text-[20px] font-raleway font-bold sm:text-[18px]'>korede mohammed</h2>
            <h3 className='w-[23vw] text-[14px] font-poppins  leading-5 sm:w-[55vw] sm:text-[#00000099]'><em>“Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Eget aenean accumsan 
                bibendum gravida maecenas augue.”</em>
            </h3>
            </div>
        </div>
      </div>
        <div>
            <a href="https://google.com" className='text-[#C12DC1] font-poppins font-semibold underline decoration-[#C12DC1]'>View All Reviews</a>
        </div>
      </div>
      <div>
        <img className=' relative bottom-20 sm:bottom-[180px]' src={btn} alt="" />
      </div>
      </div>
    </div>
  )
}

export default Hreviews
