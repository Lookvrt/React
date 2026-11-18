import axios from 'axios';
// La API es pública: no necesitamos crear un servidor Express.
const URL_PERROS = 'https://dog.ceo/api/breeds/image/random/15';

function validarDatos(datos) {
    if (datos.status !== 'success' || !Array.isArray(datos.message)) {
        throw new Error('La API no devolvió una lista válida de imágenes.');
    }
    return datos.message;
}

export async function obtenerPerrosAxios() {
    const respuesta = await axios.get(URL_PERROS, { timeout: 12000 });
    // En Axios, el JSON se obtiene directamente desde respuesta.data.
    return validarDatos(respuesta.data);
}

export async function obtenerPerrosFetch() {
    const respuesta = await fetch(URL_PERROS);
    // Fetch requiere comprobar manualmente la respuesta HTTP.
    if (!respuesta.ok) {
        throw new Error(`Error HTTP ${respuesta.status}`);
    }
    const datos = await respuesta.json();
    return validarDatos(datos);
}