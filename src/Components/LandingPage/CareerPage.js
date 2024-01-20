import React from 'react'
import Cfirst from './Cfirst'
import Csecond from './Csecond'
import Cthird from './Cthird'
import Cfourth from './Cfourth'
import NavBar from '../NavBar'
import Ndfooter from '../Ndfooter'
import { Helmet } from 'react-helmet'
function CareerPage() {
  return (
    <div className='flex flex-col w-[100%] relative'>
      <Helmet>  
        <title>Career | Toshconsult Technologies Inc</title>  
        
        <meta name="description" content="Tutorial for React Helmet" />  
        <meta name="theme-color" content="#E6E6FA" />  
      </Helmet>  
      <NavBar career="active" />
      <Cfirst/>
      <Csecond/>
      <Cthird/>
      <Cfourth/>
      <Ndfooter/>
    </div>
  )
}

export default CareerPage
