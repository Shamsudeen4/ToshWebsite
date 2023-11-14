import React from 'react'
import closebtn from '../Images/homepage/Vector (3).png'
import bold from '../Images/aboutpage/Vector (3).png'
import ita from '../Images/aboutpage/tabler-icon-italic.png'
import att from '../Images/aboutpage/Vector (4).png'
import text from '../Images/aboutpage/tabler-icon-text-size.png'
import list from '../Images/aboutpage/Vector (5).png'
import list2 from '../Images/aboutpage/Vector (6).png'
import list3 from '../Images/aboutpage/Vector (7).png'
import list4 from '../Images/aboutpage/tabler-icon-paperclip.png'
function Mdcreatepj() {
  return (
    <div className=' font-raleway flex flex-col items-center justify-center w-[100%] h-[150vh]'>
        <div className='flex flex-col items-end gap-[50px]' >
      <div className=' flex flex-col gap-[60px]'>
        <div className='flex items-start flex-col gap-[40px]'>
            <div className='flex flex-col gap-[0px]'>
                <h1 className='text-[30px] font-bold'>Post Job</h1>
                <h4 className=' font-poppins font-semibold text-[#00000080]'>Home {'>'} Career {'>'} Post Job</h4>
            </div>
            <div className='flex items-start gap-4'>
                <div>
                    <label htmlFor="" className=' font-semibold uppercase'>Job Title</label><br/>
                    <input type="text"className='border-[2px] outline-none border-solid px-[30px] py-[10px] rounded-[10px] w-[30vw]' placeholder='Product Designer' />
                </div>
                <div>
                    <div className='flex flex-col gap-4 items-end'>
                    <div>
                    <label htmlFor="" className='font-semibold'>TAGS</label><br/>
                    <input className='border-[2px] border-solid outline-none px-[30px] py-[10px] rounded-[10px] w-[30vw]' type="text" placeholder='Design Thinking' />
                    </div>
                    <div className='flex gap-6'>
                        <div className='flex items-center border-[2px] border-solid px-[10px] py-[6px] rounded-[16px] gap-[15px] '>
                        <button className=' font-semibold'>User Research </button>
                        <img src={closebtn} alt="" />
                        </div>
                        <div className='flex items-center border-[2px] border-solid px-[10px] py-[6px] rounded-[16px] gap-[15px] '>
                            <button className=' font-semibold'>Wireframe </button>
                            <img src={closebtn} alt="" />
                        </div>
                        <div className='flex items-center border-[2px] border-solid px-[10px] py-[6px] rounded-[16px] gap-[15px] '> 
                            <button className=' font-semibold'>UX Process</button>
                            <img src={closebtn} alt="" />
                        </div>
                    </div>
                    </div>
                 
                </div>
                
            </div>
            <div className='flex flex-col gap-7 '>
                        <div>
                            <h4 className=' uppercase font-semibold'>Description</h4>
                        </div>
                        <div className='border-2 border-solid p-7 rounded-[20px]'>
                        <div className=' border-b-2 pb-7 flex items-center gap-[650px]'>
                            <div className=' flex items-center gap-5'>
                                <img src={bold} alt="" />
                                <img src={ita} alt="" />
                                <img src={att} alt="" />
                            </div>
                            <div className='flex items-center gap-5'>
                                <img src={text} alt="" />
                                <img src={list} alt="" />
                                <img src={list2} alt="" />
                                <img src={list3} alt="" />
                                <img src={list4} alt="" />
                            </div>

                        </div>
                        <div>
                           <textarea name="" id="" className='w-[100%] ' rows="10"></textarea>
                        </div>
                        </div>
                        
                    </div>
                    <div className='flex gap-7 '>
                        <div className='flex flex-col gap-3'>
                            <label htmlFor="">JOB TYPE</label>
                            <select name="" id="" className=' border-[2px] border-solid p-[10px] rounded-[10px] w-[35vw]'>
                                <option value="">Full - Time</option>
                                <option value="">Part - Time</option>
                            </select>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <label htmlFor="">LOCATION</label>
                            <select name="" id="" className='w-[25vw] border-[2px] border-solid p-[10px] rounded-[10px]'>
                                <option value="">Nigeria</option>
                                <option value="">Cameroon</option>
                                <option value="">Ghana</option>
                                <option value="">Togo</option>
                               
                            </select>
                        </div>
                     
                    </div>
        </div>
        

        
      </div>
      <div>
            <button className='border-[1px] border-solid text-[white] px-4 py-2 font-semibold rounded-[10px] bg-[#FB9B02]' >Post</button>
        </div>
     </div>
    </div>
  )
}

export default Mdcreatepj
