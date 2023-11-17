import React from 'react'
import log from '../Components/Images/homepage/Toshconsult Img 1 (1).png'

function Formpage() {
  return (
    <div className='flex items-center justify-center'>
        <div className='w-[70%] flex flex-col mt-[8%]  '>
            <div className='flex items-center justify-center'><img src={log} alt="" /></div>
            <div className='bg-[#FEF3C7B2] mt-12 rounded-lg'>
                <h2 className='text-[#FB9B02] py-4 font-bold ml-10'>Register For Our Training</h2>
            </div>
            <div className='lg:flex justify-between mt-8'>
                <div className='flex flex-col lg:w-[45%] font-bold gap-2'>
                    <label htmlFor="">FULL NAME</label>
                    <input className='border rounded' type="text" />
                </div>
                <div className='flex flex-col lg:w-[45%] font-bold gap-2'>
                    <label htmlFor="">EMAIL</label>
                    <input className='border rounded' type="text" />
                </div>                
            </div>
            <div className='flex flex-col font-bold mt-8 gap-2'>
                    <label htmlFor="">CHOOSE COURSE</label>
                    <input className='border rounded' type="text" />
            </div>
            <div className='lg:flex justify-between mt-8'>
                <div className='flex flex-col lg:w-[45%] font-bold gap-2'>
                    <label htmlFor="">STATE</label>
                    <input className='border rounded' type="text" />
                </div>
                <div className='flex flex-col lg:w-[45%] font-bold gap-2'>
                    <label htmlFor="">CITY</label>
                    <input className='border rounded' type="text" />
                </div>                
            </div>
            <div className='lg:flex justify-between mt-8'>
                <div className='flex flex-col lg:w-[45%] font-bold gap-2'>
                    <label htmlFor="">COURSE TYPE</label>                   
                    <input className='border rounded' type="text" />                   
                </div>
                <div className='flex flex-col lg:w-[45%] font-bold gap-2'>
                    <label htmlFor="">OTHERS</label>
                    <input className='border rounded' type="text" />
                </div>                
            </div>
            {/* //////////////QUESTION TAQ///////////// */}
            <div className='flex flex-col gap-6 font-bold mt-9'>
                <h4>WHY DO YOU WANT TO LEARN THIS COURSE?</h4>
                <h6>the question is meant to help us familiarize with your interest  and specifics skills.</h6>
                <textarea className='rounded-md border' name="" id="" cols="30" rows="10"></textarea>
                <h6 >Subtmit your application for our team to review. Our team will get back to you within 24 hours.</h6>
                <button className='bg-[#FB9B02] text-white py-3 rounded-md lg:w-[15%] sm: w-[25%]'>Submit</button>
                <div className='flex items-center justify-center'>
                    <h6 className='text-[#FB9B02] border-b  mb-8 border-[#FB9B02] mt-[5%] lg:w-[12%]  sm: w-[40%]'>Back to Home</h6>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Formpage