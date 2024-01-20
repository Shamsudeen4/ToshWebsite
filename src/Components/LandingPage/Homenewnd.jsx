import React from 'react'
import image from '../Images/coursepage/close-up-image-programer-working-his-desk-office 1 (1).png'
import arrow from '../Images/homepage/Curved Arrow Downward.png'
import ndblur from '../Images/homepage/ndblur.png'
function Homenewnd() {
  return (
    <div className='lg:mt-9 lg:mb-32 sm:flex lg:flex lg:flex-col lg:gap-[40px] items-center  font-raleway sm:flex-col sm:items-center sm:w-[100%] sm:gap-[40px] sm:justify-center sm:mt-4 sm:mb-16'>
        <div className='flex flex-col gap-[15px]'>
            <h1 className=' capitalize text-[#C12DC1] text-[35px] font-bold lg:w-[54vw] lg:leading-[40px] sm:leading-[35px] sm:text-center sm:text-[25px] sm:w-[80vw]'>do you have a restaurant and you are looking for a way to increase your sales?</h1>
            <h4 className=' capitalize text-[#000000B2] lg:w-[50vw] sm:w-[80vw] sm:text-center'>let’s help you to transform your restaurant business by building a cut-edge restaurant website for your restaurant and start receiving order online with seemless payment solutions!</h4>
        </div>
      <div className='flex justify-center items-center lg:gap-[110px] sm:gap-[60px] sm:flex-col-reverse'>
        <div className='flex flex-col gap-[20px] sm:items-center'>
            <div className='flex flex-col gap-[20px] sm:items-center'>
                <h1 className='font-raleway capitalize font-bold lg:text-[45px] lg:w-[33vw] sm:text-[35px] sm:w-[80vw] sm:text-center lg:leading-[45px] sm:leading-[40px]'>award winning restaurant website designer </h1>
                <h4 className='lg:w-[30vw] capitalize text-[#00000080] lg:text-[18px] font-semibold sm:text-center sm:w-[75vw]'>we help medium to large restaurant owners boost their online sales through the help of technologies. is your restaurant business not performing the way you want? let us help you digitalize your business.
                </h4>
            </div>
            <div className=''>
        <button className='flex items-center bg-[#FB9B02] px-6 rounded-[20px] text-[white] capitalize font-poppins gap-[25px] sm:py-2 lg:text-[24px] sm:text-[18px] '>Book a free consultation <img className='w-[2.5vw] sm:w-[9vw]' src={arrow} alt="" /></button>
      </div>
        </div>
        <div>
            <img className='sm:w-[85vw]' src={image} alt="" />
        </div>
      
        <img className='absolute -bottom-[135px] right-0 sm:hidden' src={ndblur} alt="" />
      
      </div>
    </div>
  )
}

export default Homenewnd
