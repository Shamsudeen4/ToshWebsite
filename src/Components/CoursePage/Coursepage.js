import React from 'react'
import Available from '../CoursePage/Available'
import Benefit from '../CoursePage/Benefit'
import Allcourses from '../CoursePage/Allcourses'
import Reviews from '../CoursePage/Reviews'
import JoinUs from '../CoursePage/JoinUs'


function CoursePage() {
  return (
    <div>
        <Available/>
        <Benefit/>
        <Allcourses/>
        <Reviews/>
        <JoinUs/>
    </div>
  )
}

export default CoursePage