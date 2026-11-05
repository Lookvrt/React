# ⚛️ React + TypeScript (Vite)

Aplicación en React con TypeScript desarrollada como un sistema de gestión educativa simplificado. El proyecto implementa enrutamiento con `react-router-dom`, gestión de estado compartido, formularios no controlados con validaciones y renderizado dinámico de listas con TypeScript.

---

## 📂 Estructura del Proyecto

```text
.
├── src/
│   ├── Agregar/                            # Módulo para registrar nuevos estudiantes
│   │   ├── Agregar.css                     # Estilos del formulario de registro
│   │   └── Agregar.tsx                     # Componente con formulario no controlado y validación
│   ├── Lista/                              # Módulo de visualización de estudiantes
│   │   ├── Lista.css                       # Estilos para la tabla y estados (badges)
│   │   └── Lista.tsx                       # Renderizado de lista de estudiantes con .map()
│   ├── Modificar/                          # Módulo para edición de información de estudiantes
│   │   └── Modificar.tsx                   # Componente de modificación (en desarrollo)
│   ├── App.css                             # Estilos de la barra de navegación y estructura base
│   ├── App.tsx                             # Componente raíz con la definición de rutas (Routes/Route)
│   ├── index.css                           # Estilos globales y variables CSS de la aplicación
│   ├── main.tsx                            # Punto de entrada de React con BrowserRouter
│   └── store.ts                            # Estado compartido global (interfaz Estudiante y helper de estado)
├── index.html                              # Plantilla HTML principal
├── package.json                            # Dependencias y scripts del proyecto
├── tsconfig.json                           # Configuración de TypeScript
├── vite.config.ts                          # Configuración del empaquetador Vite
└── README.md                               # Documentación del proyecto
```

---

## ⚙️ Configuración del Entorno

### 1. Creación del Proyecto con Vite y TypeScript
Generar la estructura base de la aplicación utilizando Vite con la plantilla de React y TypeScript:
```bash
npm create vite@latest proyecto -- --template react-ts
```

*(Nota: Ingresa al directorio generado para continuar)*
```bash
cd proyecto
```

### 2. Instalación de Dependencias
Instalar los paquetes y dependencias iniciales del proyecto (incluyendo `react-router-dom`):
```bash
npm install
npm install react-router-dom
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

*Este comando invoca al compilador de TypeScript (tsc) para verificar que no existan errores de tipos y luego utiliza Vite para empaquetar y minificar el código en la carpeta dist/.*

### 5. Vista Previa de la Compilación (Opcional)
Si deseas probar localmente la versión de producción que se acaba de generar en la carpeta dist/, ejecuta:
```bash
npm run preview
```