import React from 'react'
import search from '../Images/homepage/tabler-icon-search.png'
import filter from '../Images/homepage/Group 64.png'
function Cthird() {
  return (
    <div className='bg-[white]'>
    <div className='flex flex-col gap-[80px] items-center justify-center 2xl:m-36 sm:m-4 '>
      <div className='firstline flex sm:flex-col sm:items-start items-center justify-between 2xl:gap-[530px] sm:gap-[20px]'>
        <div>
          <h1 className='text-[30px] font-raleway font-bold sm:text-[25px]'>Available Jobs</h1>
        </div>
        <div className='flex gap-2 sm:items-center'>
            <div className='flex border-2 border-solid
             border-[#F8E7F8] rounded-[20px] items-center 
             px-4 gap-[100px] cursor-pointer sm:gap-[30px] 
             sm:px-3 sm:h-[8.5vh]'>
              <input type="text" placeholder='Search' className='sm:h-[6vh] outline-none' />
              <img  className='w-[24px] h-[24px]' src={search} alt="" />
            </div>
            <div>
              <img className='h-[8vh]' src={filter} alt="" />
            </div>
         </div>
      </div>
      <div className='alltabs flex flex-col gap-[60px]'>
          <div className='ftab flex sm:flex-col items-center 
          justify-center gap-[230px] sm:gap-[30px] sm:items-start '>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col gap-4'>
                <h2 className='capitalize text-[30px] font-raleway 
                font-semibold sm:text-[25px] sm:font-bold'>data analysis instructor</h2>
                <h4 className=' w-[42vw] text-[14px] font-poppins sm:w-[75vw]'>We prides itself on delivering innovative 
                  software solutions that meet the unique
                   needs of each client. Their team stays 
                   up-to-date with the latest trends and 
                   technologies in the industry, and leverages 
                   this knowledge to develop cutting-edge 
                   products.
                </h4>
              </div>
              <div className='flex gap-3 font-poppins'>
                <div className='sm:flex 2xl:flex 2xl:gap-3 sm:gap-2 sm:items-center'>
                  <div className='2xl:flex 2xl:gap-3 sm:flex sm:flex-col sm:gap-2'>
                <div><h3 className=' text-[12px] text-[#C12DC1] bg-[#F8E7F8]  2xl:pt-[16px] 2xl:pl-[41px] 2xl:pb-[16px] 2xl:pr-[41px] sm:px-8 sm:py-3 rounded-[10px]'>Data Analysis</h3></div>
                <div><h3 className='text-[12px] text-[#FB9B02] bg-[#FEF3C7B2] 2xl:pt-[16px] 2xl:pl-[55px] 2xl:pb-[16px] 2xl:pr-[55px] sm:px-8 sm:py-3 rounded-[10px]'>Microsoft Office</h3></div>
                </div>
                <div  className='2xl:flex 2xl:gap-3 sm:flex sm:flex-col sm:gap-2'>
                <div><h3 className='text-[12px] text-[#C12DC1] bg-[#F8E7F8] 2xl:pt-[16px] 2xl:pl-[44px] 2xl:pb-[16px] 2xl:pr-[44px] sm:px-8 sm:py-3 rounded-[10px]'>Google Docs</h3></div>
                <div><h3 className='text-[12px] text-[#FB9B02] bg-[#FEF3C7B2] 2xl:pt-[16px] 2xl:pl-[42px] 2xl:pb-[16px] 2xl:pr-[42px] sm:px-8 sm:py-3 rounded-[10px]'>Google Excel</h3></div>
                </div>
                </div>
              </div>
            </div>
            <div><button className='bg-[#FB9B02] 2xl:pt-[21px] 2xl:pl-[53px] 2xl:pb-[21px] 2xl:pr-[53px] sm:px-6 sm:py-3 rounded-[14px] text-[white]'>Apply Now</button></div>
          </div>
          <div className='ftab flex sm:flex-col items-center 
          justify-center gap-[230px] sm:gap-[30px] sm:items-start'>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col gap-4'>
                <h2 className='capitalize text-[30px] font-raleway 
                font-semibold sm:text-[25px] sm:font-bold'>data analysis instructor</h2>
                <h4 className=' w-[42vw] text-[14px] font-poppins sm:w-[75vw]'>We prides itself on delivering innovative 
                  software solutions that meet the unique
                   needs of each client. Their team stays 
                   up-to-date with the latest trends and 
                   technologies in the industry, and leverages 
                   this knowledge to develop cutting-edge 
                   products.
                </h4>
              </div>
              <div className='flex gap-3 font-poppins'>
                <div className='sm:flex 2xl:flex 2xl:gap-3 sm:gap-2 sm:items-center'>
                  <div className='2xl:flex 2xl:gap-3 sm:flex sm:flex-col sm:gap-2'>
                <div><h3 className=' text-[12px] text-[#C12DC1] bg-[#F8E7F8]  2xl:pt-[16px] 2xl:pl-[41px] 2xl:pb-[16px] 2xl:pr-[41px] sm:px-8 sm:py-3 rounded-[10px]'>Data Analysis</h3></div>
                <div><h3 className='text-[12px] text-[#FB9B02] bg-[#FEF3C7B2] 2xl:pt-[16px] 2xl:pl-[55px] 2xl:pb-[16px] 2xl:pr-[55px] sm:px-8 sm:py-3 rounded-[10px]'>Microsoft Office</h3></div>
                </div>
                <div  className='2xl:flex 2xl:gap-3 sm:flex sm:flex-col sm:gap-2'>
                <div><h3 className='text-[12px] text-[#C12DC1] bg-[#F8E7F8] 2xl:pt-[16px] 2xl:pl-[44px] 2xl:pb-[16px] 2xl:pr-[44px] sm:px-8 sm:py-3 rounded-[10px]'>Google Docs</h3></div>
                <div><h3 className='text-[12px] text-[#FB9B02] bg-[#FEF3C7B2] 2xl:pt-[16px] 2xl:pl-[42px] 2xl:pb-[16px] 2xl:pr-[42px] sm:px-8 sm:py-3 rounded-[10px]'>Google Excel</h3></div>
                </div>
                </div>
              </div>
            </div>
            <div><button className='bg-[#FB9B02] pt-[21px] pl-[53px] pb-[21px] pr-[53px] rounded-[14px] text-[white] sm:px-6 sm:py-3'>Apply Now</button></div>
          </div>          <div className='ftab flex sm:flex-col items-center 
          justify-center gap-[230px] sm:gap-[30px] sm:items-start '>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col gap-4'>
                <h2 className='capitalize text-[30px] font-raleway 
                font-semibold sm:text-[25px] sm:font-bold'>data analysis instructor</h2>
                <h4 className=' w-[42vw] text-[14px] font-poppins sm:w-[75vw]'>We prides itself on delivering innovative 
                  software solutions that meet the unique
                   needs of each client. Their team stays 
                   up-to-date with the latest trends and 
                   technologies in the industry, and leverages 
                   this knowledge to develop cutting-edge 
                   products.
                </h4>
              </div>
              <div className='flex gap-3 font-poppins'>
                <div className='sm:flex 2xl:flex 2xl:gap-3 sm:gap-2 sm:items-center'>
                  <div className='2xl:flex 2xl:gap-3 sm:flex sm:flex-col sm:gap-2'>
                <div><h3 className=' text-[12px] text-[#C12DC1] bg-[#F8E7F8]  2xl:pt-[16px] 2xl:pl-[41px] 2xl:pb-[16px] 2xl:pr-[41px] sm:px-8 sm:py-3 rounded-[10px]'>Data Analysis</h3></div>
                <div><h3 className='text-[12px] text-[#FB9B02] bg-[#FEF3C7B2] 2xl:pt-[16px] 2xl:pl-[55px] 2xl:pb-[16px] 2xl:pr-[55px] sm:px-8 sm:py-3 rounded-[10px]'>Microsoft Office</h3></div>
                </div>
                <div  className='2xl:flex 2xl:gap-3 sm:flex sm:flex-col sm:gap-2'>
                <div><h3 className='text-[12px] text-[#C12DC1] bg-[#F8E7F8] 2xl:pt-[16px] 2xl:pl-[44px] 2xl:pb-[16px] 2xl:pr-[44px] sm:px-8 sm:py-3 rounded-[10px]'>Google Docs</h3></div>
                <div><h3 className='text-[12px] text-[#FB9B02] bg-[#FEF3C7B2] 2xl:pt-[16px] 2xl:pl-[42px] 2xl:pb-[16px] 2xl:pr-[42px] sm:px-8 sm:py-3 rounded-[10px]'>Google Excel</h3></div>
                </div>
                </div>
              </div>
            </div>
            <div><button className='bg-[#FB9B02] pt-[21px] pl-[53px] pb-[21px] pr-[53px] rounded-[14px] text-[white] sm:px-6 sm:py-3'>Apply Now</button></div>
          </div>
          <div className='ftab flex sm:flex-col items-center 
          justify-center gap-[230px] sm:gap-[30px] sm:items-start'>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col gap-4'>
                <h2 className='capitalize text-[30px] font-raleway 
                font-semibold sm:text-[25px] sm:font-bold'>data analysis instructor</h2>
                <h4 className=' w-[42vw] text-[14px] font-poppins sm:w-[75vw]'>We prides itself on delivering innovative 
                  software solutions that meet the unique
                   needs of each client. Their team stays 
                   up-to-date with the latest trends and 
                   technologies in the industry, and leverages 
                   this knowledge to develop cutting-edge 
                   products.
                </h4>
              </div>
              <div className='flex gap-3 font-poppins'>
                <div className='sm:flex 2xl:flex 2xl:gap-3 sm:gap-2 sm:items-center'>
                  <div className='2xl:flex 2xl:gap-3 sm:flex sm:flex-col sm:gap-2'>
                <div><h3 className=' text-[12px] text-[#C12DC1] bg-[#F8E7F8]  2xl:pt-[16px] 2xl:pl-[41px] 2xl:pb-[16px] 2xl:pr-[41px] sm:px-8 sm:py-3 rounded-[10px]'>Data Analysis</h3></div>
                <div><h3 className='text-[12px] text-[#FB9B02] bg-[#FEF3C7B2] 2xl:pt-[16px] 2xl:pl-[55px] 2xl:pb-[16px] 2xl:pr-[55px] sm:px-8 sm:py-3 rounded-[10px]'>Microsoft Office</h3></div>
                </div>
                <div  className='2xl:flex 2xl:gap-3 sm:flex sm:flex-col sm:gap-2'>
                <div><h3 className='text-[12px] text-[#C12DC1] bg-[#F8E7F8] 2xl:pt-[16px] 2xl:pl-[44px] 2xl:pb-[16px] 2xl:pr-[44px] sm:px-8 sm:py-3 rounded-[10px]'>Google Docs</h3></div>
                <div><h3 className='text-[12px] text-[#FB9B02] bg-[#FEF3C7B2] 2xl:pt-[16px] 2xl:pl-[42px] 2xl:pb-[16px] 2xl:pr-[42px] sm:px-8 sm:py-3 rounded-[10px]'>Google Excel</h3></div>
                </div>
                </div>
              </div>
            </div>
            <div><button className='bg-[#FB9B02] pt-[21px] pl-[53px] pb-[21px] pr-[53px] rounded-[14px] text-[white] sm:px-6 sm:py-3'>Apply Now</button></div>
          </div>
      
      </div>
      <div className='flex gap-3'>
        <div><h3 className='bg-[#C12DC1] text-[white] text-[25px] px-3 py-2 rounded-[10px] sm:px-2 sm:py-1'>1</h3></div>
        <div><h3 className='bg-[white] text-[#FB9B02] text-[25px] px-3 py-2 rounded-[10px] sm:px-2 sm:py-1 border-1 border-solid border-[#F8E7F8]'>2</h3></div>
        <div><h3 className='bg-[white] text-[#FB9B02] text-[25px] px-3 py-2 rounded-[10px] sm:px-2 sm:py-1 border-1 border-solid border-[#F8E7F8]'>3</h3></div>
      </div>
    </div>
    </div>
  )
}

export default Cthird
