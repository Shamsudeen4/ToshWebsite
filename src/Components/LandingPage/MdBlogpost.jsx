import React from 'react'
import plus from '../Images/homepage/Vector (1).png'
import photo from '../Images/homepage/Rectangle 137.png'
import photo1 from '../Images/homepage/Rectangle 138.png'
import photo2 from '../Images/homepage/Rectangle 139.png'
import edit from '../Images/homepage/tabler-icon-pencil-minus.png'
import smp from '../Images/homepage/Vector (2).png'
import smphoto from '../Images/homepage/Ellipse 16.png'
function MdBlogpost() {
  return (
    <div className='flex flex-col justify-center items-center w-[100%] h-[200vh]'>
      <div className='flex flex-col gap-[80px]'>
        <div>
            <h1 className='text-[30px] font-raleway font-bold'>Blog Post</h1>
            <h4>Home {'>'} Blog</h4>
        </div>
        <div className='flex justify-center gap-[450px]'>
            <div className='flex gap-[20px]'>
                <button className=' hover:bg-[#FB9B02] hover:border-[#FB9B02] hover:text-[white] px-[20px] py-[10px] rounded-[10px] border-[2px] border-solid border-[#00000080]'>All Post</button>
                <button className='hover:bg-[#FB9B02] hover:border-[#FB9B02] hover:text-[white] px-[20px] py-[10px] rounded-[10px] border-[2px] border-solid border-[#00000080]'>Popular</button>
                <button className='hover:bg-[#FB9B02] hover:border-[#FB9B02] hover:text-[white] px-[20px] py-[10px] rounded-[10px] border-[2px] border-solid border-[#00000080]'>Saved</button>
            </div>
            <div className='flex bg-[#FB9B02] items-center gap-[10px] px-[20px] py-[10px] rounded-[10px]'>
                 <img src={plus} alt="" className='w-[1vw] h-[2vh]' />
                <button className='text-[white] w-[6vw]'> Create Post</button>
            </div>
        </div>
        <div className='font-raleway '>
            <div className='flex items-center gap-[100px]'>
                <div className='flex flex-col gap-[80px]'>
                  <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-4'>
                      <img src={smphoto} alt="" />
                      <h3 className=' text-[18px]'>Toshmoney</h3>
                      <button className='bg-[#FB9B02] px-[30px] py-[5px] rounded-[20px] text-[white]'>Admin</button>
                    </div>
                    <div className='flex flex-col gap-3'>
                      <h2 className=' capitalize font-bold text-[18px] w-[22vw] leading-5 '>wanna break into software engineering in 2023? think twice</h2>
                      <h3 className=' capitalize text-[14px] w-[32vw] '>It won’t be smooth sailing for you — I am a refugee. I didn’t come from a background in data science, computer science, math, or statistics. But I’ve successfully transitioned into a data science job. Some friends...</h3>
                    </div>
                  </div>
                  <div className='flex gap-28 items-center'>
                    <div className='flex gap-10 capitalize'>
                      <h4>jan 11, 2023</h4>
                      <h4>5min read</h4>
                    </div>
                    <div className='flex gap-6 items-center'>
                      <img cla src={smp} alt="" />
                      <div className='flex gap-2'>
                        <img src={edit} alt="" />
                        <h4 className='text-[#FB9B02] font-semibold'>Edit</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div><img className='w-[20vw]' src={photo} alt="" /></div>
            </div><br/>
            <hr/>
        </div>
        <div>
        <div className='flex items-center gap-[100px]'>
                <div className='flex flex-col gap-[80px]'>
                  <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-4'>
                      <img src={smphoto} alt="" />
                      <h3 className=' text-[18px]'>Toshmoney</h3>
                      <button className='bg-[#FB9B02] px-[30px] py-[5px] rounded-[20px] text-[white]'>Admin</button>
                    </div>
                    <div className='flex flex-col gap-3'>
                      <h2 className=' capitalize font-bold text-[18px] w-[22vw] leading-5 '>wanna break into software engineering in 2023? think twice</h2>
                      <h3 className=' capitalize text-[14px] w-[32vw] '>It won’t be smooth sailing for you — I am a refugee. I didn’t come from a background in data science, computer science, math, or statistics. But I’ve successfully transitioned into a data science job. Some friends...</h3>
                    </div>
                  </div>
                  <div className='flex gap-28 items-center'>
                    <div className='flex gap-10 capitalize'>
                      <h4>jan 11, 2023</h4>
                      <h4>5min read</h4>
                    </div>
                    <div className='flex gap-6 items-center'>
                      <img src={smp} alt="" />
                      <div className='flex gap-2'>
                        <img src={edit} alt="" />
                        <h4 className='text-[#FB9B02] font-semibold'>Edit</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div><img className='w-[20vw]' src={photo1} alt="" /></div>
            </div><br/>
            <hr/>
        </div>
        <div>
        <div className='flex items-center gap-[100px]'>
                <div className='flex flex-col gap-[80px]'>
                  <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-4'>
                      <img src={smphoto} alt="" />
                      <h3 className=' text-[18px]'>Toshmoney</h3>
                      <button className='bg-[#FB9B02] px-[30px] py-[5px] rounded-[20px] text-[white]'>Admin</button>
                    </div>
                    <div className='flex flex-col gap-3'>
                      <h2 className=' capitalize font-bold text-[18px] w-[22vw] leading-5 '>wanna break into software engineering in 2023? think twice</h2>
                      <h3 className=' capitalize text-[14px] w-[32vw] '>It won’t be smooth sailing for you — I am a refugee. I didn’t come from a background in data science, computer science, math, or statistics. But I’ve successfully transitioned into a data science job. Some friends...</h3>
                    </div>
                  </div>
                  <div className='flex gap-28 items-center'>
                    <div className='flex gap-10 capitalize'>
                      <h4>jan 11, 2023</h4>
                      <h4>5min read</h4>
                    </div>
                    <div className='flex gap-6 items-center'>
                      <img src={smp} alt="" />
                      <div className='flex gap-2'>
                        <img src={edit} alt="" />
                        <h4 className='text-[#FB9B02] font-semibold'>Edit</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div><img className='w-[20vw]' src={photo2} alt="" /></div>
            </div><br/>
          
        </div>
      </div>
    </div>
  )
}

export default MdBlogpost
