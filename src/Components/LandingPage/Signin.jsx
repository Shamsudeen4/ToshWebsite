import React from 'react'
import eye from '../Images/homepage/tabler-icon-eye.png'
import logo from '../Images/homepage/Toshconsult Img 1.png'
function Signin() {
  return (
    <div className='flex flex-col w-[100%] font-raleway h-[100vh] justify-center items-center'>
      <div className='flex flex-col gap-[20px] items-center'>
      <div>
        <img src={logo} alt="" />
      </div>
      <div className='flex flex-col gap-[20px]'>
        <div>
        <h2 className=' text-[20px] font-raleway font-bold'  >Sign In As An Admin</h2>
        </div>
      <div className='flex flex-col gap-[20px]'>
        <div className='flex flex-col gap-2'>
            <label htmlFor="Email" className='text-[15px]'>EMAIL ADDRESS</label>
            <div className='border-[2px] border-solid border-[#0000001A] px-[15px] rounded-[10px]'>
            <input type="email" placeholder='yusufshamsudeen@gmail.com 'className='outline-none w-[16vw] h-[5vh] ' />
            </div>
        </div>
        <div className='flex flex-col gap-2'>
            <label htmlFor="Email" className='text-[15px]'>PASSWORD</label>
            <div className='flex items-center gap-20 border-[2px] border-solid border-[#0000001A] px-[15px] rounded-[10px] '>
            <input type="text" placeholder='**********' className=' outline-none w-[16vw] h-[5vh]'/>
            <img className='h-[3vh]' src={eye} alt="" />
            </div>
        </div>
        <div>
            <button className='w-[25vw] py-[10px] rounded-[10px] bg-[#FB9B02] text-[white] border-[1px] border-solid border-[#FB9B02] hover:bg-[white] hover:text-[#FB9B02] transition duration-300'>Login</button>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Signin
