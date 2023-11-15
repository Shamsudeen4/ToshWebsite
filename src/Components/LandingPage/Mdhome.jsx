import React from 'react'

function Mdhome() {
  return (
    <div className='flex  flex-col justify-center items-center w-[100%] h-[100vh]'> 
      <div className='font-raleway flex gap-[30px]'>
        <div className='flex flex-col gap-[10px] items-center border-[2px] border-solid px-[70px] py-[40px] rounded-[20px]'>
            <h1 className='font-bold text-[40px]'>200.28k</h1>
            <h3 className=' font-semibold text-[#00000080]'>Total Users</h3>
        </div>
        <div className='flex flex-col gap-[10px] items-center border-[2px] border-solid px-[100px] py-[40px] rounded-[20px]'>
            <h1 className='font-bold text-[40px]'>40</h1>
            <h3 className='font-semibold text-[#00000080] '>Blog Posts</h3>
        </div>
        <div className='flex flex-col gap-[10px] items-center border-[2px] border-solid px-[70px] py-[40px] rounded-[20px]'>
            <h1 className='font-bold text-[40px]'>20</h1>
            <h3 className='font-semibold text-[#00000080]'>Unread Notifications</h3>
        </div>
      </div>
    </div>
  )
}

export default Mdhome
