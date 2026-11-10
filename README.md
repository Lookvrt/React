# ⚛️ React + TypeScript (Vite)

Aplicación en React con TypeScript desarrollada como un sistema de gestión simplificado. El proyecto implementa gestión de estado compartida y local con `useState`, efectos secundarios con `useEffect` para actualizar dinámicamente el título del navegador, formularios controlados con validaciones de campos y créditos, y renderizado dinámico de tablas con distintivos de estado (*badges*).

---

## 📂 Estructura del Proyecto

```text
.
├── src/
│   ├── assets/                             # Recursos estáticos (imágenes y vectores SVG)
│   │   ├── hero.png                        # Imagen representativa del proyecto
│   │   ├── react.svg                       # Logo SVG de React
│   │   └── vite.svg                        # Logo SVG de Vite
│   ├── App.css                             # Estilos del formulario en línea, tabla y distintivos de estado (badges)
│   ├── App.tsx                             # Componente principal Mini-LMS (interfaz Estudiante, lógica y renderizado)
│   ├── index.css                           # Estilos globales, tipografía y diseño del contenedor principal
│   └── main.tsx                            # Punto de entrada principal con `StrictMode` y renderizado de React
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
Instalar los paquetes y dependencias iniciales del proyecto:
```bash
npm install
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