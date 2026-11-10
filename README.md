# ⚛️ React + TypeScript (Vite)

Aplicación interactiva en React con TypeScript desarrollada como un contador dinámico. El proyecto implementa manejo de estado local con `useState`, efectos secundarios con `useEffect` para la actualización síncrona del título del documento y renderizado de componentes funcionales optimizados con TypeScript.

---

## 📂 Estructura del Proyecto

```text
.
├── src/
│   ├── assets/                             # Recursos estáticos (imágenes y vectores SVG)
│   │   ├── hero.png                        # Imagen representativa del proyecto
│   │   ├── react.svg                       # Logo SVG de React
│   │   └── vite.svg                        # Logo SVG de Vite
│   ├── App.css                             # Estilos específicos del botón del contador y animaciones hover
│   ├── App.tsx                             # Componente principal `Contador` (lógica de estado y efecto)
│   ├── index.css                           # Estilos globales, tipografía y variables de temas (Dark/Light mode)
│   └── main.tsx                            # Punto de entrada principal con `StrictMode` y renderizado de React
├── index.html                              # Plantilla HTML principal de la aplicación
├── package.json                            # Scripts del proyecto y dependencias
├── tsconfig.json                           # Configuración de compilación de TypeScript
├── vite.config.ts                          # Configuración de empaquetado e integración de Vite
└── README.md                               # Documentación oficial del proyecto
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

*Este comando invoca al compilador de TypeScript (tsc) para verificar que no existan errores de tipos y luego utiliza Vite para empaquetar y minificar el código en la carpeta `dist/`.*

### 5. Vista Previa de la Compilación (Opcional)
Si deseas probar localmente la versión de producción que se acaba de generar en la carpeta `dist/`, ejecuta:
```bash
npm run preview
```