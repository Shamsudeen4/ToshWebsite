
    import React from 'react'
    import blurr from '../Images/homepage/Ellipse 2 (2).png'
    
    import '../LandingPage/Cfirst.css'
    function Available() {
      return (
        <div className='back flex  py-32 flex-col gap-4 sm:gap-6 items-center justify-center bg-[#FEF3C780]'>
          <h1 className='font-raleway font-bold text-[45px] sm:text-[35px] capitalize lg:w-[30vw] sm:w-[80vw] sm:leading-[35px] text-center'>check all the courses available to take</h1>
          <h4 className=' font-poppins text-[18px] text-[#00000080]'>Home  {'>'} Course</h4>
          <img src={blurr} className='absolute right-0 top-[120px] w-96' alt="" />
        </div>
      )
    }
    
    export default Available
    
