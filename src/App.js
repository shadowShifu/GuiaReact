import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './pages/Inicio.jsx'
import Fotos from './pages/Fotos.jsx'
import Videos from './pages/Videos.jsx'
import Contacto from './pages/Contacto.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/Inicio' element={<Inicio />} />
        <Route path='/Fotos' element={<Fotos />} />
        <Route path='/Videos' element={<Videos />} />
        <Route path='/Contacto' element={<Contacto />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
