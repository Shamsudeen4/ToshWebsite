import React from 'react'
import ntw from '../Images/homepage/Group 12.png'
import nd from '../Images/homepage/Group 11.png'
import rd from '../Images/homepage/Group 9.png'
import th from '../Images/homepage/Group 10.png'
function Hlist() {
  return (
    <div className='bg-[white] p-[50px]'>
      <div className=' flex flex-col gap-[40px] items-center justify-center h-[150vh] w-[100%] text-center'>
        <div className='flex flex-col gap-5 items-center border-2 border-solid border-[#F8E7F8] px-[45px] py-[30px] rounded-[15px]'>
            <div>
                <img src={ntw} alt="" />
            </div>
            <div className='flex flex-col gap-1 items-center'>
                <h2 className=' font-raleway font-bold uppercase text-[15px] w-[58vw]'>Network With other folks</h2>
                <h4 className=' font-poppins text-[11px] w-[60vw]'>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. 
                    Eget aenean accumsan bibendum 
                    gravida maecenas augue. Lorem 
                    ipsum dolor sit amet, 
                    consectetur adipiscing 
                    elit..
                </h4>
            </div>
        </div>
        <div className='flex flex-col gap-5 items-center border-2 border-solid border-[#FEF3C7] px-[45px] py-[30px] rounded-[15px]'>
            <div>
                <img src={nd} alt="" />
            </div>
            <div className='flex flex-col gap-1 items-center'>
                <h2 className=' font-raleway font-bold uppercase text-[15px] w-[54vw]'>collaborative project</h2>
                <h4 className=' font-poppins text-[11px] w-[60vw]'>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. 
                    Eget aenean accumsan bibendum 
                    gravida maecenas augue. Lorem 
                    ipsum dolor sit amet, 
                    consectetur adipiscing 
                    elit..
                </h4>
            </div>
        </div>
        <div className='flex flex-col gap-5 items-center border-2 border-solid border-[#F8E7F8] px-[45px] py-[30px] rounded-[15px]'>
            <div>
                <img src={rd} alt="" />
            </div>
            <div className='flex flex-col gap-1 items-center'>
                <h2 className=' font-raleway font-bold uppercase text-[15px] w-[54vw]'>experience instructors</h2>
                <h4 className=' font-poppins text-[11px] w-[60vw]'>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. 
                    Eget aenean accumsan bibendum 
                    gravida maecenas augue. Lorem 
                    ipsum dolor sit amet, 
                    consectetur adipiscing 
                    elit..
                </h4>
            </div>
        </div>
        <div className='flex flex-col gap-5 items-center border-2 border-solid border-[#FEF3C7] px-[45px] py-[30px] rounded-[15px]'>
            <div>
                <img src={th} alt="" />
            </div>
            <div className='flex flex-col gap-1 items-center'>
                <h2 className=' font-raleway font-bold uppercase text-[15px] w-[54vw]'>working experience</h2>
                <h4 className=' font-poppins text-[11px] w-[60vw]'>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. 
                    Eget aenean accumsan bibendum 
                    gravida maecenas augue. Lorem 
                    ipsum dolor sit amet, 
                    consectetur adipiscing 
                    elit..
                </h4>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Hlist
