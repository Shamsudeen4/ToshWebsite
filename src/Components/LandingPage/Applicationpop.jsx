import React from 'react'

function Applicationpop() {
  return (
    <div>
      <div className='flex flex-col items-center justify-center w-[100%] h-[100vh]'>
    <div className='flex flex-col items-end gap-3'>
        <div className='flex flex-col gap-[20px] items-center'>
      <div>
        <h2 className=' font-raleway font-bold text-[20px]'>Applicant's Message </h2>
      </div>
      <div className='flex  text-[#00000080] flex-col gap-[20px]'>
      <div className='flex gap-[20px]'>
        <div className=' '>
            <label htmlFor="">FULL NAME</label><br/>
            <input type="text" placeholder='James Mike' className=' w-[20vw] h-[5vh] border-2 border-solid px-4 rounded-[10px]'/>
        </div>
        <div>
            <label htmlFor="">EMAIL ADDRESS</label><br/>
            <input type="text" placeholder='jamesmike@gmail.com' className='w-[20vw] h-[5vh] border-2 border-solid px-4 rounded-[10px]' />
        
        </div>
      </div>
      <div className=''>
        <label htmlFor="">COURSE TYPE</label><br/>
        <input  type="text" placeholder='Product Designer'  className='w-[100%] h-[5vh] border-2 border-solid px-4 rounded-[10px]' />
      </div>
     
      <div className='flex gap-[20px]'>
        <div>
        <label htmlFor="">STATE</label><br/>
        <input  type="text" placeholder='Kwara State'  className='w-[20vw] h-[5vh] border-2 border-solid px-4 rounded-[10px]'/>
     
        </div>
        <div>
        <label htmlFor="">CITY</label><br/>
        <input  type="text" placeholder='Ilorin'  className='w-[20vw] h-[5vh] border-2 border-solid px-4 rounded-[10px]' />
     
        </div>
        </div>
        <div>
        <label htmlFor="">MESSAGE</label><br/>
        <textarea className='w-[100%] h-[15vh] outline-none pl-4 border-[2px] border-solid'>
            Enter your Message
        </textarea>
        </div>
    </div>
    </div>
    <div>
        <button className='bg-[#FB9B02] text-[white] px-[40px] py-[10px] rounded-[10px]'>Close</button>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Applicationpop
