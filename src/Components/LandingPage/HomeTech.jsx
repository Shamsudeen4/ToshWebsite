import React from 'react'
import html from '../Images/coursepage/Html 5.png'
import css from '../Images/coursepage/CSS3.png'
import js from '../Images/coursepage/JavaScript.png'
import reactt from '../Images/coursepage/React.png'
import python from '../Images/coursepage/Python.png'
import java from '../Images/coursepage/Java.png'
import reactN from '../Images/coursepage/React.png'
import wordp from '../Images/coursepage/WordPress.png'
import php from '../Images/coursepage/PHP.png'
import asp from '../Images/coursepage/ASP.NET.png'
function HomeTech() {
  return (
    <div className=' font-raleway flex flex-col lg:gap-[100px] sm:gap-[60px] items-center m-20 '>
      <div className='flex flex-col items-center sm:gap-4'>
        <h1 className=' capitalize text-[35px] font-semibold sm:text-center sm:leading-9'>technologies we’re using</h1>
        <h4 className='text-[15px] text-[#00000099] sm:text-center'>Below is the list of technologies we are using for our professional services</h4>
      </div>
      <div className=' font-semibold flex flex-col items-start sm:items-center lg:gap-[70px] sm:gap-[18px]'>
        <div className='flex lg:gap-[150px] sm:gap-[18px] sm:items-center'>
        <div className='flex flex-col items-center'>
            <img className='sm:w-[15vw]' src={html} alt="" />
            <h4 className='text-[#FB9B02] lg:text-[20px]'>HTML</h4>
        </div>
        <div className='flex flex-col items-center sm:w-[15vw]'>
            <img className=' sm:w-[50vw]' src={css} alt="" />
            <h4 className='text-[#FB9B02] lg:text-[20px]'>CSS</h4>
        </div>
        <div className='flex flex-col items-center'>
            <img className='sm:w-[13vw]' src={js} alt="" />
            <h4 className='text-[#FB9B02] lg:text-[20px]'>JAVASCRIPT</h4>
        </div>
        <div className='flex flex-col items-center'>
            <img className='sm:w-[15vw]' src={reactt} alt="" />
            <h4 className='text-[#FB9B02] lg:text-[20px]'>REACT</h4>
        </div>
        </div>
        <div className='flex lg:gap-[135px] sm:gap-[13px] sm:items-center'>
        <div className='flex flex-col items-center'>
            <img className='sm:w-[15vw]' src={python} alt="" />
            <h4 className='text-[#FB9B02] lg:text-[20px]'>PYTHON</h4>
        </div>
        <div className='flex flex-col items-center'>
            <img className='sm:w-[15vw]' src={java} alt="" />
            <h4 className='text-[#FB9B02] lg:text-[20px]'>JAVA</h4>
        </div>
        <div className='flex flex-col items-center sm:text-center'>
            <img className='sm:w-[15vw]' src={reactN} alt="" />
            <h4 className='text-[#FB9B02] lg:text-[20px] sm:w-[20vw] sm:leading-4'>REACT NATIVE</h4>
        </div>
        <div className='flex flex-col items-center'>
            <img className='sm:w-[15vw]' src={wordp} alt="" />
            <h4 className='text-[#FB9B02] lg:text-[20px]'>WORDPRESS</h4>
        </div>
        </div>
        <div className='flex lg:gap-[150px] items-start sm:gap-[20px]'>
        <div className='flex flex-col items-center'>
            <img className='sm:w-[15vw]' src={php} alt="" />
            <h4 className='text-[#FB9B02] lg:text-[20px]'>PHP</h4>
        </div>
        <div className='flex flex-col items-center lg:gap-[10px]'>
            <img className='sm:w-[15vw]' src={asp} alt="" />
            <h4 className='text-[#FB9B02] lg:text-[20px]'>ASP.NET</h4>
         </div>
        </div>
      </div>
    </div>
  )
}

export default HomeTech
