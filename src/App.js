
import './App.css';
import Agregar from './pages/Agregar';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/agregar' element={<Agregar />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  </BrowserRouter>
    ;
}

export default App;
