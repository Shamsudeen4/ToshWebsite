import React from 'react'
import pic from '../Images/aboutpage/Rectangle 11.png'
function Asecond() {
  return (
    <div className='flex flex-col justify-center items-center m-20'>
      <div className='flex items-center gap-[100px] sm:gap-[60px] sm:flex-col sm:items-start'>
        <div><img src={pic}  alt="" /></div>
        <div className='flex flex-col gap-10 sm:gap-4'>
            <h1 className='capitalize font-raleway font-semibold text-[30px]'>our mission</h1>
            <h4 className=' w-[35vw] font-raleway text-[#00000099] sm:w-[80vw]' >At Toshconsult Technologies Inc, our 
                 mission is to empower businesses, individuals, 
                 and aspiring tech professionals with innovative
                 software solutions and training programs that
                  drive success. We are committed to delivering 
                  exceptional service and quality products in 
                  website design, web development, app development, 
                  and all aspects of software development, while 
                  also providing accessible and comprehensive 
                  education to help people transition to tech 
                  careers. Our goal is to foster a culture of 
                  creativity, collaboration, and lifelong 
                  learning that inspires our team and our 
                  clients to achieve their full potential.
            </h4>
        </div>
      </div>
    </div>
  )
}

export default Asecond
