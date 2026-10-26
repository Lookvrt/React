# ⚛️ React + TypeScript (Vite)

Aplicación en React con TypeScript donde se abarca el funcionamiento básico de los componentes funcionales, la exportación e importación de componentes y la composición en el árbol de renderizado. 

---

## 📂 Estructura del Proyecto

```text
.
├── src/
│   ├── assets/                            # Recursos estáticos (imágenes, iconos, etc.)
│   ├── App.css                            # Estilos específicos del componente principal (App)
│   ├── App.tsx                            # Componente raíz
│   ├── index.css                          # Estilos globales de la aplicación
│   ├── main.tsx                           # Punto de entrada de React (ReactDOM.createRoot)
│   └── saludo.tsx                         
├── index.html                             # Plantilla HTML principal
├── package.json                           # Dependencias y scripts del proyecto
├── tsconfig.json                          # Configuración de TypeScript
├── vite.config.ts                         # Configuración del empaquetador Vite
└── README.md
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
