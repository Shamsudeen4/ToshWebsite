import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { BsDot } from "react-icons/bs";
import mongo from '../Images/frontnbackend/mongo.png'
import api from '../Images/frontnbackend/api.png'
import js from '../Images/frontnbackend/js.png'
function Backrd() {
  return (
    <div className='  py-[8%]'>
      <div className=' flex flex-col items-center gap-[100px]'>
        <div className=' flex flex-col gap-[15px] items-center'>
            <h1 className=' text-[50px] font-poppins font-bold w-[36vw] leading-[50px]'>Our Curated Frontend Development Courses</h1>
            <h4 className=' font-euclid w-[43vw] text-center'>At Toshconsult, we are committed to shaping 
                your tech skills and empowering your career. 
                Explore the unique benefits that set us apart 
                and pave the way for your success.
            </h4>
        </div>
        <div className=' flex flex-col gap-[200px]'>
        <div className=' flex items-center'>
            <div>
                <img src={mongo} alt="" />
            </div>
            <div className=' relative top-11 right-16  font-euclid flex flex-col gap-[60px] shadow-xl bg-[#ffffff] py-[55px] px-[40px] items-end rounded-[20px]'>
                <div className=' flex flex-col gap-[35px]'>
                    <div className=' flex flex-col gap-[10px]'>
                        <div className=' flex gap-20 items-center'>
                            <div className=' flex flex-col gap-1'>
                                <h1 className=' font-poppins text-[30px] w-[15vw] font-bold leading-[35px]'>MongoDB and Mongoose</h1>
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
        <div className=' flex items-center'>
            <div>
                <img src={api} alt="" />
            </div>
            <div className=' relative top-11 right-16  font-euclid flex flex-col gap-[60px] shadow-xl bg-[#ffffff] py-[55px] px-[40px] items-end rounded-[20px]'>
                <div className=' flex flex-col gap-[35px]'>
                    <div className=' flex flex-col gap-[10px]'>
                        <div className=' flex gap-20 items-center'>
                            <div className=' flex flex-col gap-1'>
                                <h1 className=' font-poppins text-[30px] w-[25vw] font-bold leading-[35px]'>Back End Development and APIs Projects</h1>
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
        <div className=' flex items-center'>
            <div>
                <img src={js} alt="" />
            </div>
            <div className=' relative top-11 right-16  font-euclid flex flex-col gap-[60px] shadow-xl bg-[#ffffff] py-[55px] px-[40px] items-end rounded-[20px]'>
                <div className=' flex flex-col gap-[35px]'>
                    <div className=' flex flex-col gap-[10px]'>
                        <div className=' flex gap-20 items-center'>
                            <div className=' flex flex-col gap-1'>
                                <h1 className=' font-poppins text-[30px] w-[13vw] font-bold leading-[35px]'>Basic Node and Express</h1>
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

export default Backrd
