import React from 'react'
import p1 from '../Images/servicepage/Rectangle 69.png'
import p2 from '../Images/servicepage/Rectangle 70.png'
import p3 from '../Images/servicepage/Rectangle 71.png'
import p5 from '../Images/servicepage/Rectangle 73.png'
import p6 from '../Images/servicepage/Rectangle 74.png'
import p7 from '../Images/servicepage/Rectangle 75.png'

function Allservices() {
  return (
    <div className='lg:flex flex-col'>
        <div className='ml-[8%] flex-col lg:w-[45%] gap-4 flex mt-[10%]'>
            <h5 className='text-[#FB9B02] font-bold'>All Services</h5>
            <h1 className='font-bold lg:text-[35px]'>Available Courses</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, 
               consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue.
            </p>
        </div>
        <div className='Services grid lg:grid-cols-3'>
              {/* //////////////////Services 1////////////////////////// */}
          <div className='flex flex-col w-[90%] mt-20 sm: ml-[10%] gap-3'>
            <div><img className='w-[80%]' src={p1} alt="" /></div>          
            <h1 className='font-bold lg:text-[20px] '>MOBILE APP DEVELOPMENT</h1>
            <h6 className='text-[gray] w-[90%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Eget aenean accumsan bibendum gravida maecenas augue. Lorem 
               ipsum dolor sit amet, consectetur adipiscing.
            </h6>          
            <button className='bg-[#C12DC1] border-0 rounded-md w-[34%] py-2 text-white lg:font-bold'>Hire Us Now</button>
          </div>
             {/* //////////////////Services 2////////////////////////// */}
          <div className='flex flex-col w-[80%] mt-20 sm: ml-[10%] gap-3'>
            <div><img className='w-[90%]' src={p2} alt="" /></div>          
            <h1 className='font-bold lg:text-[20px] '>WEBSITE DEVELOPMENT</h1>
            <h6 className='text-[gray] w-[90%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Eget aenean accumsan bibendum gravida maecenas augue. Lorem 
               ipsum dolor sit amet, consectetur adipiscing.
            </h6>          
            <button className='bg-[#C12DC1] border-0 rounded-md w-[34%] py-2 text-white lg:font-bold'>Hire Us Now</button>
          </div>
            {/* //////////////////Services 3////////////////////////// */}
          <div className='flex flex-col w-[80%] mt-20 sm: ml-[10%] gap-3'>
            <div><img className='w-[90%]' src={p3} alt="" /></div>          
            <h1 className='font-bold lg:text-[20px] '>UI/UX DESIGN</h1>
            <h6 className='text-[gray] w-[90%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Eget aenean accumsan bibendum gravida maecenas augue. Lorem 
               ipsum dolor sit amet, consectetur adipiscing.
            </h6>          
            <button className='bg-[#C12DC1] border-0 rounded-md w-[34%] py-2 text-white lg:font-bold'>Hire Us Now</button>
          </div>

            {/* //////////////////Services 4////////////////////////// */}
          <div className='flex flex-col w-[80%] mt-20 sm: ml-[10%] gap-3'>
            <div><img className='w-[90%]' src={p6} alt="" /></div>          
            <h1 className='font-bold lg:text-[20px] '>SOCIAL MEDIA MANAGEMENT</h1>
            <h6 className='text-[gray] w-[90%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Eget aenean accumsan bibendum gravida maecenas augue. Lorem 
               ipsum dolor sit amet, consectetur adipiscing.
            </h6>          
            <button className='bg-[#C12DC1] border-0 rounded-md w-[34%] py-2 text-white lg:font-bold'>Hire Us Now</button>
          </div>

            {/* //////////////////Services 5///////////////////////// */}
          <div className='flex flex-col w-[80%] mt-20 sm: ml-[10%] gap-3'>
            <div><img className='w-[90%]' src={p5} alt="" /></div>          
            <h1 className='font-bold lg:text-[20px] '>SOFTWARE DEVELOPMENT</h1>
            <h6 className='text-[gray] w-[90%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Eget aenean accumsan bibendum gravida maecenas augue. Lorem 
               ipsum dolor sit amet, consectetur adipiscing.
            </h6>          
            <button className='bg-[#C12DC1] border-0 rounded-md w-[34%] py-2 text-white lg:font-bold'>Hire Us Now</button>
          </div>

            {/* //////////////////Services 6////////////////////////// */}
          <div className='flex flex-col w-[80%] mt-20 sm: ml-[10%] gap-3'>
            <div><img className='w-[90%]' src={p6} alt="" /></div>          
            <h1 className='font-bold lg:text-[20px] '>DIGITAL MARKETING</h1>
            <h6 className='text-[gray] w-[90%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Eget aenean accumsan bibendum gravida maecenas augue. Lorem 
               ipsum dolor sit amet, consectetur adipiscing.
            </h6>          
            <button className='bg-[#C12DC1] border-0 rounded-md w-[34%] py-2 text-white lg:font-bold'>Hire Us Now</button>
          </div>

            {/* //////////////////Services 7////////////////////////// */}
          <div className='flex flex-col w-[80%] mt-20 sm: ml-[10%] gap-3'>
            <div><img className='w-[90%]' src={p7} alt="" /></div>          
            <h1 className='font-bold lg:text-[20px] '>SEO MANAGEMENT</h1>
            <h6 className='text-[gray] w-[90%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Eget aenean accumsan bibendum gravida maecenas augue. Lorem 
               ipsum dolor sit amet, consectetur adipiscing.
            </h6>          
            <button className='bg-[#C12DC1] border-0 rounded-md w-[34%] py-2 text-white lg:font-bold'>Hire Us Now</button>
          </div>    
    
        </div>
        {/* ////////////////SCICHING SECTION/////////// */}
        <div className='Switching   flex font-bold gap-1 items-center justify-center mt-9'>
          <button className='bg-[#C12DC1] p-2 rounded-lg text-white'>1</button>
          <button className='bg-[#C12DC1] p-2 rounded-lg text-[#FB9B02]'>2</button>
          <button className='bg-[#C12DC1] p-2 rounded-lg text-[#FB9B02]'>3</button>
        </div>
        
    </div>
  )
}

export default Allservices