import React from 'react'
import Home from '../ContactPage/Home'
import MessageUs from '../ContactPage/MessageUs'
import Form from '../ContactPage/Form'
import Faq from '../ContactPage/Faq'
import NavBar from '../NavBar'
import Footer from '../Footer'

function Contactpage() {
  return (
    <div>
        <NavBar/>
        <Home/>
        <MessageUs/>
        <Form/>
        <Faq/>
        <Footer/>
    </div>
  )
}

export default Contactpage