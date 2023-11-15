import React from 'react'
import search from '../Images/homepage/tabler-icon-search.png'
import filter from '../Images/homepage/Group 64.png'
function Cthird() {
  return (
    <div className='bg-[white]'>
    <div className='flex flex-col gap-[80px] items-center justify-center m-36'>
      <div className='firstline flex items-center justify-between gap-[530px]'>
        <div>
          <h1 className='text-[30px] font-raleway font-bold'>Available Jobs</h1>
        </div>
        <div className='flex gap-2'>
            <div className='flex border-2 border-solid border-[#F8E7F8] rounded-[20px] items-center px-4 gap-[100px] cursor-pointer'>
              <input type="text" placeholder='Search' className=' ' />
              <img  className='w-[24px] h-[24px]' src={search} alt="" />
            </div>
            <div>
              <img className='' src={filter} alt="" />
            </div>
         </div>
      </div>
      <div className='alltabs flex flex-col gap-[60px]'>
          <div className='ftab flex items-center justify-center gap-[230px]'>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col gap-4'>
                <h2 className='capitalize text-[30px] font-raleway font-semibold'>data analysis instructor</h2>
                <h4 className=' w-[42vw] text-[14px] font-poppins'>We prides itself on delivering innovative 
                  software solutions that meet the unique
                   needs of each client. Their team stays 
                   up-to-date with the latest trends and 
                   technologies in the industry, and leverages 
                   this knowledge to develop cutting-edge 
                   products.
                </h4>
              </div>
              <div className='flex gap-3 font-poppins'>
                <div><h3 className=' text-[12px] text-[#C12DC1] bg-[#F8E7F8]  pt-[16px] pl-[41px] pb-[16px] pr-[41px] rounded-[10px]'>Data Analysis</h3></div>
                <div><h3 className='text-[12px] text-[#FB9B02] bg-[#FEF3C7B2] pt-[16px] pl-[55px] pb-[16px] pr-[55px] rounded-[10px]'>Microsoft Office</h3></div>
                <div><h3 className='text-[12px] text-[#C12DC1] bg-[#F8E7F8] pt-[16px] pl-[44px] pb-[16px] pr-[44px] rounded-[10px]'>Google Docs</h3></div>
                <div><h3 className='text-[12px] text-[#FB9B02] bg-[#FEF3C7B2] pt-[16px] pl-[42px] pb-[16px] pr-[42px] rounded-[10px]'>Google Excel</h3></div>
              </div>
            </div>
            <div><button className='bg-[#FB9B02] pt-[21px] pl-[53px] pb-[21px] pr-[53px] rounded-[14px] text-[white]'>Apply Now</button></div>
          </div>
          <div className='stab flex items-center justify-center gap-[230px]'>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col gap-4'>
                <h2 className='capitalize text-[30px] font-raleway font-semibold'>data science instructor</h2>
                <h4 className=' w-[42vw] text-[14px] font-poppins'>We prides itself on delivering innovative 
                  software solutions that meet the unique
                   needs of each client. Their team stays 
                   up-to-date with the latest trends and 
                   technologies in the industry, and leverages 
                   this knowledge to develop cutting-edge 
                   products.
                </h4>
              </div>
              <div className='flex gap-3 font-poppins'>
                <div><h3 className='text-[12px] text-[#C12DC1] bg-[#F8E7F8]  pt-[16px] pl-[41px] pb-[16px] pr-[41px] rounded-[10px]'>Data Analysis</h3></div>
                <div><h3 className='text-[12px] text-[#FB9B02] bg-[#FEF3C7B2] pt-[16px] pl-[55px] pb-[16px] pr-[55px] rounded-[10px]'>Microsoft Office</h3></div>
                <div><h3 className='text-[12px] text-[#C12DC1] bg-[#F8E7F8] pt-[16px] pl-[44px] pb-[16px] pr-[44px] rounded-[10px]'>Google Docs</h3></div>
                <div><h3 className='text-[12px] text-[#FB9B02] bg-[#FEF3C7B2] pt-[16px] pl-[42px] pb-[16px] pr-[42px] rounded-[10px]'>Google Excel</h3></div>
              </div>
            </div>
            <div><button className='bg-[#FB9B02] pt-[21px] pl-[53px] pb-[21px] pr-[53px] rounded-[14px] text-[white]'>Apply Now</button></div>
          </div>
          <div className='ttab flex items-center justify-center gap-[230px]'>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col gap-4'>
                <h2 className='capitalize text-[30px] font-raleway font-semibold'>product designer intern</h2>
                <h4 className=' w-[42vw] text-[14px] font-poppins'>We prides itself on delivering innovative 
                  software solutions that meet the unique
                   needs of each client. Their team stays 
                   up-to-date with the latest trends and 
                   technologies in the industry, and leverages 
                   this knowledge to develop cutting-edge 
                   products.
                </h4>
              </div>
              <div className='flex gap-3 font-poppins'>
                <div><h3 className='text-[12px] text-[#C12DC1] bg-[#F8E7F8]  pt-[16px] pl-[41px] pb-[16px] pr-[41px] rounded-[10px]'>Data Analysis</h3></div>
                <div><h3 className='text-[12px] text-[#FB9B02] bg-[#FEF3C7B2] pt-[16px] pl-[55px] pb-[16px] pr-[55px] rounded-[10px]'>Microsoft Office</h3></div>
                <div><h3 className='text-[12px] text-[#C12DC1] bg-[#F8E7F8] pt-[16px] pl-[44px] pb-[16px] pr-[44px] rounded-[10px]'>Google Docs</h3></div>
                <div><h3 className='text-[12px] text-[#FB9B02] bg-[#FEF3C7B2] pt-[16px] pl-[42px] pb-[16px] pr-[42px] rounded-[10px]'>Google Excel</h3></div>
              </div>
            </div>
            <div><button className='bg-[#FB9B02] pt-[21px] pl-[53px] pb-[21px] pr-[53px] rounded-[14px] text-[white]'>Apply Now</button></div>
          </div>
          <div className='ftab flex items-center justify-center gap-[230px]'>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col gap-4'>
                <h2 className='capitalize text-[30px] font-raleway font-semibold'>full-stack developer intern</h2>
                <h4 className=' w-[42vw] text-[14px] font-poppins'>We prides itself on delivering innovative 
                  software solutions that meet the unique
                   needs of each client. Their team stays 
                   up-to-date with the latest trends and 
                   technologies in the industry, and leverages 
                   this knowledge to develop cutting-edge 
                   products.
                </h4>
              </div>
              <div className='flex gap-3 font-poppins'>
                <div><h3 className='text-[12px] text-[#C12DC1] bg-[#F8E7F8]  pt-[16px] pl-[41px] pb-[16px] pr-[41px] rounded-[10px]'>Data Analysis</h3></div>
                <div><h3 className='text-[12px] text-[#FB9B02] bg-[#FEF3C7B2] pt-[16px] pl-[55px] pb-[16px] pr-[55px] rounded-[10px]'>Microsoft Office</h3></div>
                <div><h3 className='text-[12px] text-[#C12DC1] bg-[#F8E7F8] pt-[16px] pl-[44px] pb-[16px] pr-[44px] rounded-[10px]'>Google Docs</h3></div>
                <div><h3 className='text-[12px] text-[#FB9B02] bg-[#FEF3C7B2] pt-[16px] pl-[42px] pb-[16px] pr-[42px] rounded-[10px]'>Google Excel</h3></div>
              </div>
            </div>
            <div><button className='bg-[#FB9B02] pt-[21px] pl-[53px] pb-[21px] pr-[53px] rounded-[14px] text-[white]'>Apply Now</button></div>
          </div>
      
      </div>
      <div className='flex gap-3'>
        <div><h3 className='bg-[#C12DC1] text-[white] text-[25px] px-3 py-2 rounded-[10px]'>1</h3></div>
        <div><h3 className='bg-[white] text-[#FB9B02] text-[25px] px-3 py-2 rounded-[10px] border-1 border-solid border-[#F8E7F8]'>2</h3></div>
        <div><h3 className='bg-[white] text-[#FB9B02] text-[25px] px-3 py-2 rounded-[10px] border-1 border-solid border-[#F8E7F8]'>3</h3></div>
      </div>
    </div>
    </div>
  )
}

export default Cthird
