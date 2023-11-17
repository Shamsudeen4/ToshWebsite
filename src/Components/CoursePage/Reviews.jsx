import React from 'react'
import eli4 from '../Images/coursepage/Ellipse 4.png'
import eli5 from '../Images/coursepage/Ellipse 4 (1).png'


function Reviews() {
  return (
    <div className='bg-[#FEF3C780] gap-10 lg:flex flex-col justify-center  py-12 items-center mt-[8%]'>
      <div className='lg:w-[40%] text-center gap-5 flex flex-col'>
        <h1 className='font-bold text-[20px]'>What Our Students Are Saying</h1>
        <h6 className='text-[gray]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Eget aenean accumsan bibendum gravida maecenas augue.</h6>
      </div>  
      {/* ///////////////////Reviews////////////// */}
      <div className='lg:flex items-center justify-around sm: ml-20'>
        <div className=' flex flex-col bg-white p-10 shadow-md  gap-4 lg:w-[35%] sm: w-[70%] '>
          <img className='w-[20%]' src={eli4} alt="" />
          <h2 className='font-bold'>Ibrahim Omotosho</h2>
          <h6>“Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Eget aenean accumsan bibendum gravida maecenas augue.”
          </h6>
        </div>

        {/* ////////////////////SECOND REVIEW///////// */}
        <div className=' flex flex-col bg-white p-10 shadow-md gap-4 lg:w-[40%] sm: w-[70%] sm: mt-[20px]'>
          <img className='w-[20%]' src={eli5} alt="" />
          <h2 className='font-bold'>Ibrahim Omotosho</h2>
          <h6>“ Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Eget aenean accumsan bibendum gravida maecenas augue. “
          </h6>
        </div>      
      </div>
      <a className='flex text-[#C12DC1] border-b font-bold lg:relative left-[40%] border-solid' href="/">View all reviews</a>
     
    </div>
  )
}

export default Reviews