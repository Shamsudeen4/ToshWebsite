import React from 'react'
import logo from '../Images/homepage/Toshconsult Img 1.png'

function NavBar() {
  return (
    <div className='navbar flex items-center justify-around py-9 '>
      <div>
        <img src={logo} alt="toshlogo" />
      </div>
      <div>
        <ul className='flex justify-between gap-3'>
            <li >Home </li>
            <li>About</li>
            <li>Courses</li>
            <li>Services</li>
            <li>Career</li>
            <li>Contact</li>
        </ul>
      </div>
      <div>
        <button className='bg-[#FB9B02] px-5 py-2 rounded-[14px] text-[white]'>Apply Now</button>
      </div>
    </div>
  )
}

export default NavBar
