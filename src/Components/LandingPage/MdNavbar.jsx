import React from 'react'
import logo from '../Images/homepage/Toshconsult Img 1.png'
import imgg from '../Images/homepage/Ellipse 15.png'
function MdNavbar() {
  return (
    <div className='w-[100%] h-[20vh] font-poppins flex items-center justify-center'>
    <div className='flex items-center justify-around gap-[320px]'>
      <div><img src={logo} alt="" /></div>
      <div>
        <ul className='flex gap-[40px] text-[#00000080]'>
            <li>Blog</li>
            <li>Contact</li>
            <li>Application</li>
            <li>Career</li>
        </ul>
      </div>
      <div>
        <img src={imgg} alt="" />
      </div>
    </div>
    
    </div>
  )
}

export default MdNavbar
