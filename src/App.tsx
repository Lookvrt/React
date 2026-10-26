import Saludo from './Saludo';
import './App.css';

function App() {
  const titulo: String = "Semana 11";
  const curso: String = 'JS Avanzado';
  return (
    <div>
      <h1>{titulo}, {curso}</h1>
      <Saludo />
      <div className='list'>
        <Lista />
      </div>
    </div>
  );
}

// La forma de los datos del Mini-LMS (tipos de TypeScript en TSX).
interface Estudiante {
  nombre: string;
  creditos: number;
}

function estado(creditos: number): string {
  if (creditos < 1 || creditos > 24) {
    return 'Créditos inválidos';
  } else if (creditos >= 12) {
    return 'Matriculado';
  }
  return 'Pendiente';
}

const estudiantes: Estudiante[] = [
  { nombre: 'María Torres', creditos: 18 },
  { nombre: 'Luis Pérez', creditos: 8},
  { nombre: 'Ana Ruiz', creditos: 14 },
  { nombre: 'Carlos Mendoza', creditos: 0}
];

// Componente funcional: devuelve la interfaz escrita en TSX.
function Lista() {
  return (
    <div className="contenedor">
      <h1>Mini-LMS · Lista de estudiantes</h1>
      <table className="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Créditos</th>
            <th>Estado</th>
            <th>Creditos validos</th>
          </tr>
        </thead>
        <tbody>
          {/* .map() genera una fila por estudiante */}
          {estudiantes.map((e, i) => (
            <tr key={i}>
              <td>{e.nombre}</td>
              <td>{e.creditos}</td>
              <td>
                <span
                  className={
                    estado(e.creditos) === 'Matriculado'
                      ? 'badge ok'
                      : 'badge pend'
                  }
                >
                  {estado(e.creditos)}
                </span>
              </td>
              <td>
                {estado(e.creditos) === 'Matriculado'
                  ? 'Valido'
                  : estado(e.creditos) === 'Pendiente'
                  ? 'Por confirmar'
                  : 'No valido'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
