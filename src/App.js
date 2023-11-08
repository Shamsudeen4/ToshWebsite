import NavBar from './Components/NavBar.jsx';
import Footer from './Components/Footer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Components/LandingPage/Homepage.jsx';
import Homepagee from './Components/LandingPage/Hompage.js'
import Logos from './Components/LandingPage/Logostab.jsx'
import Habout from './Components/LandingPage/HomeAbout.jsx'
import Hservices from './Components/LandingPage/Hservices.jsx';
import HACourses from './Components/LandingPage/HACourses.jsx';
function App() {
  return (
    <div className="App">

     <BrowserRouter>
     <Routes>
      <Route path='/' element={<NavBar/>} />
      <Route path='/footer' element={<Footer/>} />
      <Route path='/homepage' element={<Homepage/>} />
      <Route path='/home' element={<Homepagee/>} />
      <Route path='/logos' element={<Logos/>} />
      <Route path='/habout' element={<Habout/>} />
      <Route path='/hservices' element={<Hservices/>} />
      <Route path='/havail' element={<HACourses/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
