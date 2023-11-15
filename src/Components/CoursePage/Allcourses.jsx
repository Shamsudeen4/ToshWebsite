import React from 'react'
import c1 from '../Images/coursepage/Rectangle 66 (2).png'
import c2 from '../Images/coursepage/Rectangle 66 (1).png'
import c3 from '../Images/coursepage/Rectangle 66.png'
import c4 from '../Images/homepage/Rectangle 32.png'


function Allcourses() {
  return (
    <div className='lg:flex flex-col'>
        <div className='ml-[8%] flex-col lg:w-[45%] gap-4 flex mt-[10%]'>
            <h5 className='text-[#FB9B02] font-bold'>All Courses</h5>
            <h1 className='font-bold lg:text-[35px]'>Available Courses</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Eget aenean accumsan bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
               Eget aenean accumsan bibendum gravida maecenas augue.</p>
        </div>
        {/* ////////////////////FRONT END SECTION///////// */}
        <div className='courses lg:flex ml-[12%]  items-center mt-[5%] gap-[70px]'>        
            <img className='lg:h-[40vh]' src={c1} alt="" />        
          <div className='flex flex-col gap-5 '>
            <h1 className='font-bold'>FRONT-END DEVELOPMENT</h1>
            <h6 className='text-gray-400 lg:w-[50%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan 
              bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit. Eget aenean accumsan bibendum gravida maecenas augue.</h6>
              <div className='lg:flex [font-bold] gap-5'>              
                  <li className='font-bold'>HTML</li>
                  <li className='font-bold'>CSS</li>
                  <li className='font-bold'>JavaScript</li>
                  <li className='font-bold'>REACT JS</li>
                  <li className='font-bold'>Tailwind CSS</li>             
              </div>
              <div className='lg:flex  gap-5'>
                <li className='font-bold'>GIT AND GITHUB</li>
                <li className='font-bold'>BOOTSTRAP</li>
              </div>
              <button className='bg-[#FB9B02] sm: w-[23%] text-white rounded-lg lg:relative left-[50%]  lg:w-[12%] py-[5px] text-center'>Learn More</button>
          </div>
        </div>
        {/* ////////////////////BACK END SECTION///////// */}
        <div className='courses lg:flex ml-[12%]  items-center mt-[5%] gap-[70px]'>        
            <img className='lg:h-[40vh]' src={c2} alt="" />        
          <div className='flex flex-col gap-5 '>
            <h1 className='font-bold'>bACK-END DEVELOPMENT</h1>
            <h6 className='text-gray-400 lg:w-[50%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan 
              bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit. Eget aenean accumsan bibendum gravida maecenas augue.</h6>
              <div className='lg:flex [font-bold] gap-5'>              
                  <li className='font-bold'>HTML</li>
                  <li className='font-bold'>CSS</li>
                  <li className='font-bold'>JavaScript</li>
                  <li className='font-bold'>REACT JS</li>
                  <li className='font-bold'>Tailwind CSS</li>             
              </div>
              <div className='lg:flex  gap-5'>
                <li className='font-bold'>GIT AND GITHUB</li>
                <li className='font-bold'>BOOTSTRAP</li>
              </div>
              <button className='bg-[#FB9B02] sm: w-[23%] text-white rounded-lg lg:relative left-[50%]  lg:w-[12%] py-[5px] text-center'>Learn More</button>
          </div>
        </div>

        {/* ////////////////////PYTHON SECTION///////// */}
        <div className='courses lg:flex ml-[12%]  items-center mt-[5%] gap-[70px]'>        
            <img className='lg:h-[40vh]' src={c3} alt="" />        
          <div className='flex flex-col gap-5 '>
            <h1 className='font-bold'>PYTHON FULL-STACK DEVELOPMENT</h1>
            <h6 className='text-gray-400 lg:w-[50%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan 
              bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit. Eget aenean accumsan bibendum gravida maecenas augue.</h6>
              <div className='lg:flex [font-bold] gap-5'>              
                  <li className='font-bold'>HTML</li>
                  <li className='font-bold'>CSS</li>
                  <li className='font-bold'>JavaScript</li>
                  <li className='font-bold'>REACT JS</li>
                  <li className='font-bold'>Tailwind CSS</li>             
              </div>
              <div className='lg:flex  gap-5'>
                <li className='font-bold'>GIT AND GITHUB</li>
                <li className='font-bold'>BOOTSTRAP</li>
              </div>
              <button className='bg-[#C12DC1] sm: w-[23%] text-white rounded-lg lg:relative left-[50%]  lg:w-[12%] py-[5px] text-center'>Learn More</button>
          </div>
        </div>

        {/* ////////////////////  UI/UX SECTION///////// */}
        <div className='courses lg:flex ml-[12%]  items-center mt-[5%] gap-[70px]'>        
            <img className='lg:h-[40vh] w-[25%] ' src={c4} alt="" />        
          <div className='flex flex-col gap-5 '>
            <h1 className='font-bold'>UI/UX DESIGNT</h1> 
            <h6 className='text-gray-400 lg:w-[50%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan 
              bibendum gravida maecenas augue. Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit. Eget aenean accumsan bibendum gravida maecenas augue.</h6>
              <div className='lg:flex [font-bold] gap-5'>              
                  <li className='font-bold'>HTML</li>
                  <li className='font-bold'>CSS</li>
                  <li className='font-bold'>JavaScript</li>
                  <li className='font-bold'>REACT JS</li>
                  <li className='font-bold'>Tailwind CSS</li>             
              </div>
              <div className='lg:flex mt-[-15px] gap-5'>
                <li className='font-bold'>GIT AND GITHUB</li>
                <li className='font-bold'>BOOTSTRAP</li>
              </div>
              <button className='bg-[#C12DC1] sm: w-[23%] text-white rounded-lg lg:relative left-[50%]  lg:w-[15%]  py-[5px] text-center'>Learn More</button>
          </div>
        </div>
        {/* /////////SWITHCHES BUTTON/////////// */}
        <div className='flex items-center justify-center gap-3 mt-[4%] '>
          <button className='bg-[#C12DC1] p-2 rounded-lg text-white font-bold'>1</button>
          <button  className='bg-[#F8E7F8] p-2 rounded-lg text-[#FB9B02] font-bold'>2</button>
          <button  className='bg-[#F8E7F8] p-2 rounded-lg text-[#FB9B02] font-bold'>3</button>
        </div>
    </div>
  )
}

export default Allcourses