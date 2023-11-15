import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Coursepage from './Components/CoursePage/Coursepage.js';
import NavBar from './Components/NavBar.jsx';
import Servicepage from './Components/ServicePage/Servicepage.js';
import Contactpage from './Components/ContactPage/Contactpage.js';
import Faqpage from './Components/FaqPage/Faqpage.js';
import Detailspage from './Components/DetailsPage/Detailspage.js';
import Formpage from './Components/Formpage.jsx';
import Frame from './Components/Frame.jsx';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<NavBar/>} />
      <Route path='/Coursepage' element={<Coursepage/>}/>
      <Route path='/Servicepage' element={<Servicepage/>}/>
      <Route path='/Contactpage' element={<Contactpage/>}/>
      <Route path='/Faqpage' element={<Faqpage/>}/>
      <Route path='/Detailspage' element={<Detailspage/>}/>
      <Route path='/Formpage' element={<Formpage/>}/>
      <Route path='/Frame' element={<Frame/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
