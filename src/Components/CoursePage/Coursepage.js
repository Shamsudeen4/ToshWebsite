import React from 'react'
import Available from '../CoursePage/Available'
import Benefit from '../CoursePage/Benefit'
import Allcourses from '../CoursePage/Allcourses'
import Reviews from '../CoursePage/Reviews'
import JoinUs from '../CoursePage/JoinUs'
import NavBar from '../NavBar'
import Footer from '../Footer'


function CoursePage() {
  return (
    <div>
        <NavBar/>
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