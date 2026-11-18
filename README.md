# ⚛️ React + JavaScript (Vite)

Aplicación en React desarrollada como una galería interactiva de perros que consume la API pública de `Dog CEO`. El proyecto implementa peticiones asíncronas seleccionables entre **Axios** y **Fetch API**, filtrado en tiempo real por raza en el cliente, manejo de estados de carga y error, y renderizado dinámico de tarjetas responsivas.

---

## 📂 Estructura del Proyecto

```text
.
├── src/
│   ├── services/                           # Capa de servicios y consumo de APIs externas
│   │   └── PerrosApi.js                    # Funciones de consulta (Axios y Fetch) y validación de datos
│   ├── App.css                             # Estilos de cabecera, barra de herramientas y galería en grid
│   ├── App.jsx                             # Componente principal con búsqueda, selector HTTP y tarjetas
│   ├── index.css                           # Estilos globales, tipografía y configuración base
│   └── main.jsx                            # Punto de entrada de React con StrictMode
├── index.html                              # Plantilla HTML principal
├── package.json                            # Dependencias (`axios`) y scripts del proyecto
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
Instalar los paquetes base del proyecto junto con la librería HTTP `axios`:
```bash
npm install
npm install axios
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