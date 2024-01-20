import React from 'react'
import a from '../Images/frontnbackend/Group 19.png'
import b from '../Images/frontnbackend/Group 20 (1).png'
import c from '../Images/frontnbackend/Group 21.png'
import d from '../Images/frontnbackend/Group 22.png'
import e from '../Images/frontnbackend/Group 23.png'
import f from '../Images/frontnbackend/Group 18 (1).png'
function Third() {
  return (
    <div className='  py-[4%]'> 
      <div className='flex flex-col items-center gap-[100px] sm:gap-[60px]'>
        <div className='flex flex-col items-center sm:text-center sm:gap-4'>
            <h1 className=' text-[50px] font-poppins font-bold w-[37vw] leading-[60px] text-center sm:w-[85vw] sm:leading-[45px] sm:text-[40px]'>Elevate Your Skills, Transform Your Future</h1>
            <h4 className=' text-[16px] text-center w-[43vw] font-euclid text-[#000000B2] sm:w-[75vw]'>At Toshconsult, we are committed to shaping 
                your tech skills and empowering your career. 
                Explore the unique benefits that set us apart 
                and pave the way for your success.
            </h4>
       </div>
        <div className='flex gap-[30px] sm:flex-col'>
            <div className='flex flex-col gap-[40px] '>
                <div className='flex items-start gap-6'>
                    <div>
                        <img src={a} alt="" />
                    </div>
                    <div className='font-euclid flex flex-col gap-2'>
                        <h3 className=' text-[20px] font-semibold '>Expert Guidance</h3>
                        <h4 className='text-[14px]  w-[15vw] text-[#000000B2] sm:w-[60vw]'>Learn from Industry 
                            Professionals 
                            Dedicated to Your 
                            Success
                        </h4>
                    </div>
                </div>
                <div className='flex items-start gap-6'>
                    <div>
                        <img src={d} alt="" />
                    </div>
                    <div className='font-euclid flex flex-col gap-2'>
                        <h3 className=' text-[20px] font-semibold '>Industry Relevance</h3>
                        <h4 className='text-[14px]  w-[17vw] text-[#000000B2] sm:w-[60vw]'>Stay Ahead with the Latest 
                        Technologies and Industry Trends
                        </h4>
                    </div>
                </div>
                
            </div>
            <div className='flex flex-col gap-[40px]'>
                <div className='flex items-start gap-6'>
                    <div>
                        <img src={b} alt="" />
                    </div>
                    <div className='font-euclid flex flex-col gap-2'>
                        <h3 className=' text-[20px] font-semibold '>Hands-on Experience</h3>
                        <h4 className='text-[14px]  w-[17vw] text-[#000000B2] sm:w-[60vw]'>Apply Your Skills to Practical, 
                        Hands-on Projects for Deep Learning
                        </h4>
                    </div>
                </div>
                <div className='flex items-start gap-6'>
                    <div>
                        <img src={e} alt="" />
                    </div>
                    <div className='font-euclid flex flex-col gap-2'>
                        <h3 className=' text-[20px] font-semibold '>Career Support</h3>
                        <h4 className='text-[14px]  w-[17vw] text-[#000000B2] sm:w-[60vw]'>Boost Your Career with Our 
                        Exclusive Job Placement Support
                        </h4>
                    </div>
                </div>
                
            </div>
            <div className='flex flex-col gap-[40px]'>
                <div className='flex items-start gap-6'>
                    <div>
                        <img src={c} alt="" />
                    </div>
                    <div className='font-euclid flex flex-col gap-2'>
                        <h3 className=' text-[20px] font-semibold '>Personalized Learning</h3>
                        <h4 className='text-[14px]  w-[18vw] text-[#000000B2] sm:w-[60vw]'>Customized Learning Paths to 
                        Match Your Learning Pace and Goalss
                        </h4>
                    </div>
                </div>
                <div className='flex items-start gap-6'>
                    <div>
                        <img src={f} alt="" />
                    </div>
                    <div className='font-euclid flex flex-col gap-2'>
                        <h3 className=' text-[20px] font-semibold '>Community Engagement</h3>
                        <h4 className='text-[14px]  w-[15vw] text-[#000000B2] sm:w-[60vw]'>Connect with Peers, 
                        Collaborate on Projects, and Expand Your Network
                        </h4>
                    </div>
                </div>
                
            </div>
           
        </div>
      </div>
    </div>
  )
}

export default Third
