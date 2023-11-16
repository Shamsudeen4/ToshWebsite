import React from 'react'

function Home() {
  return (
    <div className='bg-[#FEF3C780] flex items-center mt-[10%] justify-center'>
    <div className='lg:w-[40%] text-center py-[25px] gap-3 flex flex-col'>
      <h1 className='lg:text-[40px] font-bold'>Contact Us For More...</h1>
      <div className='flex gap-4 items-center justify-center'>
        <a href="/">home</a>
            <h6>{'>'}</h6>
        <a href="/">courses</a>
      </div>      
    </div>
  </div>
  )
}

export default Home