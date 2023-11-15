import React from 'react'
import ph from '../Images/homepage/Ellipse 17 (1).png'
function MdApplic() {
  return (
    <div className=' gap-[40px] font-raleway items-center justify-center flex flex-col w-[100%] h-[100vh] '>
      <div className='pr-[480px]'>
        <h1 className='font-bold text-[30px]'>Applicant's Information</h1>
        <h4 className='font-semibold text-[18px] text-[#00000080] '>Home {'>'} Application</h4>
      </div>
      <table className=' w-[60%] text-left flex flex-col gap-10 items-center '>
        <tr className=' '>
            <th className='w-[30vw]'>BASIC INFO</th>
            <th className='w-[15vw]'>DATE CREATED</th>
            <th>ACTIONS</th>
        </tr>
        <tr className=' flex items-center'>
            <td className='w-[31vw]'>
                <div className='flex gap-4 items-center'>
                 <div>
                    <img src={ph} alt="" />
                 </div>
                    <div>
                        <h2 className='font-bold'>James Mike</h2>
                        <h2 className='text-[#00000080]'>Jamesmike@gmail.com</h2>
                    </div>
                </div>
            </td>
            <td className='w-[12vw] text-[#00000080] font-semibold'>29 - 04 - 2023</td>
            <td className='font-semibold px-[15px] py-[10px] rounded-[15px]  bg-[#FB9B02]  border-[#FB9B02] border-[1px] transition duration-500 cursor-pointer border-solid hover:bg-transparent hover:text-[#FB9B02] text-[white]'> View Message </td>
        </tr>
 
        <tr className=' flex items-center'>
            <td className='w-[31vw]'>
                <div className='flex gap-4 items-center'>
                 <div>
                    <img src={ph} alt="" />
                 </div>
                    <div>
                        <h2 className='font-bold'>James Mike</h2>
                        <h2 className='text-[#00000080]'>Jamesmike@gmail.com</h2>
                    </div>
                </div>
            </td>
            <td className='w-[12vw] text-[#00000080] font-semibold'>29 - 04 - 2023</td>
            <td className='font-semibold px-[15px] py-[10px] rounded-[15px]  bg-[#FB9B02]  border-[#FB9B02] border-[1px] transition duration-500 cursor-pointer border-solid hover:bg-transparent hover:text-[#FB9B02] text-[white]'> View Message </td>
        </tr>
 
        <tr className=' flex items-center'>
            <td className='w-[31vw]'>
                <div className='flex gap-4 items-center'>
                 <div>
                    <img src={ph} alt="" />
                 </div>
                    <div>
                        <h2 className='font-bold'>James Mike</h2>
                        <h2 className='text-[#00000080]'>Jamesmike@gmail.com</h2>
                    </div>
                </div>
            </td>
            <td className='w-[12vw] text-[#00000080] font-semibold'>29 - 04 - 2023</td>
            <td className='font-semibold px-[15px] py-[10px] rounded-[15px]  bg-[#FB9B02] text-[white] border-[#FB9B02] border-[1px] transition duration-500 cursor-pointer border-solid hover:bg-transparent hover:text-[#FB9B02] t'> View Message </td>
        </tr>
 
        <tr className=' flex items-center'>
            <td className='w-[31vw]'>
                <div className='flex gap-4 items-center'>
                 <div>
                    <img src={ph} alt="" />
                 </div>
                    <div>
                        <h2 className='font-bold'>James Mike</h2>
                        <h2 className='text-[#00000080]'>Jamesmike@gmail.com</h2>
                    </div>
                </div>
            </td>
            <td className='w-[12vw] text-[#00000080] font-semibold'>29 - 04 - 2023</td>
            <td className='font-semibold px-[15px] py-[10px] rounded-[15px]  bg-[#FB9B02] border-[#FB9B02] border-[1px] transition duration-500 cursor-pointer border-solid hover:bg-transparent hover:text-[#FB9B02] text-[white]'> View Message </td>
        </tr>
 
        <tr className=' flex items-center'>
            <td className='w-[31vw]'>
                <div className='flex gap-4 items-center'>
                 <div>
                    <img src={ph} alt="" />
                 </div>
                    <div>
                        <h2 className='font-bold'>James Mike</h2>
                        <h2 className='text-[#00000080]'>Jamesmike@gmail.com</h2>
                    </div>
                </div>
            </td>
            <td className='w-[12vw] text-[#00000080] font-semibold'>29 - 04 - 2023</td>
            <td className='font-semibold px-[15px] py-[10px] rounded-[15px]  bg-[#FB9B02] text-[white] border-[#FB9B02] border-[1px] transition duration-500 cursor-pointer border-solid hover:bg-transparent hover:text-[#FB9B02] '> View Message </td>
        </tr>
 
              </table>
    </div>
  )
}

export default MdApplic
