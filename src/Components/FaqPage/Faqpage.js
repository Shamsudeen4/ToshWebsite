import React from 'react'
import Home from '../FaqPage/Home'
import Gethelp from '../FaqPage/Gethlelp'
import Askedq from '../FaqPage/Askedq'
import Touch from '../FaqPage/Touch'
import NavBar from '../NavBar'
import Footer from '../Footer'
// import New from './New'

function Faqpage() {
  return (
    <div>
      <NavBar/>
        <Home/>
        <Gethelp/>
        <Askedq/>
        {/* <New/> */}
        <Touch/>
        <Footer/>
    </div>
  )
}

export default Faqpage