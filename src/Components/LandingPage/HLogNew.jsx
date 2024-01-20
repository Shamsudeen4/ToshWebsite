import React from 'react'
import image from '../Images/coursepage/close-up-image-programer-working-his-desk-office 1 (1).png'
import arrow from '../Images/homepage/Curved Arrow Downward.png'
import ndblur from '../Images/homepage/ndblur.png'
function HLogNew() {
  return (
    <div className='lg:mt-9 lg:mb-32 sm:flex lg:flex lg:flex-col lg:gap-[40px] items-center  font-raleway sm:flex-col sm:items-center sm:w-[100%] sm:gap-[40px] sm:justify-center sm:mt-4 sm:mb-16'>
        <div className='flex flex-col gap-[15px]'>
            <h1 className=' capitalize text-[#C12DC1] text-[35px] font-bold lg:w-[54vw] lg:leading-[40px] sm:leading-[35px] sm:text-center sm:text-[25px] sm:w-[80vw]'>Are you looking for a way to increase the reach and visibility of your logistics and transportation business? If yes, you are in the right place!</h1>
            <h4 className=' capitalize text-[#000000B2] lg:w-[50vw] sm:w-[80vw] sm:text-center font-semibold'>let’s help you to transform your business by building a cut-edge website for your company and start receiving order online with seemless payment solutions!</h4>
        </div>
      <div className='flex justify-center items-center lg:gap-[110px] sm:gap-[60px] sm:flex-col-reverse'>
        <div className='flex flex-col gap-[20px] sm:items-center'>
            <div className='flex flex-col gap-[20px] sm:items-center'>
                <h1 className='font-raleway capitalize font-bold lg:text-[45px] lg:w-[33vw] sm:text-[35px] sm:w-[80vw] sm:text-center lg:leading-[45px] sm:leading-[40px]'>award winning logistics website designer </h1>
                <h4 className='lg:w-[30vw] capitalize text-[#00000080] lg:text-[18px] font-semibold sm:text-center sm:w-[75vw]'>We specialize in making a visually appealing, fast, mobile responsive and SEO- friendly optimized websites for logistics and transportation that increases visibility and ultimately brings more sales.
                </h4>
            </div>
            <div className=''>
        <button className='flex items-center bg-[#FB9B02] px-4 rounded-[20px] text-[white] capitalize font-poppins gap-[25px] sm:py-1 lg:text-[16px] sm:text-[14px] '>Book a free consultation <img className='w-[2vw] sm:w-[7vw]' src={arrow} alt="" /></button>
      </div>
        </div>
        <div>
            <img className='sm:w-[85vw]' src={image} alt="" />
        </div>
      
        <img className='absolute -bottom-[75px] right-0 sm:hidden' src={ndblur} alt="" />
      
      </div>
    </div>
  )
}

export default HLogNew
