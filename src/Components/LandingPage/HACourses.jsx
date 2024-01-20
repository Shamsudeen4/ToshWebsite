import React from 'react'
import check from '../Images/homepage/check 1.png'
import line from '../Images/homepage/Rectangle 25.png'
import ftab from '../Images/homepage/Rectangle 86.png'
import line2 from '../Images/homepage/Rectangle 24.png'
import stab from '../Images/homepage/stab.png'
import ttab from '../Images/homepage/ttab.png'
import fftab from '../Images/homepage/fftab.png'
import fiftab from '../Images/homepage/fiftab.png'
import sstab from '../Images/homepage/sstab.png'
function HACourses() {
  return (
    <div className='bg-[white] justify-center flex flex-col w-[100%] lg:h-[200vh]   items-center'>
    <div className=' flex flex-col gap-20  sm:gap-12 items-start justify-center lg:m-44 sm:m-12'> 
      <div className='flex flex-col gap-3'>
        <h3 className='text-[#FB9B02] font-raleway font-semibold text-[20px]'>Courses</h3>
        <h1 className='text-[40px] font-raleway font-semibold sm:text-[27px]'>Available Courses</h1>
        <h4 className='w-[42vw] sm:text-[14px] sm:w-[80vw]'>Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit. Eget aenean accumsan bibendum 
        gravida maecenas augue. Lorem ipsum dolor sit  
        amet, consectetur adipiscing elit. Eget aenean 
        accumsan bibendum gravida maecenas augue.
        </h4>

      </div>
      
      <div className='flex flex-col items-center gap-20'>
        <div className='flex sm:flex-col gap-[40px]'>
            <div className='bg-[white] rounded-[25px]  border-solid border-[#F8E7F8] border-2 '>
                <div><img className='rounded-tl-[25px] rounded-tr-[25px]' src={ftab} alt="" /></div>
                <div className='flex flex-col items-center gap-6 w-[100%] justify-center py-10'>
                    <div className='flex flex-col gap-3 items-center '>
                        <h2 className='font-raleway font-bold'>FRONT-END DEVELOPMENT</h2>
                        <img src={line} alt="" />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='flex gap-8'>
                            <div className='flex gap-1'>
                                 <img src={check} alt="" />
                                 <h5 className='sm:text-[14px]'>HTML</h5>
                            </div>
                            <div className='flex gap-1'>
                                 <img src={check} alt="" />
                                 <h5 className='sm:text-[14px]'>CSS</h5>
                            </div>
                            <div className='flex gap-1'>
                              <img src={check} alt="" />
                              <h5 className='sm:text-[14px]'>Bootstrap</h5>
                            </div>
                        </div>
                        <div className='flex gap-8'>
                            <div className='flex gap-1'>
                              <img src={check} alt="" />
                              <h5 className='sm:text-[14px] sm:w-[20vw]'>Tailwind CSS</h5>
                            </div>
                            <div className='flex gap-1'>
                              <img src={check} alt="" />
                              <h5 className='sm:text-[14px]'>Javascript</h5>
                            </div>
                        </div>
                       <div className='flex gap-8'>
                        <div className='flex gap-1'>
                             <img src={check} alt="" />
                            <h5 className='sm:text-[14px]'>React JS</h5>
                        </div>
                        <div className='flex gap-1'>
                             <img src={check} alt="" />
                            <h5 className='sm:text-[14px]'>GIT & GITHUB</h5>
                        </div>
                       </div>
                   </div>
                   <div>
                    <button className='bg-[#C12DC1] rounded-[8px] py-2 px-20 text-[white] border-[1px] border-solid border-[#C12DC1] hover:bg-transparent hover:text-[#C12DC1] transition duration-300'>Learn More</button>
                    </div>
                </div>
            </div>
            <div className='bg-[white] rounded-[25px] border-solid border-[#FEF3C7] border-2'>
                <div><img className='rounded-tl-[25px] rounded-tr-[25px]' src={stab} alt="" /></div>
                <div className='flex flex-col items-center gap-6 w-[100%] justify-center py-10'>
                    <div className='flex flex-col gap-3 items-center '>
                        <h2 className='font-raleway font-bold'>BACK-END DEVELOPMENT</h2>
                        <img src={line2} alt="" />
                    </div>
                    <div className='flex flex-col gap-3 '>
                        <div className='flex gap-5 sm:gap-2'>
                            <div className='flex gap-1'>
                             <img src={check} alt="" />
                             <h5 className='sm:text-[14px]'>Javascript</h5>
                            </div>
                            <div className='flex gap-1'>
                             <img src={check} alt="" />
                             <h5 className='sm:text-[14px] sm:w-[14vw]'>Node JS</h5>
                            </div>
                            <div className='flex gap-1'>
                              <img src={check} alt="" />
                              <h5 className='sm:text-[14px] sm:w-[16vw]'>Express JS</h5>
                            </div>
                        </div>
                        <div className='flex gap-5 sm:items-center sm:gap-3'>
                            <div className='flex gap-1 sm:gap-1'>
                              <img src={check} alt="" />
                              <h5 className=' sm:text-[14px]'>Passport JS</h5>
                            </div>
                            <div className='flex gap-1'>
                              <img src={check} alt="" />
                              <h5 className='sm:text-[14px]'>PostMan</h5>
                            </div>
                            <div className='flex gap-1'>
                              <img src={check} alt="" />
                              <h5 className='sm:text-[14px]'>MongoDB</h5>
                            </div>
                        </div>
                       <div className='flex gap-5 sm:gap-4'>
                        <div className='flex gap-1'>
                             <img src={check} alt="" />
                             <h5 className='sm:text-[14px]'>Mongoose</h5>
                        </div>
                        <div className='flex gap-1'>
                             <img src={check} alt="" />
                             <h5 className='sm:text-[14px]'>GIT & GITHUB</h5>
                        </div>
                       </div>
                   </div>
                   <div>
                    <button className='bg-[#FB9B02] rounded-[8px] py-2 px-20 text-[white] border-[1px] border-solid border-[#FB9B02] hover:bg-transparent hover:text-[#FB9B02] transition duration-300'>Learn More</button>
                    </div>
                </div>
            </div>
            <div className='bg-[white] rounded-[25px] border-solid border-[#F8E7F8] border-2 sm:hidden'>
                <div>
                <img className='rounded-tl-[25px] rounded-tr-[25px]' src={ttab} alt="" />
                </div>
                <div className='flex flex-col items-center gap-[30px] w-[100%] justify-center py-7 text-center '>
                    <div className='flex flex-col gap-3 items-center '>
                        <h2 className='font-raleway font-bold w-[15vw]'>JAVASCRIPT FULL-STACK DEVELOPMENT</h2>
                        <img src={line} alt="" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className='flex gap-5'>
                            <div className='flex gap-0'>
                             <img src={check} alt="" />
                             <h5 className='text-[14px]'>HTML</h5>
                            </div>
                            <div className='flex gap-0'>
                             <img src={check} alt="" />
                             <h5 className='text-[14px]'>CSS</h5>
                            </div>
                            <div className='flex gap-0'>
                              <img src={check} alt="" />
                              <h5 className='text-[14px]'>Javascripts</h5>
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <div className='flex gap-1'>
                              <img src={check} alt="" />
                              <h5 className='text-[14px]'>Bootstrap</h5>
                            </div>
                            <div className='flex gap-1'>
                              <img src={check} alt="" />
                              <h5 className='text-[14px]'>React JS</h5>
                            </div>
                            <div className='flex gap-1'>
                              <img src={check} alt="" />
                              <h5 className='text-[14px]'>Node JS</h5>
                            </div>
                        </div>
                       <div className='flex gap-5'>
                        <div className='flex gap-1'>
                             <img src={check} alt="" />
                            <h5 className='text-[14px]'>Express JS</h5>
                        </div>
                        <div className='flex gap-1'>
                             <img src={check} alt="" />
                            <h5 className='text-[14px]'>Passport JS</h5>
                        </div>
                        <div className='flex gap-1'>
                             <img src={check} alt="" />
                            <h5 className='text-[14px]'>Socket IO</h5>
                        </div>
                       </div>
                       <div className='flex gap-5'>
                        <div className='flex gap-1'>
                             <img src={check} alt="" />
                            <h5 className='text-[14px]'>MongoDB</h5>
                        </div>
                        <div className='flex gap-1'>
                             <img src={check} alt="" />
                            <h5 className='text-[14px]'>GIT & GITHUB</h5>
                        </div>
                        <div className='flex gap-1'>
                             <img src={check} alt="" />
                            <h5 className='text-[14px]'>Mongoose</h5>
                        </div>
                       </div>
                   </div>
                   <div>
                    <button className='bg-[#C12DC1] rounded-[8px] py-2 px-20 text-[white] border-[1px] border-solid border-[#C12DC1] hover:bg-transparent hover:text-[#C12DC1] transition duration-300'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex sm:flex-col gap-[40px]'>
            <div className='bg-[white] rounded-[25px] border-solid border-[#F8E7F8] border-2'>
                <div><img className='rounded-tl-[25px] rounded-tr-[25px]' src={fftab} alt="" /></div>
                <div className='flex flex-col items-center gap-6 w-[100%] justify-center py-10'>
                    <div className='flex flex-col gap-3 items-center text-center '>
                        <h2 className='font-raleway font-bold w-[15vw] sm:w-[43vw]'>PYTHON FULL-STACK DEVELOPMENT</h2>
                        <img src={line} alt="" />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='flex gap-8'>
                            <div className='flex gap-1'>
                                 <img src={check} alt="" />
                                 <h5 className='sm:text-[14px]'>Python</h5>
                            </div>
                            <div className='flex gap-1'>
                                 <img src={check} alt="" />
                                 <h5 className='sm:text-[14px]'>Django</h5>
                            </div>
                            <div className='flex gap-1'>
                              <img src={check} alt="" />
                              <h5 className='sm:text-[14px]'>PostGrel</h5>
                            </div>
                        </div>
                        <div className='flex gap-8'>
                            <div className='flex gap-1'>
                              <img src={check} alt="" />
                              <h5 className='sm:text-[14px]'>Bootstrap</h5>
                            </div>
                            <div className='flex gap-1'>
                              <img src={check} alt="" />
                              <h5 className='sm:text-[14px]'>GIT & GITHUB</h5>
                            </div> 
                        </div>
                       <div className='flex gap-8'>
                        <div className='flex gap-1'>
                             <img src={check} alt="" />
                            <h5 className='sm:text-[14px]' >HTML</h5>
                        </div>
                        <div className='flex gap-1'>
                             <img src={check} alt="" />
                            <h5 className='sm:text-[14px]'>CSS</h5>
                        </div>
                        <div className='flex gap-1'>
                             <img src={check} alt="" />
                            <h5 className='sm:text-[14px]'>Javascript</h5>
                        </div>
                       </div>
                   </div>
                   <div>
                    <button className='bg-[#C12DC1] rounded-[8px] py-2 px-20 text-[white] border-[1px] border-solid border-[#C12DC1] hover:bg-transparent hover:text-[#C12DC1] transition duration-300'>Learn More</button>
                    </div>
                </div>
            </div>
            <div className='bg-[white] rounded-[25px] border-solid border-[#FEF3C7] border-2'>
                <div><img className='rounded-tl-[25px] rounded-tr-[25px]' src={fiftab} alt="" /></div>
                <div className='flex flex-col items-center gap-6 w-[100%] justify-center py-10'>
                    <div className='flex flex-col gap-3 items-center '>
                        <h2 className='font-raleway font-bold'>UI/UX DESIGN</h2>
                        <img src={line2} alt="" />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='flex gap-5'>
                            <div className='flex gap-1'>
                             <img src={check} alt="" />
                             <h5 className='sm:text-[14px] sm:w-[16vw]'>UI Design</h5>
                            </div>
                            <div className='flex gap-1'>
                             <img src={check} alt="" />
                             <h5 className='sm:text-[14px]'>Figma</h5>
                            </div>
                            <div className='flex gap-1'>
                              <img src={check} alt="" />
                              <h5 className='sm:text-[14px] sm:w-[17vw]'>UX Design</h5>
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <div className='flex gap-1'>
                              <img src={check} alt="" />
                              <h5 className='sm:text-[14px] sm:w-[23vw]'>User Research</h5>
                            </div>
                            <div className='flex gap-1'>
                              <img src={check} alt="" />
                              <h5 className='sm:text-[14px] sm:w-[23vw]'>User Journey</h5>
                            </div>
                          
                        </div>
                       <div className='flex gap-5'>
                        <div className='flex gap-1'>
                             <img src={check} alt="" />
                             <h5 className='sm:text-[14px] sm:w-[16vw]'>User Flow</h5>
                        </div>
                        <div className='flex gap-1'>
                             <img src={check} alt="" />
                             <h5 className='sm:text-[14px]'>Wireframe</h5>
                        </div>
                       </div>
                   </div>
                   <div>
                    <button className='bg-[#FB9B02] rounded-[8px] py-2 px-20 text-[white] border-[1px] border-solid border-[#FB9B02] hover:bg-transparent hover:text-[#FB9B02] transition duration-300'>Learn More</button>
                    </div>
                </div>
            </div>
            <div className='bg-[white] rounded-[25px] border-solid border-[#F8E7F8] border-2 sm:hidden'>
                <div>
                <img className=' w-[351px] h-[210px] rounded-tl-[25px] rounded-tr-[25px]' src={sstab} alt="" />
                </div>
                <div className='flex flex-col items-center gap-[29px] w-[100%] justify-center py-7 text-center'>
                    <div className='flex flex-col gap-3 items-center '>
                        <h2 className='font-raleway font-bold w-[15vw]'>MOBILE APP DEVELOPMENT</h2>
                        <img src={line} alt="" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className='flex gap-5'>
                            <div className='flex gap-0'>
                             <img src={check} alt="" />
                             <h5 className='text-[14px]'>Javascript</h5>
                            </div>
                            <div className='flex gap-0'>
                             <img src={check} alt="" />
                             <h5 className='text-[14px]'>React JS</h5>
                            </div>
                            <div className='flex gap-0'>
                              <img src={check} alt="" />
                              <h5 className='text-[14px]'>React Native</h5>
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <div className='flex gap-1'>
                              <img src={check} alt="" />
                              <h5 className='text-[14px]'>Expo</h5>
                            </div>
                            <div className='flex gap-1'>
                              <img src={check} alt="" />
                              <h5 className='text-[14px]'>Node JS</h5>
                            </div>
                            <div className='flex gap-1'>
                              <img src={check} alt="" />
                              <h5 className='text-[14px]'>Express JS</h5>
                            </div>
                        </div>
                       <div className='flex gap-5'>
                        <div className='flex gap-1'>
                             <img src={check} alt="" />
                            <h5 className='text-[14px]'>Express JS</h5>
                        </div>
                        <div className='flex gap-1'>
                             <img src={check} alt="" />
                            <h5 className='text-[14px]'>Passport JS</h5>
                        </div>
                        <div className='flex gap-1'>
                             <img src={check} alt="" />
                            <h5 className='text-[14px]'>Socket IO</h5>
                        </div>
                       </div>
                       <div className='flex gap-5'>
                        <div className='flex gap-1'>
                             <img src={check} alt="" />
                            <h5 className='text-[14px]'>MongoDB</h5>
                        </div>
                        <div className='flex gap-1'>
                             <img src={check} alt="" />
                            <h5 className='text-[14px]'>GIT & GITHUB</h5>
                        </div>
                        <div className='flex gap-1'>
                             <img src={check} alt="" />
                            <h5 className='text-[14px]'>Mongoose</h5>
                        </div>
                       </div>
                   </div>
                   <div>
                    <button className='bg-[#C12DC1] rounded-[8px] py-2 px-20 text-[white] border-[1px] border-solid border-[#C12DC1] hover:bg-transparent hover:text-[#C12DC1] transition duration-300'>Learn More</button>
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
