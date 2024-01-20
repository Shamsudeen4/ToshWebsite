import React from 'react'
import orvis from '../Images/frontnbackend/image 2.png'
function Second() {
  return (
    <div className=' bg-[white] py-[3%] sm:py-[8%]'>
      <div className=' flex flex-col gap-[40px] items-center font-semibold'>
        <div>
            <h3 className=' font-euclid'>Loves by brands and partners</h3>
            </div>
        <div className=' flex items-center gap-[40px] sm:flex-col sm:gap-[20px]'>
            <img src={orvis} alt="" />
            <img className=' sm:hidden' src={orvis} alt="" />
            <img className=' sm:hidden' src={orvis} alt="" />
            <img className=' sm:hidden' src={orvis} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Second
