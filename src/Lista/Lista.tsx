import { Link } from 'react-router-dom';
import { estudiantes, estado } from '../store';
import './Lista.css';
// Vista Lista: muestra la tabla con .map()ñÑ.
function Lista() {
    return (
        <div>
            <div className='agregar'>
                <h1>Lista de estudiantes</h1>
                <Link className="boton" to="/agregar">Agregar estudiante</Link>
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
                                        estado(e.creditos) === 'Matriculado' ? 'badge ok' : 'badge pend'
                                        }>
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

export default Lista;