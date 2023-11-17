import React from 'react'
import st from '../Images/homepage/1.png'
import nd from '../Images/homepage/2.png'
import rd from '../Images/homepage/3.png'
import th from '../Images/homepage/4.png'
import thh from '../Images/homepage/5.png'
import thhh from '../Images/homepage/6.png'
function Blogexp() {
  return (
    <div className='flex flex-col items-center justify-center 2xl:h-[140vh] w-[100%] sm:py-12'>
      <div className='bg-[white] flex flex-col gap-[60px] items-center justify-center'> 
        <div className='flex justify-around gap-[330px] items-center sm:flex-col sm:gap-5'>
            <div>
                <h1 className='font-raleway font-bold text-[30px]'>Explore Our Blogs</h1>
            </div>
            <div className='flex gap-[30px] sm:gap-5 '>
            <button className='
            border-[1px] 
            border-solid 
            border-[#0000001A] 
            px-[30px] py-[10px] 
            rounded-[15px]
            '>Popular</button>
            <button className='
            border-[1px] 
            border-solid 
            border-[#0000001A] 
            px-[30px] py-[10px] 
            rounded-[15px]'>Recent</button>
            <button className='
            border-[1px] 
            border-solid 
            border-[#0000001A] 
            px-[30px] py-[10px] 
            rounded-[15px]'>Post</button>
            </div>
        </div>
        <div className='sm:hidden flex flex-col gap-[50px]'>
            <div className='flex gap-[50px]'>
                <div className='flex flex-col gap-[15px]'>
                    <img className='w-[18vw] h-[13vw]' src={st} alt="" />
                    <h2 
                    className=' 
                    font-raleway 
                    font-bold 
                    text-[23px] 
                    w-[17vw] 
                    leading-[23px]
                    '>
                        How To Use ChatGPT For 
                        UI/UX design: 25 Examples
                    </h2>
                    <h4 className=' 
                    capitalize 
                    text-[#00000099] 
                    text-[12px] 
                    w-[17vw]
                    
                     '>
                        The practical guide to include 
                        AI in your daily workflow — ‍ 
                        Instead of continuing the endless 
                        debate “will AI replace designers” 
                        let’s focus on something practical.
                    </h4>
                </div>
                <div className='flex flex-col gap-[15px]'>
                    <img className='w-[18vw] h-[13vw]' src={nd} alt="" />
                    <h2
                    className=' 
                    font-raleway 
                    font-bold 
                    text-[23px] 
                    w-[17vw] 
                    leading-[23px]
                    '>Bad Bad UI: 10 Common Mistakes In User 
                    Interfaces
                    </h2>
                    <h4 className='
                    capitalize 
                    text-[#00000099] 
                    text-[12px] 
                    w-[17vw]
                    
                    '>We all learn from mistakes, and this rule 
                        applies to web designers as well. In this 
                        article, we will tell you what mistakes 
                        many of them make when creating user 
                        interface design.
                    </h4></div>
                <div className='flex flex-col gap-[15px]'>
                    <img className='w-[18vw] h-[13vw]' src={rd} alt="" />
                    <h2 
                    className=' 
                    font-raleway 
                    font-bold 
                    text-[23px] 
                    w-[17vw] 
                    leading-[23px]
                    '>Frustrations and Triumphs: My Journey 
                        to Learning
                    </h2>
                    <h4 className='
                    capitalize 
                    text-[#00000099] 
                    text-[12px] 
                    w-[17vw]
                    '>A true language love story — I’ve 
                        been learning Korean for a whopping 
                        15 years. 15 difficult and exciting 
                        years. I can’t imagine a life without
                    </h4>
                </div>
            </div>
            <div className='flex  gap-[50px]'>
                <div className='flex flex-col gap-[15px]'>
                    <img className='w-[18vw] h-[13vw]' src={th} alt="" />
                    <h2 
                    className=' 
                    font-raleway 
                    font-bold 
                    text-[22px] 
                    w-[19vw] 
                    leading-[23px]
                    '>UI/UX Design Trends 2023</h2>
                    <h4 className='
                    capitalize 
                    text-[#00000099] 
                    text-[12px] 
                    w-[18vw]
                    '>Yet another year is coming 
                        to a close. Many of the 2022 
                        trends we anticipated, did 
                        find their use in digital 
                        products across our devices 
                        this year.
                    </h4>
                    </div>
                <div className='flex flex-col gap-[15px]'>
                    <img className='w-[18vw] h-[13vw]' src={thh} alt="" />
                    <h2
                    className=' 
                    font-raleway 
                    font-bold 
                    text-[23px] 
                    w-[17vw] 
                    leading-[23px]
                    '>Product Design Is Overtaking UX</h2>
                    <h4 className='
                    capitalize 
                    text-[#00000099] 
                    text-[12px] 
                    w-[17vw]
                    '>Understanding why UX is not enough 
                        and three ways to augment your 
                        skills — My job title recently 
                        changed to Senior Product Designer
                    </h4>
                </div>
                <div className='flex flex-col gap-[15px]'>
                    <img className='w-[18vw] h-[13vw]' src={thhh} alt="" />
                    <h2
                    className=' 
                    font-raleway 
                    font-bold 
                    text-[23px] 
                    w-[17vw] 
                    leading-[23px]
                    '>7 Tiny Habits That Can Have a Huge 
                        Effect on Your Life
                    </h2>
                    <h4 className='
                    capitalize 
                    text-[#00000099] 
                    text-[12px] 
                    w-[18vw]
                    '>Break progress into small steps to 
                        prevent overwhelm. — Too often, 
                        we focus on the big stuff. Someone 
                        who never works out is told to hit
                    </h4>
                </div>
            </div>
        </div>
        
        
        
        
        
        
        
        
        
        
        <div className='2xl:hidden flex flex-col gap-[50px]'>
            <div className='flex gap-[20px]'>
                <div className='flex flex-col gap-[15px]'>
                    <img className='w-[18vw] h-[13vw] sm:w-[40vw] sm:h-[33vw]' src={st} alt="" />
                    <h2 
                    className=' 
                    font-raleway 
                    font-bold 
                    text-[20px] 
                    w-[17vw] 
                    leading-[23px]
                    sm:w-[40vw]
                    '>
                        How To Use ChatGPT For 
                        UI/UX design: 25 Examples
                    </h2>
                    <h4 className=' 
                    capitalize 
                    text-[#00000099] 
                    text-[12px] 
                    w-[17vw]
                    sm:w-[40vw]
                     '>
                        The practical guide to include 
                        AI in your daily workflow — ‍ 
                        Instead of continuing the endless 
                        debate “will AI replace designers” 
                        let’s focus on something practical.
                    </h4>
                </div>
                <div className='flex flex-col gap-[15px]'>
                    <img className='w-[18vw] h-[13vw] sm:w-[40vw] sm:h-[33vw]' src={nd} alt="" />
                    <h2
                    className=' 
                    font-raleway 
                    font-bold 
                    text-[20px] 
                    w-[17vw]
                    sm:w-[40vw] 
                    leading-[23px]
                    '>Bad Bad UI: 10 Common Mistakes In User 
                    Interfaces
                    </h2>
                    <h4 className='
                    capitalize 
                    text-[#00000099] 
                    text-[12px] 
                    w-[17vw]
                    sm:w-[40vw]
                    '>We all learn from mistakes, and this rule 
                        applies to web designers as well. In this 
                        article, we will tell you what mistakes 
                        many of them make when creating user 
                        interface design.
                    </h4></div>
                    </div>
                    <div className='flex gap-[20px]'>
                <div className='flex flex-col gap-[15px]'>
                    <img className='w-[18vw] h-[13vw] sm:w-[40vw] sm:h-[33vw]' src={rd} alt="" />
                    <h2 
                    className=' 
                    font-raleway 
                    font-bold 
                    text-[20px] 
                    w-[40vw] 
                    leading-[23px]
                    '>Frustrations and Triumphs: My Journey 
                        to Learning
                    </h2>
                    <h4 className='
                    capitalize 
                    text-[#00000099] 
                    text-[12px] 
                    w-[40vw]
                    '>A true language love story — I’ve 
                        been learning Korean for a whopping 
                        15 years. 15 difficult and exciting 
                        years. I can’t imagine a life without
                    </h4>
                </div>
            
            
                <div className='flex flex-col gap-[15px]'>
                    <img className='w-[18vw] h-[13vw] sm:w-[40vw] sm:h-[33vw]' src={th} alt="" />
                    <h2 
                    className=' 
                    font-raleway 
                    font-bold 
                    text-[20px] 
                    w-[40vw] 
                    leading-[23px]
                    '>UI/UX Design Trends 2023</h2>
                    <h4 className='
                    capitalize 
                    text-[#00000099] 
                    text-[12px] 
                    w-[40vw]
                    '>Yet another year is coming 
                        to a close. Many of the 2022 
                        trends we anticipated, did 
                        find their use in digital 
                        products across our devices 
                        this year.
                    </h4>
                    </div>
                    </div>
                    <div className='flex  gap-[50px]'>
                <div className='flex flex-col gap-[15px]'>
                    <img className='w-[18vw] h-[13vw] sm:w-[40vw] sm:h-[33vw]' src={thh} alt="" />
                    <h2
                    className=' 
                    font-raleway 
                    font-bold 
                    text-[20px] 
                    w-[40vw] 
                    leading-[23px]
                    '>Product Design Is Overtaking UX</h2>
                    <h4 className='
                    capitalize 
                    text-[#00000099] 
                    text-[12px] 
                    w-[40vw]
                    '>Understanding why UX is not enough 
                        and three ways to augment your 
                        skills — My job title recently 
                        changed to Senior Product Designer
                    </h4>
                </div>
                <div className='flex flex-col gap-[15px]'>
                    <img className='w-[18vw] h-[13vw] sm:w-[40vw] sm:h-[33vw]' src={thhh} alt="" />
                    <h2
                    className=' 
                    font-raleway 
                    font-bold 
                    text-[20px] 
                    w-[40vw] 
                    leading-[23px]
                    '>7 Tiny Habits That Can Have a Huge 
                        Effect on Your Life
                    </h2>
                    <h4 className='
                    capitalize 
                    text-[#00000099] 
                    text-[12px] 
                    w-[40vw]
                    '>Break progress into small steps to 
                        prevent overwhelm. — Too often, 
                        we focus on the big stuff. Someone 
                        who never works out is told to hit
                    </h4>
                </div>
            </div>
        </div>
        <div className='flex gap-3'>
        <div><h3 className='bg-[#C12DC1] text-[white] text-[20px] px-3 py-2 rounded-[10px]'>1</h3></div>
        <div><h3 className='bg-[white] text-[#FB9B02] text-[20px] px-3 py-2 rounded-[10px] border-1 border-solid border-[#F8E7F8]'>2</h3></div>
        <div><h3 className='bg-[white] text-[#FB9B02] text-[20px] px-3 py-2 rounded-[10px] border-1 border-solid border-[#F8E7F8]'>3</h3></div>
      </div>


      </div>
    </div>
  )
}

export default Blogexp
