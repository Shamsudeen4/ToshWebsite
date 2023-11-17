import React from 'react'
import st from '../Images/aboutpage/Group 18.png' 
import nd from '../Images/aboutpage/Group 19.png' 
import rd from '../Images/aboutpage/Group 20.png' 
import th from '../Images/aboutpage/Group 21.png' 
function Csecond() {
  return (
    <div className='flex flex-col gap-[60px] 2xl:p-44 sm:p-10 2xl:h-[120vh] w-[100%] justify-center '>
      <div className='flex flex-col gap-3  sm:items-start'>
        <h3 className=' font-raleway text-[20px] font-semibold text-[#FB9B02]'>Benefits</h3>
        <h1 className='font-raleway font-semibold text-[25px] sm:w-[70vw] 2xl:w-[34vw] leading-10 sm:leading-8 '>Be Among The Tech Maker Working Toward Innovations</h1>
        <h4 className='2xl:w-[38vw] sm:w-[75vw] text-[14px] capitalize font-poppins'>
          Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. 
            Eget aenean accumsan bibendum 
            gravida maecenas augue. Lorem 
            ipsum dolor sit amet, consectetur 
            dipiscing elit. Eget aenean accumsan
             bibendum gravida maecenas augue.
        </h4>
      </div>
      <div className='flex flex-col gap-[80px]'>
      <div className='flex sm:flex-col gap-[300px] sm:gap-[80px] sm:items-start '>
        <div className='flex flex-col gap-5 sm:items-start'>
            <img className='w-[66px] h-[61px]' src={st} alt="" />
            <h2 className='w-[18vw] sm:w-[75vw] 
            font-raleway font-semibold 
            uppercase leading-6 text-[20px] 
            sm:text-[18px]'>
              Comprehensive 
                software development 
                services
            </h2>
            <h4 className='w-[27vw] text-[14px] sm:w-[75vw]'>
            We  offers a wide range of software 
            development services, including 
            website design, web development, 
            app development, and more. Clients 
            can rely on their experienced team 
            to handle all aspects of the 
            development process, from concept 
            to launch.
            </h4>
        </div>
        <div className='flex flex-col gap-5 sm:items-start'>
            <img className='w-[66px] h-[61px]' src={nd} alt="" />
        
            <h2 className='w-[14vw] sm:w-[75vw] font-raleway font-semibold 
            uppercase leading-6 text-[20px] sm:text-[18px]'>Expert training programs</h2>
            <h4 className='w-[27vw] text-[14px] sm:w-[75vw]'>
            We  offers a wide range of software 
            development services, including 
            website design, web development, 
            app development, and more. Clients 
            can rely on their experienced team 
            to handle all aspects of the 
            development process, from concept 
            to launch.
            </h4>
        </div>
      </div>
      <div className='flex sm:flex-col gap-[300px] sm:gap-[80px] sm:text-start'>
        <div className='flex flex-col gap-5  sm:items-start'>
        <img className='w-[66px] h-[61px]' src={rd} alt="" />
            <h2 className='uppercase font-raleway font-semibold  text-[20px] sm:text-[18px]'>Flexible environment</h2>
            <h4 className='w-[27vw] text-[14px] sm:w-[75vw]'>
            We prides itself on delivering innovative 
            software solutions that meet the unique 
            needs of each client. Their team stays 
            up-to-date with the latest trends and 
            technologies in the industry, and 
            leverages this knowledge to develop 
            cutting-edge products.
            </h4>
        </div>
        <div className='flex flex-col gap-5 sm:items-start'>
        <img className='w-[66px] h-[61px]' src={th} alt="" />
            <h2 className=' uppercase font-raleway font-semibold w-[17vw]  
            leading-6 text-[20px] sm:w-[75vw] sm:text-[18px]'>Exceptional Customer Service</h2>
            <h4 className='w-[27vw] text-[14px] sm:w-[75vw]'>
            We are dedicated to providing exceptional 
            customer service to each and every client. 
            Their team is responsive, communicative, 
            and always willing to go the extra mile to 
            ensure that clients are satisfied with the 
            final product.
            </h4>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Csecond
