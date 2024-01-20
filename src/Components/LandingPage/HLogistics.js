import React from 'react'
// import NavBar from '../NavBar'

// import Footer from '../Footer'
import Logostabn from './Logostabn'
// import HomeAbout from './HomeAbout'
// import Hservices from './Hservices'

import Hreviews from './Hreviews'

import Hbecome2 from './Hbecome2'

// import Ndfooter from '../Ndfooter'
// import Homenew from './Homenew'
import HomeTech from './HomeTech'
import Hmission from './Hmission'
// import Homenewnd from './Homenewnd'
// import HomeNabou from './HomeNabou'
import HLogNew from './HLogNew'
import HLogport from './HLogport'
import HLogServ from './HLogServ'
function HLogistics() {
  return (
    <div>
    <div className=' relative w-[100%] h-[100vh] flex flex-col'>
  
      
      <HLogNew/>
      <Logostabn />
      <HLogport/>
      <HLogServ/>
      <HomeTech/>
      <Hmission/>
      <Hreviews/>
      <Hbecome2/>
      {/* <Footer/> */}
   
    </div>

    </div>
  )
}

export default HLogistics
