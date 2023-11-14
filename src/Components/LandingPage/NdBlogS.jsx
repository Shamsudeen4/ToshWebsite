import React from 'react'
import st from '../Images/homepage/10.png'
function NdBlogS() {
  return (
    <div className='bg-[white] flex flex-col items-center justify-center w-[60vw] h-[140vh]'>
      <div className='flex flex-col gap-[40px] px-[6%]'>
        <div className='flex flex-col gap-[20px]'>
            <h1 className='font-raleway font-bold text-[25px] w-[25vw] leading-[30px]'>How To Use ChatGPT For 
                UI/UX Design: 25 Examples
            </h1>
            <img className='w-[60vw]' src={st} alt="" />
        </div>
        <div className=' font-poppins flex flex-col gap-[30px]'>
            <h4 className='text-[#00000080] capitalize'>
            Instead of continuing 
            the endless debate “will AI 
            replace designers” let’s 
            focus on something practical.
            The truth is that current AI 
            solutions like chatGPT may 
            become a huge support in 
            everyday tasks.
            </h4>
            <h4 className='text-[#00000080] capitalize'>
            The topics that may be boosted 
            by the tool may surprise you. 
            In this post, you will see 
            plenty of practical examples. 
            I am pretty sure that very 
            soon, you won’t imagine your 
            design process without 
            chatGPT!
            Let’s get started!

            </h4>
        </div>
        <div className=' font-poppins flex flex-col gap-[20px]'>
            <h2 className='font-bold capitalize'>
            1. Generate copy for a website 
            or section
            </h2>
            <h4 className='text-[#00000080] capitalize'>
            Using “lorem ipsum” is very simple, 
            but the design still feels dummy. 
            The better way to visualize design 
            & present even initial iterations 
            to the client is to include a 
             copy.
            AI tools may generate quite 
            good examples of text content:

            </h4>
        </div>
        <div className='font-poppins flex flex-col gap-[20px]'>
        <h2 className='font-bold capitalize '>2. Get ideas for page layout 
            or wireframe
        </h2>
            <h4 className='text-[#00000080] capitalize'>

            Tight deadline? Feeling stuck? 
            To unleash creativity and generate 
            new ideas, use AI to get a 
            description of a wireframe for a 
            specific layout.
            Some results seem to work surprisingly 
            well.

            </h4>
        </div>
        <div className='font-poppins flex flex-col gap-[20px]'>
        <h2  className='font-bold capitalize '>3. Ideas to optimize your design 
            workflow
        </h2 >
            <h4 className='text-[#00000080] capitalize'>
            If you are like me, you like to learn 
            new things and improve your skills. AI 
             may suggest you explore new ways of 
             workflow elements like a handoff.
            </h4>
        </div>

      </div>
    </div>
  )
}
export default NdBlogS
