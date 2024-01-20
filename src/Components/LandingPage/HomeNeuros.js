import React from 'react'
// import NavBar from '../NavBar'

// import Footer from '../Footer'
// import Logostabn from './Logostabn'
// import HomeAbout from './HomeAbout'
// import Hservices from './Hservices'

import Hreviews from './Hreviews'

import Hbecome2 from './Hbecome2'

// import Ndfooter from '../Ndfooter'
// import Homenew from './Homenew'
import HomeTech from './HomeTech'
import Hmission from './Hmission'
import HomeNeuro from './HomeNeuro'
// import HomeNabou from './HomeNabou'
import HNeuroSer from './HNeuroSer'
import HNeuroPort from './HNeuroPort'
function HomeNeuros() {
  return (
    <div>
    <div className=' relative w-[100%] h-[100vh] flex flex-col'>
  
     
      <HomeNeuro/>
      {/* <Logostabn /> */}
      <HNeuroPort/>
      <HNeuroSer/>
      <HomeTech/>
      <Hmission/>
      <Hreviews/>
      <Hbecome2/>
      
   
    </div>
    </div>
  )
}

export default HomeNeuros