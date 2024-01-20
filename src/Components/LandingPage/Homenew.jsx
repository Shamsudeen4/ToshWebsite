import React from 'react'
import image from '../Images/coursepage/close-up-image-programer-working-his-desk-office 1.png'
import arrow from '../Images/homepage/Curved Arrow Downward.png'
import ndblur from '../Images/homepage/ndblur.png'
function Homenew() {
  return (
    <div className='lg:mt-20 lg:mb-32 sm:flex  sm:flex-col sm:items-center sm:w-[100%] sm:justify-center sm:mt-16 sm:mb-16'>
      <div className='flex justify-center items-center lg:gap-[110px] sm:gap-[60px] sm:flex-col-reverse'>
        <div className='flex flex-col gap-[20px] sm:items-center'>
            <div className='flex flex-col gap-[20px] sm:items-center'>
                <h1 className='font-raleway capitalize font-bold lg:text-[45px] lg:w-[33vw] sm:text-[35px] sm:w-[80vw] sm:text-center lg:leading-[45px] sm:leading-[40px]'>award winning bespoke software development company</h1>
                <h4 className='lg:w-[30vw] capitalize text-[#00000080] lg:text-[18px] font-semibold sm:text-center sm:w-[75vw]'>we help medium to large businesses boost their online 
                    sales through the help of technologies. you’ve got an 
                    idea? bring it up, our skilled engineers will turn it 
                    to a live product.
                </h4>
            </div>
            <div className=''>
        <button className='flex items-center bg-[#FB9B02] px-6 rounded-[10px] text-[white] capitalize font-poppins gap-[25px] sm:rounded-[10px] sm:gap-[15px]  lg:text-[18px] sm:text-[16px] '>Book a free consultation <img className='w-[2vw] sm:w-[8vw]' src={arrow} alt="" /></button>
      </div>
        </div>
        <div>
            <img className='sm:w-[85vw]' src={image} alt="" />
        </div>
      
        <img className='absolute -bottom-6 right-0 sm:hidden' src={ndblur} alt="" />
      
      </div>
    </div>
  )
}

export default Homenew
