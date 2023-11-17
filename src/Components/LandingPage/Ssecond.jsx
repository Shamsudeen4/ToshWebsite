import React from 'react'
import pra from '../Images/servicepage/Group 70 (3).png'
import praa from '../Images/servicepage/Group 70 (1).png'
function Ssecond() {
  return (
    <div className='flex flex-col gap-[100px] items-center justify-center sm:mb-[70px]'>
      <div className='flex sm:flex-col items-center  justify-center gap-[80px] sm:px-6 sm:gap-[40px]'>
        <div>
            <img className='w-[655px] h-[737px] sm:w-[400px] sm:h-[350px]' src={pra} alt="" />
        </div>
        <div className='flex flex-col gap-[30px] sm:text-center sm:items-center  '>
            <h1 className='text-[60px] font-raleway font-bold w-[35vw] leading-[60px] sm:text-[36px] sm:leading-[40px] sm:text-center sm:w-[90vw]'>Product Research Approach</h1>
            <h3 className='w-[31vw] text-[16px] font-poppins capitalize text-[#00000099] sm:w-[85vw] sm:text-[16px]' >We don’t just start designing a product, we first conduct a thorough product research and analysis so we can define the project goals and objects, conduct market research to understand your user needs and preference, from there we’d understand who your target audiences are and be able to analyze your intend competitors and compare similar products</h3>
        </div>
      </div>
      <div className='flex items-center justify-center gap-[60px] sm:flex-col-reverse sm:text-center sm:items-center sm:gap-[30px]'>
        <div className='flex flex-col gap-[40px] sm:gap-[20px]'>
            <h1 className='text-[60px] font-raleway font-bold w-[35vw] leading-[60px] capitalize sm:text-[36px] sm:leading-[40px] sm:w-[90vw]'>Product flow and architecture design</h1>
            <h3 className='w-[31vw] text-[16px] font-poppins capitalize text-[#00000099] sm:w-[85vw] sm:text-[16px]'>Upon understanding your product, our experts will start working on your product design by sketching out its architectural design, apply some design principles and make sure we deliver what your users will love and what you’d also be pleased with!</h3>
        </div>
        <div>
            <img className='w-[655px] h-[737px] sm:w-[350px] sm:h-[350px]' src={praa} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Ssecond
