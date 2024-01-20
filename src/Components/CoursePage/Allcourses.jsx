import React from 'react'
import c1 from '../Images/coursepage/Rectangle 66 (2).png'
import check from '../Images/homepage/check 1.png'
import c2 from '../Images/coursepage/Rectangle 66 (1).png'
import c3 from '../Images/coursepage/Rectangle 66.png'
import c4 from '../Images/homepage/Rectangle 138.png'
// import { Link } from 'react-router-dom'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function Allcourses() {
  return (
    <div className='flex flex-col items-center '>
    <div className='flex flex-col lg:items-start sm:items-center gap-[100px] sm:gap-[50px]'>
        <div className='flex-col lg:w-[45%] gap-4 flex lg:mt-[6%] sm:mt-[20%]'>
            <h5 className='text-[#FB9B02] font-semibold'>All Courses</h5>
            <h1 className='font-semibold lg:text-[35px]'>Available Courses</h1>
            <p className='capitalize lg:w-[35vw] sm:w-[85vw] text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
               Eget aenean accumsan bibendum gravida maecenas augue.</p>
        </div>
        <div className='flex flex-col gap-[80px] sm:w-[100vw] lg:w-[70vw]'>
        <Swiper
        className='w-[100%]'
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      // navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide >
        <div className='flex flex-col gap-[80px]'>
          <div className=' flex sm:flex-col gap-[50px] items-center border-[2px] border-solid border-[#FEF3C7] lg:p-[60px] sm:py-[50px] w-[100%]'>
            <div>
              <img src={c1} className='sm:w-[85vw]' alt="" />
            </div>
            <div className='flex flex-col lg:items-end gap-[30px]'>
              <div className='flex flex-col gap-[20px]'>
                <div>
                  <h1 className=' font-semibold text-[30px] sm:text-[20px]'>FRONT-END DEVELOPMENT</h1>
                </div>
                <div>
                  <h3 className='capitalize lg:w-[33vw] sm:w-[80vw] text-[14px]  '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue.</h3>
                </div>
                <div className='flex flex-col gap-[10px] font-semibold'>
                  <div className='flex sm:flex-col gap-[30px]'>
                    <div className='flex gap-1  '> <img src={check} alt="" /> <p>HTML</p></div>
                    <div className='flex gap-1  '><img src={check} alt="" /> <p>CSS</p></div>
                    <div className='flex gap-1  '><img src={check} alt="" /> <p>Javascript</p></div>
                    <div className='flex gap-1  '><img src={check} alt="" /><p>React JS</p></div>
                    <div className='flex gap-1  '><img src={check} alt="" /> <p>Tailwind CSS</p></div>
                  </div>
                  <div className='flex sm:flex-col gap-[30px]'>
                  <div className='flex gap-1  '><img src={check} alt="" /> <p>GIT & GITHUB</p></div>
                  <div className='flex gap-1  '><img src={check} alt="" /> <p>Bootstrap</p></div>
                  </div>
                </div>
              </div>
              <div>
                <a href="/details"><button className=' bg-[#FB9B02] text-[white] px-[20px] py-[10px] rounded-[15px] font-semibold border-[1px] border-solid border-[#FB9B02] hover:text-[#FB9B02] hover:bg-[white] transition duration-300'>Learn More</button>
                </a></div>
            </div>
          </div>
          <div className=' flex sm:flex-col gap-[50px] items-center border-[2px] border-solid border-[#FEF3C7] lg:p-[60px] sm:py-[50px]'>
            <div>
              <img src={c2} className='sm:w-[85vw]' alt="" />
            </div>
            <div className='flex flex-col lg:items-end gap-[30px]'>
              <div className='flex flex-col gap-[20px]'>
                <div>
                  <h1 className=' font-semibold text-[30px] sm:text-[20px]'>BACK-END DEVELOPMENT</h1>
                </div>
                <div>
                  <h3 className='capitalize lg:w-[33vw] sm:w-[80vw] text-[14px]  '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue.</h3>
                </div>
                <div className='flex flex-col gap-[10px] font-semibold'>
                  <div className='flex sm:flex-col gap-[30px]'>
                    <div className='flex gap-1  '> <img src={check} alt="" /> <p>HTML</p></div>
                    <div className='flex gap-1  '><img src={check} alt="" /> <p>CSS</p></div>
                    <div className='flex gap-1  '><img src={check} alt="" /> <p>Javascript</p></div>
                    <div className='flex gap-1  '><img src={check} alt="" /><p>React JS</p></div>
                    <div className='flex gap-1  '><img src={check} alt="" /> <p>Tailwind CSS</p></div>
                  </div>
                  <div className='flex sm:flex-col gap-[30px]'>
                  <div className='flex gap-1  '><img src={check} alt="" /> <p>GIT & GITHUB</p></div>
                  <div className='flex gap-1  '><img src={check} alt="" /> <p>Bootstrap</p></div>
                  </div>
                </div>
              </div>
              <div>
                <button className=' bg-[#FB9B02] text-[white] px-[20px] py-[10px] rounded-[15px] font-semibold border-[1px] border-solid border-[#FB9B02] hover:text-[#FB9B02] hover:bg-[white] transition duration-300'>Learn More</button>
              </div>
            </div>
          </div>
          <div className=' flex sm:flex-col gap-[50px] items-center border-[2px] border-solid border-[#FEF3C7] lg:p-[60px] sm:py-[50px]'>
            <div>
              <img src={c3} className='sm:w-[85vw]' alt="" />
            </div>
            <div className='flex flex-col lg:items-end gap-[30px]'>
              <div className='flex flex-col gap-[20px]'>
                <div>
                  <h1 className=' font-semibold text-[30px] sm:text-[20px] sm:w-[70vw]'>PYTHON FULL-STACK DEVELOPMENT</h1>
                </div>
                <div>
                  <h3 className='capitalize lg:w-[33vw] sm:w-[80vw] text-[14px]  '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue.</h3>
                </div>
                <div className='flex flex-col gap-[10px] font-semibold'>
                  <div className='flex sm:flex-col gap-[30px]'>
                    <div className='flex gap-1  '> <img src={check} alt="" /> <p>HTML</p></div>
                    <div className='flex gap-1  '><img src={check} alt="" /> <p>CSS</p></div>
                    <div className='flex gap-1  '><img src={check} alt="" /> <p>Javascript</p></div>
                    <div className='flex gap-1  '><img src={check} alt="" /><p>React JS</p></div>
                    <div className='flex gap-1  '><img src={check} alt="" /> <p>Tailwind CSS</p></div>
                  </div>
                  <div className='flex sm:flex-col gap-[30px]'>
                  <div className='flex gap-1  '><img src={check} alt="" /> <p>GIT & GITHUB</p></div>
                  <div className='flex gap-1  '><img src={check} alt="" /> <p>Bootstrap</p></div>
                  </div>
                </div>
              </div>
              <div>
                <button className=' bg-[#FB9B02] text-[white] px-[20px] py-[10px] rounded-[15px] font-semibold border-[1px] border-solid border-[#FB9B02] hover:text-[#FB9B02] hover:bg-[white] transition duration-300'>Learn More</button>
              </div>
            </div>
          </div>
          <div className=' flex sm:flex-col gap-[50px] items-center border-[2px] border-solid border-[#FEF3C7] lg:p-[60px] sm:py-[50px]'>
            <div>
              <img className='sm:w-[85vw]' src={c4} alt="" />
            </div>
            <div className='flex flex-col lg:items-end gap-[30px]'>
              <div className='flex flex-col gap-[20px]'>
                <div>
                  <h1 className=' font-semibold text-[30px] sm:text-[20px]'>UI/UX DESIGN</h1>
                </div>
                <div>
                  <h3 className='capitalize lg:w-[33vw] sm:w-[80vw] text-[14px]  '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue.</h3>
                </div>
                <div className='flex flex-col gap-[10px] font-semibold'>
                  <div className='flex sm:flex-col gap-[30px]'>
                    <div className='flex gap-1  '> <img src={check} alt="" /> <p>HTML</p></div>
                    <div className='flex gap-1  '><img src={check} alt="" /> <p>CSS</p></div>
                    <div className='flex gap-1  '><img src={check} alt="" /> <p>Javascript</p></div>
                    <div className='flex gap-1  '><img src={check} alt="" /><p>React JS</p></div>
                    <div className='flex gap-1  '><img src={check} alt="" /> <p>Tailwind CSS</p></div>
                  </div>
                  <div className='flex sm:flex-col gap-[30px]'>
                  <div className='flex gap-1  '><img src={check} alt="" /> <p>GIT & GITHUB</p></div>
                  <div className='flex gap-1  '><img src={check} alt="" /> <p>Bootstrap</p></div>
                  </div>
                </div>
              </div>
              <div>
                <button className=' bg-[#FB9B02] text-[white] px-[20px] py-[10px] rounded-[15px] font-semibold border-[1px] border-solid border-[#FB9B02] hover:text-[#FB9B02] hover:bg-[white] transition duration-300'>Learn More</button>
              </div>
            </div>
          </div>
         
          </div>
          </SwiperSlide>
      <SwiperSlide >
        <div className='flex flex-col gap-[80px]'>
          <div className=' flex sm:flex-col gap-[50px] items-center border-[2px] border-solid border-[#FEF3C7] lg:p-[60px] sm:py-[50px]'>
            <div>
              <img src={c1} className='sm:w-[85vw]' alt="" />
            </div>
            <div className='flex flex-col lg:items-end gap-[30px]'>
              <div className='flex flex-col gap-[20px]'>
                <div>
                  <h1 className=' font-semibold text-[30px] sm:text-[20px]'>FULL-STACK DEVELOPMENT</h1>
                </div>
                <div>
                  <h3 className='capitalize lg:w-[33vw] sm:w-[80vw] text-[14px]  '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue.</h3>
                </div>
                <div className='flex flex-col gap-[10px] font-semibold'>
                  <div className='flex sm:flex-col gap-[30px]'>
                    <div className='flex gap-1  '> <img src={check} alt="" /> <p>HTML</p></div>
                    <div className='flex gap-1  '><img src={check} alt="" /> <p>CSS</p></div>
                    <div className='flex gap-1  '><img src={check} alt="" /> <p>Javascript</p></div>
                    <div className='flex gap-1  '><img src={check} alt="" /><p>React JS</p></div>
                    <div className='flex gap-1  '><img src={check} alt="" /> <p>Tailwind CSS</p></div>
                  </div>
                  <div className='flex sm:flex-col gap-[30px]'>
                  <div className='flex gap-1  '><img src={check} alt="" /> <p>GIT & GITHUB</p></div>
                  <div className='flex gap-1  '><img src={check} alt="" /> <p>Bootstrap</p></div>
                  </div>
                </div>
              </div>
              <div>
                <button className=' bg-[#FB9B02] text-[white] px-[20px] py-[10px] rounded-[15px] font-semibold border-[1px] border-solid border-[#FB9B02] hover:text-[#FB9B02] hover:bg-[white] transition duration-300'>Learn More</button>
              </div>
            </div>
          </div>
          <div className=' flex sm:flex-col gap-[50px] items-center border-[2px] border-solid border-[#FEF3C7] lg:p-[60px] sm:py-[50px]'>
            <div>
              <img src={c2} className='sm:w-[85vw]' alt="" />
            </div>
            <div className='flex flex-col lg:items-end gap-[30px]'>
              <div className='flex flex-col gap-[20px]'>
                <div>
                  <h1 className=' font-semibold text-[30px] sm:text-[20px]'>MOBILE APP DEVELOPMENT</h1>
                </div>
                <div>
                  <h3 className='capitalize lg:w-[33vw] sm:w-[80vw] text-[14px]  '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue.</h3>
                </div>
                <div className='flex flex-col gap-[10px] font-semibold'>
                  <div className='flex sm:flex-col gap-[30px]'>
                    <div className='flex gap-1  '> <img src={check} alt="" /> <p>HTML</p></div>
                    <div className='flex gap-1  '><img src={check} alt="" /> <p>CSS</p></div>
                    <div className='flex gap-1  '><img src={check} alt="" /> <p>Javascript</p></div>
                    <div className='flex gap-1  '><img src={check} alt="" /><p>React JS</p></div>
                    <div className='flex gap-1  '><img src={check} alt="" /> <p>Tailwind CSS</p></div>
                  </div>
                  <div className='flex sm:flex-col gap-[30px]'>
                  <div className='flex gap-1  '><img src={check} alt="" /> <p>GIT & GITHUB</p></div>
                  <div className='flex gap-1  '><img src={check} alt="" /> <p>Bootstrap</p></div>
                  </div>
                </div>
              </div>
              <div>
                <button className=' bg-[#FB9B02] text-[white] px-[20px] py-[10px] rounded-[15px] font-semibold border-[1px] border-solid border-[#FB9B02] hover:text-[#FB9B02] hover:bg-[white] transition duration-300'>Learn More</button>
              </div>
            </div>
          </div>
          <div className=' flex sm:flex-col gap-[50px] items-center border-[2px] border-solid border-[#FEF3C7] lg:p-[60px] sm:py-[50px]'>
            <div>
              <img src={c3} className='sm:w-[85vw]' alt="" />
            </div>
            <div className='flex flex-col lg:items-end gap-[30px]'>
              <div className='flex flex-col gap-[20px]'>
                <div>
                  <h1 className=' font-semibold text-[30px] sm:text-[20px] sm:w-[70vw]'>WORDPRESS DEVELOPMENT</h1>
                </div>
                <div>
                  <h3 className='capitalize lg:w-[33vw] sm:w-[80vw] text-[14px]  '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue.</h3>
                </div>
                <div className='flex flex-col gap-[10px] font-semibold'>
                  <div className='flex sm:flex-col gap-[30px]'>
                    <div className='flex gap-1  '> <img src={check} alt="" /> <p>HTML</p></div>
                    <div className='flex gap-1  '><img src={check} alt="" /> <p>CSS</p></div>
                    <div className='flex gap-1  '><img src={check} alt="" /> <p>Javascript</p></div>
                    <div className='flex gap-1  '><img src={check} alt="" /><p>React JS</p></div>
                    <div className='flex gap-1  '><img src={check} alt="" /> <p>Tailwind CSS</p></div>
                  </div>
                  <div className='flex sm:flex-col gap-[30px]'>
                  <div className='flex gap-1  '><img src={check} alt="" /> <p>GIT & GITHUB</p></div>
                  <div className='flex gap-1  '><img src={check} alt="" /> <p>Bootstrap</p></div>
                  </div>
                </div>
              </div>
              <div>
                <button className=' bg-[#FB9B02] text-[white] px-[20px] py-[10px] rounded-[15px] font-semibold border-[1px] border-solid border-[#FB9B02] hover:text-[#FB9B02] hover:bg-[white] transition duration-300'>Learn More</button>
              </div>
            </div>
          </div>
          <div className=' flex sm:flex-col gap-[50px] items-center border-[2px] border-solid border-[#FEF3C7] lg:p-[60px] sm:py-[50px]'>
            <div>
              <img className='sm:w-[85vw]' src={c4} alt="" />
            </div>
            <div className='flex flex-col lg:items-end gap-[30px]'>
              <div className='flex flex-col gap-[20px]'>
                <div>
                  <h1 className=' font-semibold text-[30px] sm:text-[20px]'>DIGITAL MARKETING</h1>
                </div>
                <div>
                  <h3 className='capitalize lg:w-[33vw] sm:w-[80vw] text-[14px]  '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue.</h3>
                </div>
                <div className='flex flex-col gap-[10px] font-semibold'>
                  <div className='flex sm:flex-col gap-[30px]'>
                    <div className='flex gap-1  '> <img src={check} alt="" /> <p>HTML</p></div>
                    <div className='flex gap-1  '><img src={check} alt="" /> <p>CSS</p></div>
                    <div className='flex gap-1  '><img src={check} alt="" /> <p>Javascript</p></div>
                    <div className='flex gap-1  '><img src={check} alt="" /><p>React JS</p></div>
                    <div className='flex gap-1  '><img src={check} alt="" /> <p>Tailwind CSS</p></div>
                  </div>
                  <div className='flex sm:flex-col gap-[30px]'>
                  <div className='flex gap-1  '><img src={check} alt="" /> <p>GIT & GITHUB</p></div>
                  <div className='flex gap-1  '><img src={check} alt="" /> <p>Bootstrap</p></div>
                  </div>
                </div>
              </div>
              <div>
                <button className=' bg-[#FB9B02] text-[white] px-[20px] py-[10px] rounded-[15px] font-semibold border-[1px] border-solid border-[#FB9B02] hover:text-[#FB9B02] hover:bg-[white] transition duration-300'>Learn More</button>
              </div>
            </div>
          </div>
         
          </div>
          </SwiperSlide>

        </Swiper>
        </div>

        {/* <div className='flex items-center justify-center gap-3 mt-[4%] '>
          <button className='bg-[#C12DC1] p-2 rounded-lg text-white font-bold'>1</button>
          <button  className='bg-[#F8E7F8] p-2 rounded-lg text-[#FB9B02] font-bold'>2</button>
          <button  className='bg-[#F8E7F8] p-2 rounded-lg text-[#FB9B02] font-bold'>3</button>
        </div> */}
    </div>
    </div>
  )
}

export default Allcourses