import React from 'react'
import p1 from '../Images/servicepage/Rectangle 69.png'
import p2 from '../Images/servicepage/Rectangle 70.png'
import p3 from '../Images/servicepage/Rectangle 71.png'
import p4 from '../Images/servicepage/Rectangle 72.png'
import p5 from '../Images/servicepage/Rectangle 73.png'
import p6 from '../Images/servicepage/Rectangle 74.png'
import p7 from '../Images/servicepage/Rectangle 75.png'

function Allservices() {
  return (
  <div className='w-[100%] flex justify-center'>
    <div className='flex flex-col font-raleway items-start gap-[80px]'>
        <div className=' flex-col lg:w-[45%] gap-4 flex mt-[10%]'>
            <h5 className='text-[#FB9B02] font-semibold'>All Services</h5>
            <h1 className='font-semibold lg:text-[35px] sm:text-[25px]'>Our Services</h1>
            <p className='text-[14px] w-[36vw] capitalize font-poppins sm:w-[85vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, 
               consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue.
            </p>
        </div>
        <div className='flex flex-col gap-[70px]'>

        
        <div className=' flex gap-[80px] sm:flex-col'>
              {/* //////////////////Services 1////////////////////////// */}
          <div className='flex flex-col gap-[25px] '>
            <div><img className=' sm:w-[85vw]' src={p1} alt="" /></div> 
            <div className='flex flex-col gap-[20px]'>         
            <h1 className='font-bold text-[20px]'>MOBILE APP DEVELOPMENT</h1>
            <h6 className=' capitalize w-[21vw] text-[#00000099] text-[14px] font-poppins font-semibold leading-[25px] sm:w-[85vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Eget aenean accumsan bibendum gravida maecenas augue. Lorem 
               ipsum dolor sit amet, consectetur adipiscing.</h6>   
            </div>
            <div> 
              <a href="/sservices">      
            <button className='bg-[#C12DC1] rounded-[17px]  
             text-white px-[30px] py-[20px] font-poppins border-[1px] 
             border-solid border-[#C12DC1] hover:text-[#C12DC1] 
             hover:bg-[white] 
             transition duration-300'>Learn More</button>
             </a>
            </div>
          </div>
          <div className='flex flex-col gap-[25px] '>
            <div><img className=' sm:w-[85vw]' src={p2} alt="" /></div> 
            <div className='flex flex-col gap-[20px]'>         
            <h1 className='font-bold text-[20px]'>WEBSITE DEVELOPMENT</h1>
            <h6 className=' capitalize w-[21vw] text-[#00000099] text-[14px] font-poppins font-semibold leading-[25px] sm:w-[85vw] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Eget aenean accumsan bibendum gravida maecenas augue. Lorem 
               ipsum dolor sit amet, consectetur adipiscing.</h6>   
            </div>
            <div>       
            <button className='bg-[#FB9B02] rounded-[17px]   text-white px-[30px] py-[20px] font-poppins border-[1px] border-solid border-[#FB9B02] hover:text-[#FB9B02] hover:bg-[white] transition duration-300'>Learn More</button>
            </div>
          </div>
          <div className='flex flex-col gap-[25px] '>
            <div><img className=' sm:w-[85vw]' src={p3} alt="" /></div> 
            <div className='flex flex-col gap-[20px]'>         
            <h1 className='font-bold text-[20px]'>UI/UX DESIGN</h1>
            <h6 className=' capitalize w-[21vw] text-[#00000099] text-[14px] font-poppins font-semibold leading-[25px] sm:w-[85vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Eget aenean accumsan bibendum gravida maecenas augue. Lorem 
               ipsum dolor sit amet, consectetur adipiscing.</h6>   
            </div>
            <div>       
            <a href="/services"><button className='bg-[#C12DC1] rounded-[17px]   text-white px-[30px] py-[20px] font-poppins border-[1px] border-solid border-[#C12DC1] hover:text-[#C12DC1] hover:bg-[white] transition duration-300'>Learn More</button>
            </a></div>
          </div>
        
    
        </div>
        <div className=' flex gap-[80px] sm:flex-col'>
              {/* //////////////////Services 1////////////////////////// */}
          <div className='flex flex-col gap-[25px] '>
            <div><img className='  sm:w-[85vw]' src={p4} alt="" /></div> 
            <div className='flex flex-col gap-[20px]'>         
            <h1 className='font-bold text-[20px]'>SOCIAL MEDIA MANAGEMENT</h1>
            <h6 className=' capitalize w-[21vw] text-[#00000099] text-[14px] font-poppins font-semibold leading-[25px] sm:w-[85vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Eget aenean accumsan bibendum gravida maecenas augue. Lorem 
               ipsum dolor sit amet, consectetur adipiscing.</h6>   
            </div>
            <div>       
            <button className='bg-[#C12DC1] rounded-[17px]   text-white px-[30px] py-[20px] font-poppins border-[1px] border-solid border-[#C12DC1] hover:text-[#C12DC1] hover:bg-[white] transition duration-300'>Learn More</button>
            </div>
          </div>
          <div className='flex flex-col gap-[25px] '>
            <div><img className=' sm:w-[85vw]' src={p5} alt="" /></div> 
            <div className='flex flex-col gap-[20px]'>         
            <h1 className='font-bold text-[20px]'>SOFTWARE DEVELOPMENT</h1>
            <h6 className=' capitalize w-[21vw] text-[#00000099] text-[14px] font-poppins font-semibold leading-[25px] sm:w-[85vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Eget aenean accumsan bibendum gravida maecenas augue. Lorem 
               ipsum dolor sit amet, consectetur adipiscing.</h6>   
            </div>
            <div>       
            <button className='bg-[#FB9B02] rounded-[17px]   text-white px-[30px] py-[20px] font-poppins border-[1px] border-solid border-[#FB9B02] hover:text-[#FB9B02] hover:bg-[white] transition duration-300'>Learn More</button>
            </div>
          </div>
          <div className='flex flex-col gap-[25px] '>
            <div><img className=' sm:w-[85vw]' src={p6} alt="" /></div> 
            <div className='flex flex-col gap-[20px]'>         
            <h1 className='font-bold text-[20px]'>DIGITAL MARKETING</h1>
            <h6 className=' capitalize w-[21vw] text-[#00000099] text-[14px] font-poppins font-semibold leading-[25px] sm:w-[85vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Eget aenean accumsan bibendum gravida maecenas augue. Lorem 
               ipsum dolor sit amet, consectetur adipiscing.</h6>   
            </div>
            <div>       
            <button className='bg-[#C12DC1] rounded-[17px]   text-white px-[30px] py-[20px] font-poppins border-[1px] border-solid border-[#C12DC1] hover:text-[#C12DC1] hover:bg-[white] transition duration-300'>Learn More</button>
            </div>
          </div>
        
    
        </div>
        <div className=' flex gap-[80px]'>
              {/* //////////////////Services 1////////////////////////// */}
          <div className='flex flex-col gap-[25px] '>
            <div><img className=' sm:w-[85vw]' src={p7} alt="" /></div> 
            <div className='flex flex-col gap-[20px]'>         
            <h1 className='font-bold text-[20px]'>SEO MANAGEMENT</h1>
            <h6 className=' capitalize w-[21vw] text-[#00000099] text-[14px] font-poppins font-semibold leading-[25px] sm:w-[85vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Eget aenean accumsan bibendum gravida maecenas augue. Lorem 
               ipsum dolor sit amet, consectetur adipiscing.</h6>   
            </div>
            <div>       
            <button className='bg-[#C12DC1] rounded-[17px]   text-white px-[30px] py-[20px] font-poppins border-[1px] border-solid border-[#C12DC1] hover:text-[#C12DC1] hover:bg-[white] transition duration-300'>Learn More</button>
            </div>
          </div>
          
        
    
        </div>
        <div>
            
         </div>

        
        </div>
        </div>
    </div>
  )
}

export default Allservices