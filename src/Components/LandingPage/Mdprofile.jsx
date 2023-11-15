import React from 'react'
// import plus from '../Images/homepage/tabler-icon-plus.png'
import eye from '../Images/homepage/tabler-icon-eye.png'
import pass from '../Images/homepage/Ellipse 16 (1).png'
import pen from '../Images/homepage/tabler-icon-pencil-minus.png'
function Mdprofile() {
  return (
    <div className=' font-raleway flex flex-col items-center justify-center w-[100%] h-[100vh]'>
      <div className=' flex flex-col gap-[60px]'>
        <div className='flex items-center gap-[990px]'>
            <div className='flex flex-col gap-[0px]'>
                <h1 className='text-[30px] font-bold'>Profile</h1>
                <h4 className=' font-poppins font-semibold text-[#00000080]'>Home {'>'} Profile</h4>
            </div>
          
        </div>
        <div className=' flex flex-col gap-[50px]'>
            <div className=' border-[2px] px-[40px] py-[30px] rounded-[20px] border-solid flex items-start gap-[500px]'>
                <div className='flex items-center gap-6'>
                    <div><img src={pass} alt="" /></div>
                    <div>
                        <h2 className='text-[20px] font-bold'>Jays Alimi</h2>
                        <h4 className='font-semibold text-[#00000080]'>Product Designer</h4>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <img src={pen} alt="" />
                    <h4 className='font-semibold text-[#FB9B02]'>Edit</h4>
                </div>
            </div>
            <div className='flex border-[2px] gap-[600px] px-[40px] py-[30px] rounded-[20px] border-solid items-start'>
                <div className=' flex flex-col gap-[20px] '>
                    <div>
                        <h2 className='text-[20px] font-bold'>Talkzjays0x@gmail.com</h2>
                        <h3 className='font-semibold text-[#00000080]'>Email Address</h3>
                    </div>
                    <div className='flex gap-3'>
                        <h2>****************</h2>
                        <img src={eye} alt="" /> 
                    </div>
                    <h4 className='font-semibold text-[#00000080]'>Password</h4>
                </div>
                <div className='flex gap-3'>
                    <img src={pen} alt="" />
                    <h4 className='font-semibold text-[#FB9B02]'>Edit</h4>
                </div>
            </div>
        </div>

        
      </div>
    </div>
  )
}

export default Mdprofile
