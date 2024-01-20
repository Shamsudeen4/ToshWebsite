
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CareerPage from './Components/LandingPage/CareerPage.js';

import ServicesPage from './Components/LandingPage/ServicesPage.js';
import ServicesPag from './Components/ServicePage/Servicepage.js';


import SServicesPage from './Components/LandingPage/SServicesPage.js';
import BlogPostt from './Components/LandingPage/BlogPostt.jsx'
import Blogexp from './Components/LandingPage/Blogexp.jsx'
import BlogPost from './Components/LandingPage/BlogPost.js';
import NdBlogF from './Components/LandingPage/NdBlogF.jsx'
import NdBlogS from './Components/LandingPage/NdBlogS.jsx';
import NdBlogT from './Components/LandingPage/NdBlogT.jsx';
import NdBlog from './Components/LandingPage/NdBlog.js';
import Signin from './Components/LandingPage/Signin.jsx';
import Contactpopup from './Components/LandingPage/Contactpopup.jsx'
import Applicationpop from './Components/LandingPage/Applicationpop.jsx'
import MdNavbar from './Components/LandingPage/MdNavbar.jsx';
import MdBlog from './Components/LandingPage/MdBlog.js';
import MdBlogpost from './Components/LandingPage/MdBlogpost.jsx';
import MdApplic from './Components/LandingPage/MdApplic.jsx';
import Mdcontac from './Components/LandingPage/Mdcontac.jsx';
import Mdpostjob from './Components/LandingPage/Mdpostjob.jsx';
import Mdprofile from './Components/LandingPage/Mdprofile.jsx';
import Mdcreatepj from './Components/LandingPage/Mdcreatepj.jsx';
import Mdhome from './Components/LandingPage/Mdhome.jsx';
import Mdhomie from './Components/LandingPage/MdHomie.js';
import Detailspage from './Components/DetailsPage/Detailspage.js';
import Coursepage from './Components/CoursePage/Coursepage.js'
import Contactpage from './Components/ContactPage/Contactpage.js';
import Faqpage from './Components/FaqPage/Faqpage.js';
import Homepage from './Components/LandingPage/Hompage.js';
import Afirst from './Components/LandingPage/Afirst.jsx';
import AboutPage from './Components/LandingPage/AboutPage.js';
import Asecond from './Components/LandingPage/Asecond.jsx';
import Athird from './Components/LandingPage/Athird.jsx';
import Afourth from './Components/LandingPage/Afourth.jsx';
import Afifth from './Components/LandingPage/Afifth.jsx';
import Asixth from './Components/LandingPage/Asixth.jsx';
import Homepagend from './Components/LandingPage/Homepagend.js';
import Servicepage from './Components/ServicePage/Servicepage.js';
// import HomeNeuro from './Components/LandingPage/HomeNeuro.jsx';
import HomeNeuros from './Components/LandingPage/HomeNeuros.js';
import HLogistics from './Components/LandingPage/HLogistics.js';
import HLawFirm from './Components/LandingPage/HLawFirm.js';
import HPest from './Components/LandingPage/HPest.js';

import HomeBesp from './Components/LandingPage/HomeBesp.js';

import FrontnBack from './Components/FrontnBackend/FrontnBack.js';

import Frontend from './Components/FrontnBackend/Frontend.js';

import Backend from './Components/FrontnBackend/Backend.js';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      
      <Route path='/' element={<Homepage/>} />
      <Route path='/restaurant' element={<Homepagend/>} />
      <Route path='/career' element={<CareerPage/>} />
      <Route path='/services' element={<ServicesPage/>} />
      <Route path='/ndservices' element={<Servicepage/>} />
      <Route path='/sservices' element={<SServicesPage/>} />
      <Route path='/blogpost' element={<BlogPostt/>} />
      <Route path='/blogexp' element={<Blogexp/>} />
      <Route path='/blog' element={<BlogPost/>} />
      <Route path='/ndblog' element={<NdBlogF/>} />
      <Route path='/ndblogs' element={<NdBlogS/>} />
      <Route path='/ndblogt' element={<NdBlogT/>} />
      <Route path='/blogs' element={<NdBlog/>} />
      <Route path='/signin' element={<Signin/>} />
      <Route path='/popup' element={<Contactpopup/>} />
      <Route path='/pop' element={<Applicationpop/>} />
      <Route path='/mdnavbar' element={<MdNavbar/>} />
      <Route path='/mdblogs' element={<MdBlog/>} />
      <Route path='/mdblogpost' element={<MdBlogpost/>} />
      <Route path='/mdapp' element={<MdApplic/>} />
      <Route path='/mdcon' element={<Mdcontac/>} />
      <Route path='/mdpj' element={<Mdpostjob/>} />
      <Route path='/mdprofile' element={<Mdprofile/>} />
      <Route path='/mdcpj' element={<Mdcreatepj/>} />
      <Route path='/mdhome' element={<Mdhome/>} />
      <Route path='/mdhomie' element={<Mdhomie/>} />
      <Route path='/details' element={<Detailspage/>} />
      <Route path='/course' element={<Coursepage/>} />
      <Route path='/contact' element={<Contactpage/>} />
      <Route path='/faqs' element={<Faqpage/>} />
      <Route path='/services' element={<ServicesPage/>} />
      <Route path='/service' element={<ServicesPag/>} />
      <Route path='/afirst' element={<Afirst/>} />
      <Route path='/asecond' element={<Asecond/>} />
      <Route path='/athird' element={<Athird/>} />
      <Route path='/afourth' element={<Afourth/>} />
      <Route path='/afifth' element={<Afifth/>} />
      <Route path='/asixth' element={<Asixth/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/neuro' element={<HomeNeuros/>} />
      <Route path='/log' element={<HLogistics/>} />
      <Route path='/law' element={<HLawFirm/>} />
      <Route path='/pest' element={<HPest/>} />
   
      <Route path='/home' element={<HomeBesp/>} />

      <Route path='/newhome' element={<FrontnBack/>} />

      <Route path='/frontend' element={<Frontend/>} />
 
      <Route path='/backend' element={<Backend/>} />
    

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
