import React, { useState } from 'react'

function Askedq() {
  const[active, setactive]= useState(false)
  const toggleclick = () => {
    setactive(!active)
  }
  const togglecl = () => {
    setactive(!active)
  }
  return (
    <div className='flex flex-col items-conter mt-[5%] justify-center gap-10'>
      <div className='ml-[10%] text-[#FB9B02] bg-[#FEF3C7B2] w-[80vw] font-semibold py-5 rounded'>
        <h1 className='ml-8'>FREQUENTLY ASKED QUESTIONS</h1>
      </div>
      <div className='flex flex-col items-center '>
        {/* ////////////////////QUESTIONS 1//////////////////////// */}
        <div className=' flex flex-col gap-[4px] items-center ' >
        <button onClick={toggleclick} className={` border py-5 w-[80vw] flex font-semibold rounded justify-between px-7  `}>
          <h3>When is the class taking place</h3>
           <h3>+</h3> 
        </button>
        <p className={`${active ? '' : 'text-[0px]'} ${active ? 'py-4' : 'py-0'} transition-[all,3s,ease-in-out] w-[76vw] `}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
         quis! Accusamus tenetur earum ratione nam sunt unde quo inventore illo, rerum autem ipsa repellat 
         ullam dicta at iusto facilis cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem 
         perspiciatis recusandae eius iusto? Praesentium, sed rerum, distinctio a quibusdam nesciunt debitis, 
         recusandae adipisci nobis ea facere laudantium enim velit fuga?
         
    
         </p>
        </div>
        <div className=' flex flex-col gap-[4px] items-center ' >
        <button onClick={togglecl} className={` border py-5 w-[80vw] flex font-semibold rounded justify-between px-7  `}>
          <h3>When is the class taking place</h3>
           <h3>+</h3> 
        </button>
        <p className={`${active ? '' : 'text-[0px]'} ${active ? 'py-4' : 'py-0'} transition-[all,3s,ease-in-out] w-[76vw] `}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
         quis! Accusamus tenetur earum ratione nam sunt unde quo inventore illo, rerum autem ipsa repellat 
         ullam dicta at iusto facilis cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem 
         perspiciatis recusandae eius iusto? Praesentium, sed rerum, distinctio a quibusdam nesciunt debitis, 
         recusandae adipisci nobis ea facere laudantium enim velit fuga?
         
         
         
         </p>
        </div>
        <div className=' flex flex-col gap-[4px] items-center ' >
        <button onClick={toggleclick} className={` border py-5 w-[80vw] flex font-semibold rounded justify-between px-7  `}>
          <h3>When is the class taking place</h3>
           <h3>+</h3> 
        </button>
        <p className={`${active ? '' : 'text-[0px]'} ${active ? 'py-4' : 'py-0'} transition-[all,3s,ease-in-out] w-[76vw] `}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
         quis! Accusamus tenetur earum ratione nam sunt unde quo inventore illo, rerum autem ipsa repellat 
         ullam dicta at iusto facilis cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem 
         perspiciatis recusandae eius iusto? Praesentium, sed rerum, distinctio a quibusdam nesciunt debitis, 
         recusandae adipisci nobis ea facere laudantium enim velit fuga?
         
         
         
         </p>
        </div>
        <div className=' flex flex-col gap-[4px] items-center ' >
        <button onClick={toggleclick} className={` border py-5 w-[80vw] flex font-semibold rounded justify-between px-7  `}>
          <h3>When is the class taking place</h3>
           <h3>+</h3> 
        </button>
        <p className={`${active ? '' : 'text-[0px]'} ${active ? 'py-4' : 'py-0'} transition-[all,3s,ease-in-out] w-[76vw] `}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
         quis! Accusamus tenetur earum ratione nam sunt unde quo inventore illo, rerum autem ipsa repellat 
         ullam dicta at iusto facilis cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem 
         perspiciatis recusandae eius iusto? Praesentium, sed rerum, distinctio a quibusdam nesciunt debitis, 
         recusandae adipisci nobis ea facere laudantium enim velit fuga?
         
         
         
         </p>
        </div>
        <div className=' flex flex-col gap-[4px] items-center ' >
        <button onClick={toggleclick} className={` border py-5 w-[80vw] flex font-semibold rounded justify-between px-7  `}>
          <h3>When is the class taking place</h3>
           <h3>+</h3> 
        </button>
        <p className={`${active ? '' : 'text-[0px]'} ${active ? 'py-4' : 'py-0'} transition-[all,3s,ease-in-out] w-[76vw] `}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
         quis! Accusamus tenetur earum ratione nam sunt unde quo inventore illo, rerum autem ipsa repellat 
         ullam dicta at iusto facilis cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem 
         perspiciatis recusandae eius iusto? Praesentium, sed rerum, distinctio a quibusdam nesciunt debitis, 
         recusandae adipisci nobis ea facere laudantium enim velit fuga?
         
         
         
         </p>
        </div>
       
       
       
      </div>
    </div>
    
  )
}

export default Askedq
