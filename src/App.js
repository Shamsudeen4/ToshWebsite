import NavBar from './Components/NavBar.jsx';
import Footer from './Components/Footer.jsx'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Components/LandingPage/Homepage.jsx';
import Homepagee from './Components/LandingPage/Hompage.js'

import CareerPage from './Components/LandingPage/CareerPage.js';

import ServicesPage from './Components/LandingPage/ServicesPage.js';


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
import NavBar from './Components/NavBar.jsx';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/nav' element={<NavBar/>} />
      <Route path='/career' element={<CareerPage/>} />
      <Route path='/services' element={<ServicesPage/>} />
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

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
