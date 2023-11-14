import NavBar from './Components/NavBar.jsx';
import Footer from './Components/Footer.jsx'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Components/LandingPage/Homepage.jsx';
import Homepagee from './Components/LandingPage/Hompage.js'
import Logos from './Components/LandingPage/Logostab.jsx'
import Habout from './Components/LandingPage/HomeAbout.jsx'
import Hservices from './Components/LandingPage/Hservices.jsx';
import HACourses from './Components/LandingPage/HACourses.jsx';
import Hreviews from './Components/LandingPage/Hreviews.jsx';
import Hbecome from './Components/LandingPage/Hbecome.jsx';
import Cfirst from './Components/LandingPage/Cfirst.jsx';
import Csecond from './Components/LandingPage/Csecond.jsx';
import Cthird from './Components/LandingPage/Cthird.jsx'
import Cfourth from './Components/LandingPage/Cfourth.jsx';
import Ndfooter from './Components/Ndfooter.jsx';
import CareerPage from './Components/LandingPage/CareerPage.js';
import Sfirst from './Components/LandingPage/Sfirst.jsx';
import Ssecond from './Components/LandingPage/Ssecond.jsx';
import Sthird from './Components/LandingPage/Sthird.jsx';
import SSthird from './Components/LandingPage/SSthird.jsx';
import Sfourth from './Components/LandingPage/Sfourth.jsx';
import SSfourth from './Components/LandingPage/SSfourth.jsx';
import Sfifth from './Components/LandingPage/Sfifth.jsx';
import ServicesPage from './Components/LandingPage/ServicesPage.js';
import Hhighexp from './Components/LandingPage/Hhighexp.jsx';
import Hinteract from './Components/LandingPage/Hinteract.jsx';
import Hcomsup from './Components/LandingPage/Hcomsup.jsx';
import Hfeatures from './Components/LandingPage/Hfeatures.jsx';
import Hlist from './Components/LandingPage/Hlist.jsx';
import SSfirst from './Components/LandingPage/SSfirst.jsx'
import SSSsecond from './Components/LandingPage/SSSsecond.jsx'
import SSfifth from './Components/LandingPage/SSfifth.jsx'
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
function App() {
  return (
    <div className="App">

     <BrowserRouter>
     <Routes>
      <Route path='/nav' element={<NavBar/>} />
      <Route path='/footer' element={<Footer/>} />
      <Route path='/homepage' element={<Homepage/>} />
      <Route path='/' element={<Homepagee/>} />
      <Route path='/logos' element={<Logos/>} />
      <Route path='/habout' element={<Habout/>} />
      <Route path='/hservices' element={<Hservices/>} />
      <Route path='/havail' element={<HACourses/>} />
      <Route path='/hreviews' element={<Hreviews/>} />
      <Route path='/hbecome' element={<Hbecome/>} />
      <Route path='/cfirst' element={<Cfirst/>} />
      <Route path='/csecond' element={<Csecond/>} />
      <Route path='/cthird' element={<Cthird/>} />
      <Route path='/cfourth' element={<Cfourth/>} />
      <Route path='/ndfooter' element={<Ndfooter/>} />
      <Route path='/career' element={<CareerPage/>} />
      <Route path='/sfirst' element={<Sfirst/>} />
      <Route path='/ssecond' element={<Ssecond/>} />
      <Route path='/sthird' element={<Sthird/>} />
      <Route path='/sfourth' element={<Sfourth/>} />
      <Route path='/sfifth' element={<Sfifth/>} />
      <Route path='/services' element={<ServicesPage/>} />
      <Route path='/high' element={<Hhighexp/>} />
      <Route path='/hinteract' element={<Hinteract/>} />
      <Route path='/hcomm' element={<Hcomsup/>} />
      <Route path='/hfeature' element={<Hfeatures/>} />
      <Route path='/hlist' element={<Hlist/>} />
      <Route path='/ssfirst' element={<SSfirst/>} />
      <Route path='/ssssecond' element={<SSSsecond/>} />
      <Route path='/ssthird' element={<SSthird/>} />
      <Route path='/ssfourth' element={<SSfourth/>} />
      <Route path='/ssfifth' element={<SSfifth/>} />
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

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
