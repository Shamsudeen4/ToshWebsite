import React from 'react'
import NavBar from '../NavBar'
import Afirst from './Afirst'
import Logostab from './Logostab'
import Asecond from './Asecond'
import Athird from './Athird'
import Afourth from './Afourth'
import Afifth from './Afifth'
import Asixth from './Asixth'
import Aseventh from './Aseventh'
import Ndfooter from '../Ndfooter'
import { Helmet } from "react-helmet";  
function AboutPage() {
  return (
    <div>
      <Helmet>  
        <title>About Us | Toshconsult Technologies Inc</title>  
        
        <meta name="description" content="Tutorial for React Helmet" />  
        <meta name="theme-color" content="#E6E6FA" />  
      </Helmet>  
   
      <NavBar about="active"/>
      <Afirst/>
      <Logostab/>
      <Asecond/>
      <Athird/>
      <Afourth/>
      <Afifth/>
      <Asixth/>
      <Aseventh/>
      <Ndfooter/>

    </div>
  )
}

export default AboutPage
