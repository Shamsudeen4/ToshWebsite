import NavBar from './Components/NavBar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

     <BrowserRouter>
     <Routes>
      <Route path='/' element={<NavBar/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
