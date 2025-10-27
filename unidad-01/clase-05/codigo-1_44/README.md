# JBFlix - Cartelera de Películas

JBFlix es una aplicación web sencilla y elegante que muestra una cartelera de películas, inspirada en la interfaz de plataformas de streaming como Netflix. Permite a los usuarios ver una lista de películas, consultar sus detalles, ver tráilers y más.

## ✨ Características Principales

- **Carga Dinámica de Contenido**: Las películas se cargan de forma asíncrona desde un archivo `peliculas.json` usando AJAX.
- **Interfaz Atractiva**: Diseño inspirado en Netflix, con un tema oscuro y una paleta de colores cohesiva.
- **Tarjetas de Película Animadas**: Las tarjetas aparecen con una sutil animación de zoom al cargar la página.
- **Insignia de "Estreno"**: Las películas estrenadas en los últimos 30 días se marcan automáticamente con una insignia especial.
- **Página de Detalles**: Cada película tiene su propia página de detalles con sinopsis, fecha de estreno, géneros y precio.
- **Visualización de Tráilers**: Los usuarios pueden ver el tráiler de cada película en una ventana modal de Bootstrap sin salir de la página.
- **Diseño Responsivo**: La interfaz se adapta a diferentes tamaños de pantalla gracias a Bootstrap 5.
- **Formulario de Contacto**: Incluye una página de contacto con validación de formulario del lado del cliente.
- **Alerta de Bienvenida**: Muestra un mensaje de bienvenida a los nuevos visitantes, utilizando `localStorage` para mostrarlo solo una vez.

## 🚀 Tecnologías Utilizadas

- **Frontend**:
  - HTML5
  - CSS3 (con Variables CSS para theming)
  - JavaScript (ES6+)
- **Librerías y Frameworks**:
  - jQuery 3.6.4: Para la manipulación del DOM y peticiones AJAX.
  - Bootstrap 5.3.2: Para el diseño responsivo y componentes de UI (modales, tarjetas, etc.).
  - Google Fonts: Para la tipografía (`Bebas Neue` y `Roboto`).

## 📂 Estructura del Proyecto

```
codigo-1_44/
├── css/
│   └── style.css           # Hoja de estilos principal
├── data/
│   └── peliculas.json      # Archivo JSON con los datos de las películas
├── img/
│   ├── ...                 # Imágenes y pósters de las películas
├── js/
│   └── app.js              # Lógica principal para la página de inicio
├── pages/
│   ├── contacto.html       # Página del formulario de contacto
│   └── detalle.html        # Plantilla para la página de detalles de película
├── index.html              # Página principal que muestra la lista de películas
└── README.md               # Este archivo
```

## ⚙️ Cómo Ejecutar el Proyecto

Debido a que el proyecto utiliza peticiones `AJAX` para cargar un archivo JSON local (`peliculas.json`), abrir el archivo `index.html` directamente en el navegador puede causar errores de CORS (Cross-Origin Resource Sharing).

Para visualizar el proyecto correctamente, necesitas servir los archivos desde un servidor web local.

### Opción 1: Usando la extensión "Live Server" en Visual Studio Code

1.  Instala la extensión Live Server en VS Code.
2.  Abre la carpeta del proyecto en VS Code.
3.  Haz clic derecho sobre el archivo `index.html` y selecciona "Open with Live Server".

### Opción 2: Usando Python

1.  Asegúrate de tener Python instalado en tu sistema.
2.  Abre una terminal o línea de comandos en la raíz del proyecto (`codigo-1_44/`).
3.  Ejecuta el siguiente comando:
    ```bash
    # Para Python 3
    python -m http.server
    ```
4.  Abre tu navegador y ve a `http://localhost:8000`.

### Opción 3: Usando Node.js (con `http-server`)

1.  Asegúrate de tener Node.js y npm instalados.
2.  Instala `http-server` globalmente (solo necesitas hacerlo una vez):
    ```bash
    npm install -g http-server
    ```
3.  Abre una terminal en la raíz del proyecto y ejecuta:
    ```bash
    http-server
    ```
4.  Abre tu navegador y ve a la dirección que te indique la terminal (generalmente `http://127.0.0.1:8080`).

Link GitHub: https://github.com/jbenalcazarm1/contenidos/tree/main/unidad-01/clase-05/codigo-1_44