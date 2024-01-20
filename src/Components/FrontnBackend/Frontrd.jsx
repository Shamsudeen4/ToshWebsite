import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { BsDot } from "react-icons/bs";
import js from '../Images/frontnbackend/Rectangle 29.png'
import html from '../Images/frontnbackend/Rectangle 30.png'
import hook from '../Images/frontnbackend/Rectangle 31.png'
function Frontrd() {
  return (
    <div className='  py-[8%]'>
      <div className=' flex flex-col items-center gap-[100px]'>
        <div className=' flex flex-col gap-[15px] items-center'>
            <h1 className=' text-[50px] font-poppins font-bold w-[36vw] leading-[50px] sm:text-[35px] sm:text-center sm:w-[70vw] sm:leading-[40px]'>Our Curated Frontend Development Courses</h1>
            <h4 className=' font-euclid w-[43vw] text-center sm:w-[75vw]'>At Toshconsult, we are committed to shaping 
                your tech skills and empowering your career. 
                Explore the unique benefits that set us apart 
                and pave the way for your success.
            </h4>
        </div>
        <div className=' flex flex-col gap-[200px] sm:items-center'>
        <div className=' flex items-center sm:flex-col sm:justify-center'>
            <div className=' sm:flex sm:items-center sm:justify-center '>
                <img className=' sm:w-[80%]' src={js} alt="" />
            </div>
            <div className=' lg:relative lg:top-11 lg:right-16  font-euclid flex flex-col gap-[60px] shadow-xl bg-[#ffffff] py-[55px] lg:px-[40px] items-end rounded-[20px] sm:items-center sm:gap-[25px]'>
                <div className=' flex flex-col gap-[35px]'>
                    <div className=' flex flex-col gap-[10px]'>
                        <div className=' flex gap-20 items-center sm:gap-8'>
                            <div className=' flex flex-col gap-1'>
                                <h1 className=' font-poppins text-[30px] w-[13vw] font-bold leading-[35px] sm:text-[24px] sm:leading-[25px] sm:w-[45vw]'>Fundamental of Javascript</h1>
                                <h4 className=' text-[#00000080] text-[16px] sm:w-[50vw]'>The beginners courses to be a pro. in javascript </h4>
                            </div>
                            <div className=' flex flex-col gap-1'>
                                <div>
                                    <h1 className=' text-[30px] font-bold font-poppins sm:text-[25px]'>N50,000</h1>
                                </div>
                                <div className=' flex gap-[6px]'>
                                    <h4 className='bg-[#FB9B02] text-[white] px-[10px] py-[2px] rounded-[10px] font-semibold sm:text-[14px]'>50% OFF</h4>
                                    <del className='font-semibold'>N100,000</del>
                                </div>
                            </div>
                        </div>
                        <div className=' flex  flex-col font-semibold gap-2'>
                            <div className='flex items-center  gap-8 sm:gap-[10px]'>
                                <div className=' flex  items-center gap-3'>
                                    <FaCheck />
                                    <h3 className='sm:w-[28vw]'>Data fetching</h3>
                                </div>
                                <div className=' flex  items-center gap-3'>
                                     <FaCheck />
                                    <h3>Variable</h3>
                                </div>
                                <div className=' flex  items-center gap-3'>
                                    <FaCheck />
                                    <h3>Mapping</h3>
                                </div>
                            </div> 
                            <div className='flex  items-center gap-8 sm:gap-[10px]'>
                                <div className=' flex gap-4'>
                                     <FaCheck />
                                    <h3>Lopping</h3>
                                </div>
                                <div className=' flex  items-center gap-3'>
                                     <FaCheck />
                                    <h3>JSON</h3>

                                </div>
                                <div className=' flex  items-center gap-3'>
                                     <FaCheck />
                                    <h3>Data Object</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' flex items-center font-semibold gap-[35px]'>
                        <div className='flex items-center'>
                            <BsDot size={20} />
                            <h3 className=''>Beginners</h3>
                        </div>
                        <div className='flex items-center'>
                            <BsDot size={20} />
                            <h3> 3 Weeks</h3>
                        </div>
                        <div className='flex items-center'>
                            <BsDot size={20} />
                            <h3>MON - FRI</h3>
                        </div>
                    </div>
                </div>
                <div className='flex gap-[10px]'>
                    <button className=' bg-[#FB9B02] text-[white] px-[30px] py-[10px] rounded-[30px] border-[2px] border-[#FB9B02] hover:text-[#FB9B02] hover:bg-[white] transition duration-300'>Request Quote</button>
                    <button className=' bg-[black] text-[white] px-[35px] py-[10px] rounded-[30px] border-[2px] border-[black] hover:text-[black] hover:bg-[white] transition duration-300'>Start Course</button>
                </div>
            </div>
        </div>
        <div className=' flex items-center sm:flex-col sm:items-center'>
        <div className=' sm:flex sm:items-center sm:justify-center '>
                <img className=' sm:w-[80%]' src={html} alt="" />
            </div>
            <div className=' relative top-11 right-16  font-euclid flex flex-col gap-[60px] shadow-xl bg-[#ffffff] py-[55px] px-[40px] items-end rounded-[20px]'>
                <div className=' flex flex-col gap-[35px]'>
                    <div className=' flex flex-col gap-[10px]'>
                        <div className=' flex gap-20 items-center'>
                            <div className=' flex flex-col gap-1'>
                                <h1 className=' font-poppins text-[30px] w-[20vw] font-bold leading-[35px]'>Fundamental HTML, CSS Framework</h1>
                                <h4 className=' text-[#00000080] text-[16px]'>The beginners courses to be a pro. in javascript </h4>
                            </div>
                            <div className=' flex flex-col gap-1'>
                                <div>
                                    <h1 className=' text-[30px] font-bold font-poppins'>N50,000</h1>
                                </div>
                                <div className=' flex gap-[6px]'>
                                    <h4 className='bg-[#FB9B02] text-[white] px-[10px] py-[2px] rounded-[10px] font-semibold'>50% OFF</h4>
                                    <del className='font-semibold'>N100,000</del>
                                </div>
                            </div>
                        </div>
                        <div className=' flex  flex-col font-semibold gap-2'>
                            <div className='flex items-center  gap-8'>
                                <div className=' flex  items-center gap-3'>
                                    <FaCheck />
                                    <h3>Data fetching</h3>
                                </div>
                                <div className=' flex  items-center gap-3'>
                                     <FaCheck />
                                    <h3>Variable</h3>
                                </div>
                                <div className=' flex  items-center gap-3'>
                                    <FaCheck />
                                    <h3>Mapping</h3>
                                </div>
                            </div> 
                            <div className='flex  items-center gap-8'>
                                <div className=' flex gap-4'>
                                     <FaCheck />
                                    <h3>Lopping</h3>
                                </div>
                                <div className=' flex  items-center gap-3'>
                                     <FaCheck />
                                    <h3>JSON</h3>

                                </div>
                                <div className=' flex  items-center gap-3'>
                                     <FaCheck />
                                    <h3>Data Object</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' flex items-center font-semibold gap-[35px]'>
                        <div className='flex items-center'>
                            <BsDot size={20} />
                            <h3 className=''>Beginners</h3>
                        </div>
                        <div className='flex items-center'>
                            <BsDot size={20} />
                            <h3> 3 Weeks</h3>
                        </div>
                        <div className='flex items-center'>
                            <BsDot size={20} />
                            <h3>MON - FRI</h3>
                        </div>
                    </div>
                </div>
                <div className='flex gap-[10px]'>
                    <button className=' bg-[#FB9B02] text-[white] px-[30px] py-[10px] rounded-[30px] border-[2px] border-[#FB9B02] hover:text-[#FB9B02] hover:bg-[white] transition duration-300'>Request Quote</button>
                    <button className=' bg-[black] text-[white] px-[35px] py-[10px] rounded-[30px] border-[2px] border-[black] hover:text-[black] hover:bg-[white] transition duration-300'>Start Course</button>
                </div>
            </div>
        </div>
        <div className=' flex items-center sm:flex-col sm:items-center'>
        <div className=' sm:flex sm:items-center sm:justify-center '>
                <img className=' sm:w-[80%]' src={hook} alt="" />
            </div>
            <div className=' relative top-11 right-16  font-euclid flex flex-col gap-[60px] shadow-xl bg-[#ffffff] py-[55px] px-[40px] items-end rounded-[20px]'>
                <div className=' flex flex-col gap-[35px]'>
                    <div className=' flex flex-col gap-[10px]'>
                        <div className=' flex gap-20 items-center'>
                            <div className=' flex flex-col gap-1'>
                                <h1 className=' font-poppins text-[30px] w-[13vw] font-bold leading-[35px]'>Fundamental Of React And Hooks</h1>
                                <h4 className=' text-[#00000080] text-[16px]'>The beginners courses to be a pro. in javascript </h4>
                            </div>
                            <div className=' flex flex-col gap-1'>
                                <div>
                                    <h1 className=' text-[30px] font-bold font-poppins'>N50,000</h1>
                                </div>
                                <div className=' flex gap-[6px]'>
                                    <h4 className='bg-[#FB9B02] text-[white] px-[10px] py-[2px] rounded-[10px] font-semibold'>50% OFF</h4>
                                    <del className='font-semibold'>N100,000</del>
                                </div>
                            </div>
                        </div>
                        <div className=' flex  flex-col font-semibold gap-2'>
                            <div className='flex items-center  gap-8'>
                                <div className=' flex  items-center gap-3'>
                                    <FaCheck />
                                    <h3>Data fetching</h3>
                                </div>
                                <div className=' flex  items-center gap-3'>
                                     <FaCheck />
                                    <h3>Variable</h3>
                                </div>
                                <div className=' flex  items-center gap-3'>
                                    <FaCheck />
                                    <h3>Mapping</h3>
                                </div>
                            </div> 
                            <div className='flex  items-center gap-8'>
                                <div className=' flex gap-4'>
                                     <FaCheck />
                                    <h3>Lopping</h3>
                                </div>
                                <div className=' flex  items-center gap-3'>
                                     <FaCheck />
                                    <h3>JSON</h3>

                                </div>
                                <div className=' flex  items-center gap-3'>
                                     <FaCheck />
                                    <h3>Data Object</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' flex items-center font-semibold gap-[35px]'>
                        <div className='flex items-center'>
                            <BsDot size={20} />
                            <h3 className=''>Beginners</h3>
                        </div>
                        <div className='flex items-center'>
                            <BsDot size={20} />
                            <h3> 3 Weeks</h3>
                        </div>
                        <div className='flex items-center'>
                            <BsDot size={20} />
                            <h3>MON - FRI</h3>
                        </div>
                    </div>
                </div>
                <div className='flex gap-[10px]'>
                    <button className=' bg-[#FB9B02] text-[white] px-[30px] py-[10px] rounded-[30px] border-[2px] border-[#FB9B02] hover:text-[#FB9B02] hover:bg-[white] transition duration-300'>Request Quote</button>
                    <button className=' bg-[black] text-[white] px-[35px] py-[10px] rounded-[30px] border-[2px] border-[black] hover:text-[black] hover:bg-[white] transition duration-300'>Start Course</button>
                </div>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Frontrd
