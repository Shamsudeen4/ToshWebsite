import React from 'react'
import st from '../Images/aboutpage/Rectangle 61.png'
import nd from '../Images/aboutpage/Rectangle 62.png'
import rd from '../Images/aboutpage/Rectangle 63.png'
// import nav from '../Images/aboutpage/Frame 104.png'

import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
function Afifth() {
  return (
    <div>
       <div className='flex flex-col gap-[60px] lg:p-44 sm:p-10 lg:h-[100vh] w-[100%] justify-center '>
    <div className='flex flex-col gap-3  sm:items-start'>
      <h3 className=' font-raleway text-[20px] font-semibold text-[#FB9B02] capitalize'>Team</h3>
      <h1 className='font-raleway font-semibold text-[35px] sm:w-[70vw] lg:w-[30vw] leading-10 sm:leading-8 capitalize'>Our Team</h1>
      <h4 className='lg:w-[30vw] sm:w-[75vw] text-[14px] capitalize font-poppins text-[#00000099]'>
      Meet Our Team of Tech Visionaries Passionate about Innovation and Empowering Businesses.
      </h4>
    </div>
    <div className='  flex flex-col '>
    <div className='sm:hidden flex gap-24 sm:flex-col'>
      <Swiper 
      className='lg:w-[80vw]'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      // navigation
      pagination={{ clickable: true }}
      >
        <SwiperSlide>
        <div>
            <img className='lg:w-[24vw] ' src={st} alt="" />
            <div className='bg-[white] 
            rounded-[10px] py-[10px] px-[20px]
             w-[15vw] relative bottom-[80px] 
             left-[70px] flex flex-col font-raleway 
             items-center sm:-bottom-[5000px] sm:left-[100px]'>
                <h2 className='text-[18px] font-semibold sm:w-[40vw]'>IBRAHIM KOLAPO</h2>
                <h4 className='text-[14px]'>Frontend-Designer</h4>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=''>
        <img className='lg:w-[24vw]' src={nd} alt="" />
        <div className='bg-[white] rounded-[10px] py-[10px] 
        px-[20px] w-[15vw] relative bottom-[80px] left-[70px] 
        flex flex-col font-raleway items-center sm:-bottom-[5450px] sm:left-[100px] '>
                <h2 className='text-[18px] font-semibold '>IBRAHIM KOLAPO</h2>
                <h4 className='text-[14px]'>Frontend-Designer</h4>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img className='lg:w-[24vw]' src={rd} alt="" />
        <div className='bg-[white] rounded-[10px] py-[10px] px-[20px]
         relative w-[15vw] bottom-[80px] left-[70px] flex flex-col 
         font-raleway items-center sm:-bottom-[5915px] sm:left-[100px]'>
                <h2 className='text-[18px] font-semibold '>IBRAHIM KOLAPO</h2>
                <h4 className='text-[14px]'>Frontend-Designer</h4>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img className='lg:w-[24vw]' src={rd} alt="" />
        <div className='bg-[white] rounded-[10px] py-[10px] px-[20px] 
        relative w-[15vw] bottom-[80px] left-[70px] flex flex-col 
        font-raleway items-center sm:-bottom-[5915px] sm:left-[100px]'>
                <h2 className='text-[18px] font-semibold '>IBRAHIM KOLAPO</h2>
                <h4 className='text-[14px]'>Frontend-Designer</h4>
            </div>
        </div>
        </SwiperSlide>
        </Swiper>
    </div>
   
    <div className='lg:hidden flex gap-24 sm:flex-col'>
      <Swiper 
      className='sm:w-[80vw]'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      // navigation
      pagination={{ clickable: true }}
      >
        <SwiperSlide>
        <div>
            <img className='lg:w-[24vw] ' src={st} alt="" />
            <div className='bg-[white] 
            rounded-[10px] py-[10px] px-[20px]
             w-[15vw] relative bottom-[80px] 
             left-[70px] flex flex-col font-raleway 
             items-center sm:-bottom-[5000px] sm:left-[100px]'>
                <h2 className='text-[18px] font-semibold sm:w-[40vw]'>IBRAHIM KOLAPO</h2>
                <h4 className='text-[14px]'>Frontend-Designer</h4>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=''>
        <img className='lg:w-[24vw]' src={nd} alt="" />
        <div className='bg-[white] rounded-[10px] py-[10px] 
        px-[20px] w-[15vw] relative bottom-[80px] left-[70px] 
        flex flex-col font-raleway items-center sm:-bottom-[5450px] sm:left-[100px] '>
                <h2 className='text-[18px] font-semibold '>IBRAHIM KOLAPO</h2>
                <h4 className='text-[14px]'>Frontend-Designer</h4>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img className='lg:w-[24vw]' src={rd} alt="" />
        <div className='bg-[white] rounded-[10px] py-[10px] px-[20px]
         relative w-[15vw] bottom-[80px] left-[70px] flex flex-col 
         font-raleway items-center sm:-bottom-[5915px] sm:left-[100px]'>
                <h2 className='text-[18px] font-semibold '>IBRAHIM KOLAPO</h2>
                <h4 className='text-[14px]'>Frontend-Designer</h4>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img className='lg:w-[24vw]' src={rd} alt="" />
        <div className='bg-[white] rounded-[10px] py-[10px] px-[20px] 
        relative w-[15vw] bottom-[80px] left-[70px] flex flex-col 
        font-raleway items-center sm:-bottom-[5915px] sm:left-[100px]'>
                <h2 className='text-[18px] font-semibold '>IBRAHIM KOLAPO</h2>
                <h4 className='text-[14px]'>Frontend-Designer</h4>
            </div>
        </div>
        </SwiperSlide>
        </Swiper>
    </div>
   
    </div>
 
  </div>
    </div>
  )
}

export default Afifth
