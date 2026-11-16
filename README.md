# ⚛️ React + JavaScript (Vite)

Aplicación en React desarrollada como un comparador práctico de clientes HTTP para el consumo de APIs REST (`FakeStoreAPI`). El proyecto implementa peticiones asíncronas utilizando la **Fetch API** nativa (con `AbortController`), **Axios** (con instancias e interceptores de petición) y **Alova** (con gestión automática de estado y caché mediante `useRequest`).

---

## 📂 Estructura del Proyecto

```text
.
├── src/
│   ├── api/                                # Configuración de clientes e instancias de API
│   │   └── alovaInstance.js                # Instancia de Alova, adaptador Fetch y caché de 5 min
│   ├── assets/                             # Recursos estáticos (imágenes y vectores SVG)
│   ├── components/                         # Componentes de catálogo según cliente HTTP
│   │   ├── CatalogoAlova.jsx               # Consumo de productos con Alova y hook useRequest
│   │   ├── CatalogoAxios.jsx               # Consumo de productos con Axios e interceptores
│   │   └── CatalogoFetch.jsx               # Consumo de productos con Fetch API y AbortController
│   ├── App.css                             # Estilos de componentes y diseño responsivo
│   ├── App.jsx                             # Componente raíz que renderiza los 3 catálogos en paralelo
│   ├── index.css                           # Estilos globales, variables CSS y tema claro/oscuro
│   └── main.jsx                            # Punto de entrada de React con StrictMode
├── index.html                              # Plantilla HTML principal
├── package.json                            # Dependencias (`axios`, `alova`) y scripts del proyecto
├── vite.config.js                          # Configuración del empaquetador Vite
└── README.md                               # Documentación del proyecto
```

---

## ⚙️ Configuración del Entorno

### 1. Creación del Proyecto con Vite y React
Generar la estructura base de la aplicación utilizando Vite con la plantilla de React (JavaScript):
```bash
npm create vite@latest proyecto -- --template react
```

*(Nota: Ingresa al directorio generado para continuar)*
```bash
cd proyecto
```

### 2. Instalación de Dependencias
Instalar los paquetes base del proyecto junto con las librerías HTTP `axios` y `alova`:
```bash
npm install
npm install axios alova
```

### 3. Ejecución del Servidor Local
Iniciar el servidor de desarrollo local para visualizar la aplicación:
```bash
npm run dev
```

*(Para detener el servidor en la consola utiliza `Ctrl + C`. Para volver a levantarlo en cualquier momento, vuelve a ejecutar `npm run dev`).*

### 4. Compilación para Producción
Para generar los archivos optimizados y listos para desplegar en un entorno de producción, ejecuta:
```bash
npm run build
```

*Este comando utiliza Vite para empaquetar y minificar el código en la carpeta dist/.*

### 5. Vista Previa de la Compilación (Opcional)
Si deseas probar localmente la versión de producción que se acaba de generar en la carpeta dist/, ejecuta:
```bash
npm run preview
```