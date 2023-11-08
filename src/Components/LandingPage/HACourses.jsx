import React from 'react'
import check from '../Images/homepage/check 1.png'
import line from '../Images/homepage/Rectangle 25.png'
import ftab from '../Images/homepage/Rectangle 86.png'
import line2 from '../Images/homepage/Rectangle 24.png'
function HACourses() {
  return (
    <div className='bg-[#FEF3C780] justify-center flex flex-col w-[100%] h-[] items-center'>
    <div className=' flex flex-col gap-20 items-start justify-center'> 
      <div className='flex flex-col gap-3'>
        <h3 className='text-[#FB9B02] font-raleway font-semibold text-[20px]'>Courses</h3>
        <h1 className='text-[40px] font-raleway font-semibold'>Available Courses</h1>
        <h4 className='w-[42vw]'>Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit. Eget aenean accumsan bibendum 
        gravida maecenas augue. Lorem ipsum dolor sit 
        amet, consectetur adipiscing elit. Eget aenean 
        accumsan bibendum gravida maecenas augue.
        </h4>

      </div>
      <div className='flex flex-col items-center gap-20'>
        <div>
            <div className='bg-[white] rounded-[25px]'>
                <div>
                <img src={ftab} alt="" />
                </div>
                <div className='flex flex-col items-center gap-6 w-[100%] justify-center py-10'>
                    <div className='flex flex-col gap-3 items-center '>
                        <h2 className='font-raleway font-bold'>FRONT-END DEVELOPMENT</h2>
                        <img src={line} alt="" />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='flex gap-8'>
                            <div className='flex gap-1'>
                             <img src={check} alt="" />
                             <h5>HTML</h5>
                            </div>
                            <div className='flex gap-1'>
                             <img src={check} alt="" />
                             <h5>CSS</h5>
                            </div>
                            <div className='flex gap-1'>
                              <img src={check} alt="" />
                              <h5>Bootstrap</h5>
                            </div>
                        </div>
                        <div className='flex gap-8'>
                            <div className='flex gap-1'>
                              <img src={check} alt="" />
                              <h5>Tailwind CSS</h5>
                            </div>
                            <div className='flex gap-1'>
                              <img src={check} alt="" />
                              <h5>Javascript</h5>
                            </div>
                        </div>
                       <div className='flex gap-8'>
                        <div className='flex gap-1'>
                             <img src={check} alt="" />
                            <h5>React JS</h5>
                        </div>
                        <div className='flex gap-1'>
                             <img src={check} alt="" />
                            <h5>GIT & GITHUB</h5>
                        </div>
                       </div>
                   </div>
                   <div>
                    <button className='bg-[#C12DC1] rounded-[8px] py-2 px-20 text-[white]'>Learn More</button>
                    </div>
                </div>
            </div>
            <div className='bg-[white] rounded-[25px]'>
                <div>
                <img src={ftab} alt="" />
                </div>
                <div className='flex flex-col items-center gap-6 w-[100%] justify-center py-10'>
                    <div className='flex flex-col gap-3 items-center '>
                        <h2 className='font-raleway font-bold'>BACK-END DEVELOPMENT</h2>
                        <img src={line2} alt="" />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='flex gap-8'>
                            <div className='flex gap-1'>
                             <img src={check} alt="" />
                             <h5>HTML</h5>
                            </div>
                            <div className='flex gap-1'>
                             <img src={check} alt="" />
                             <h5>CSS</h5>
                            </div>
                            <div className='flex gap-1'>
                              <img src={check} alt="" />
                              <h5>Bootstrap</h5>
                            </div>
                        </div>
                        <div className='flex gap-8'>
                            <div className='flex gap-1'>
                              <img src={check} alt="" />
                              <h5>Tailwind CSS</h5>
                            </div>
                            <div className='flex gap-1'>
                              <img src={check} alt="" />
                              <h5>Javascript</h5>
                            </div>
                        </div>
                       <div className='flex gap-8'>
                        <div className='flex gap-1'>
                             <img src={check} alt="" />
                            <h5>React JS</h5>
                        </div>
                        <div className='flex gap-1'>
                             <img src={check} alt="" />
                            <h5>GIT & GITHUB</h5>
                        </div>
                       </div>
                   </div>
                   <div>
                    <button className='bg-[#C12DC1] rounded-[8px] py-2 px-20 text-[white]'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>

  )
}

export default HACourses
