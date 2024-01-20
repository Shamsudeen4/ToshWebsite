import React from 'react'
import Home from '../ContactPage/Home'
import MessageUs from '../ContactPage/MessageUs'
import Form from '../ContactPage/Form'
import Faq from '../ContactPage/Faq'
import NavBar from '../NavBar'
import Footer from '../Footer'
import { Helmet } from "react-helmet";  

function Contactpage() {
  return (
    <div className='font-raleway'>
        <Helmet>  
        <title>Contact Us | Toshconsult Technologies Inc</title>  
        
        <meta name="description" content="Tutorial for React Helmet" />  
        <meta name="theme-color" content="#E6E6FA" />  
      </Helmet>  
   
        <NavBar contact="active"/>
        <Home/>
        <MessageUs/>
        <Form/>
        <Faq/>
        <Footer/>
    </div>
  )
}

export default Contactpage