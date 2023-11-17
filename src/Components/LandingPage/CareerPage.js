import React from 'react'
import Cfirst from './Cfirst'
import Csecond from './Csecond'
import Cthird from './Cthird'
import Cfourth from './Cfourth'
import NavBar from '../NavBar'
import Ndfooter from '../Ndfooter'

function CareerPage() {
  return (
    <div className='flex flex-col w-[100%] relative'>
      <NavBar/>
      <Cfirst/>
      <Csecond/>
      <Cthird/>
      <Cfourth/>
      <Ndfooter/>
    </div>
  )
}

export default CareerPage
