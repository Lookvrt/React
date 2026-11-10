import { useState, useEffect } from 'react';
import './App.css';

// La forma de los datos del Mini-LMS.
interface Estudiante {
  nombre: string;
  creditos: number;
}
// Misma regla de matrícula de la Unidad 1.
function estado(creditos: number): string {
  if (creditos < 1 || creditos > 24) {
    return 'Créditos inválidos';
  } else if (creditos >= 12) {
    return 'Matriculado';
  }
  return 'Pendiente';
}

function App() {
  // useState: estado reactivo de la lista de estudiantes.
  const [estudiantes, setEstudiantes] = useState<Estudiante[]>([
    { nombre: 'María Torres', creditos: 18 },
    { nombre: 'Luis Pérez', creditos: 8 },
    { nombre: 'Ana Ruiz', creditos: 14 }
  ]);
  // useState: estado de los campos del formulario (componentes controlados).
  const [nombre, setNombre] = useState('');
  const [creditos, setCreditos] = useState('');
  // useEffect: efecto que se ejecuta cuando cambia la lista.
  useEffect(() => {
    document.title = `Mini-LMS (${estudiantes.length})`;
  }, [estudiantes]);
  // Agrega un estudiante: actualiza el estado y la lista se redibuja sola.
  function agregar() {
    const nombreLimpio = nombre.trim();
    const cred = Number(creditos);
    if (nombreLimpio === '') {
      alert('El nombre no puede estar vacío');
      return;
    }
    if (Number.isNaN(cred) || cred < 1 || cred > 24) {
      alert('Los créditos deben estar entre 1 y 24');
      return;
    }
    setEstudiantes([...estudiantes, { nombre: nombreLimpio, creditos: cred }]);
    setNombre('');
    setCreditos('');
  }

  return (
    <div className="contenedor">
      <h1>Mini-LMS · Estudiantes</h1>
      <div className="form-inline">
        <input
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          placeholder="Créditos"
          type="number"
          value={creditos}
          onChange={(e) => setCreditos(e.target.value)}
        />
        <button className="boton" onClick={agregar}>Agregar</button>
      </div>
      <table className="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Créditos</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {estudiantes.map((e, i) => (
            <tr key={i}>
              <td>{e.nombre}</td>
              <td>{e.creditos}</td>
              <td>
                <span
                  className={
                    estado(e.creditos) === 'Matriculado' ? 'badge ok' : 'badgepend'}>
                {estado(e.creditos)}
              </span>
            </td> 
          </tr>
        ))}
      </tbody>
    </table>
</div >
);
}
export default App;