import { Routes, Route, Link, Navigate  } from 'react-router-dom';
import Lista from './Lista/Lista';
import Agregar from './Agregar/Agregar';
import Modificar from './Modificar/Modificar';  
import './App.css';
// Componente raíz: barra de navegación + área de rutas.
function App() {
  return (
    <div>
      <nav className="navbar">
        <span className="marca">Mini-LMS</span>
        <div className='nav'>
          <Link className="nav-btn" to="/">Lista</Link>
          <Link className="nav-btn" to="/agregar">Agregar</Link>
          <Link className="nav-btn" to="/modificar">Modificar</Link>
        </div>
      </nav>
      <div className="contenedor">
        <Routes>
          <Route path="/" element={<Lista/>} />
          <Route path="/agregar" element={<Agregar />} />
          <Route path="/modificar" element={<Modificar />} />
          <Route path="" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;