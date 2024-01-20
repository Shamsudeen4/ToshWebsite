import React from 'react'
import Available from '../CoursePage/Available'
import Benefit from '../CoursePage/Benefit'
import Allcourses from '../CoursePage/Allcourses'
import Reviews from '../CoursePage/Reviews'
import JoinUs from '../CoursePage/JoinUs'
import NavBar from '../NavBar'
import Footer from '../Footer'
import { Helmet } from "react-helmet";  

function CoursePage() {
  return (
    <div className='font-raleway'>
        <Helmet>  
          <title>Courses | Toshconsult Technologies Inc</title>  
        
         <meta name="description" content="Tutorial for React Helmet" />  
         <meta name="theme-color" content="#E6E6FA" />  
       </Helmet>  
   
        <NavBar courses="active"/>
        <Available/>
        <Benefit/>
        <Allcourses/>
        <Reviews/>
        <JoinUs/>
        <Footer/>
    </div>
  )
}

export default CoursePage