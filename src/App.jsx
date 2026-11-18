import { useEffect, useState } from 'react';
import { obtenerPerrosAxios, obtenerPerrosFetch } from './services/perrosApi';
import './App.css';

function transformarFotos(fotos) {
  return fotos.map((imagen, indice) => {
    // Ejemplo: .../breeds/hound-afghan/foto.jpg -> Hound Afghan
    const parteRaza = imagen.split('/breeds/')[1]?.split('/')[0] ?? 'desconocida';
    const raza = parteRaza.replaceAll('-', ' ')
      .replace(/\b\w/g, (letra) => letra.toUpperCase());

    return { id: `${indice}-${imagen}`, raza, imagen };
  });
}

export default function App() {
  const [perros, setPerros] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [cliente, setCliente] = useState('axios');
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  async function cargarPerros(metodo = 'axios') {
    setCargando(true);
    setError('');

    try {
      const fotos = metodo === 'fetch'
        ? await obtenerPerrosFetch()
        : await obtenerPerrosAxios();
      setPerros(transformarFotos(fotos));
    } catch (problema) {
      setPerros([]);
      setError(`No pudimos consultar la API. ${problema.message}`);
    } finally {
      setCargando(false);
    }
  }

  // Carga inicial del componente; [] evita una consulta tras cada renderizado.
  useEffect(() => {
    cargarPerros('axios');
  }, []);

  // El filtro trabaja con la lista recibida; no consulta la API por tecla.
  const perrosFiltrados = perros.filter((perro) =>
    perro.raza.toLowerCase().includes(busqueda.trim().toLowerCase())
  );

  return (
    <div className="pagina">
      <header className="cabecera">
        <div className="contenido cabecera-interior">
          <span className="logo-texto">🐾 Dog Gallery</span>
          <span className="marca">Laboratorio React · API pública</span>
        </div>
      </header>

      <main className="contenido">
        <section className="presentacion">
          <p className="eyebrow">EXPLORADOR DE RAZAS</p>
          <h1>Conoce nuestra galería de perros</h1>
          <p>
            Consulta fotos reales desde Dog CEO, busca por raza y actualiza
            la galería sin recargar la página.
          </p>
        </section>

        <section className="herramientas" aria-label="Herramientas de consulta">
          <label className="campo">
            <span>Buscar por raza</span>
            <input
              type="search"
              placeholder="Ejemplo: hound, pug, spaniel..."
              value={busqueda}
              onChange={(evento) => setBusqueda(evento.target.value)}
            />
          </label>

          <label className="campo selector">
            <span>Cliente HTTP</span>
            <select
              value={cliente}
              onChange={(evento) => setCliente(evento.target.value)}
            >
              <option value="axios">Axios</option>
              <option value="fetch">Fetch API</option>
            </select>
          </label>

          <button
            type="button"
            onClick={() => cargarPerros(cliente)}
            disabled={cargando}
          >
            {cargando ? 'Consultando…' : '↻ Recargar fotos'}
          </button>
        </section>

        <section className="resultados" aria-live="polite">
          <div className="resumen">
            <h2>Fotografías disponibles</h2>
            <span>{perrosFiltrados.length} de {perros.length} resultados</span>
          </div>

          {cargando ? (
            <p className="mensaje">Cargando imágenes desde la API...</p>
          ) : error ? (
            <div className="mensaje error" role="alert">{error}</div>
          ) : perrosFiltrados.length === 0 ? (
            <p className="mensaje">
              No hay fotos de esa raza en esta consulta.
              Prueba otra palabra o recarga.
            </p>
          ) : (
            <div className="galeria">
              {perrosFiltrados.map((perro) => (
                <article className="tarjeta" key={perro.id}>
                  <img
                    src={perro.imagen}
                    alt={`Perro de raza ${perro.raza}`}
                    loading="lazy"
                  />
                  <div className="tarjeta-contenido">
                    <span className="etiqueta">RAZA</span>
                    <h3>{perro.raza}</h3>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>

      <footer className="pie">Ejercicio de aprendizaje · React + Vite + Dog CEO API</footer>
    </div>
  );
}
