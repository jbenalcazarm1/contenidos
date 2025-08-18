# Todos App - Sistema de Gestión de Tareas

Una aplicación web completa para la gestión de tareas personales con arquitectura full-stack moderna.

## 🚀 Características

- **Frontend**: Vue.js 3 + TypeScript + Vite + Bootstrap 5
- **Backend**: Node.js + Express + MongoDB
- **Base de datos**: MongoDB con Mongoose ODM
- **Despliegue**: Railway (Backend) + Netlify (Frontend) + MongoDB Atlas
- **API REST**: Operaciones CRUD completas
- **Responsive**: Diseño adaptable a todos los dispositivos
- **Validaciones**: Cliente y servidor
- **Tipos de tareas**: Universidad, Casa, Trabajo, Personal
- **Prioridades**: Alta, Media, Baja
- **Fechas límite**: Opcional con alertas de vencimiento

## 📁 Estructura del Proyecto

```
todos-app/
├── todos-api/          # Backend (Node.js + Express)
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── config/
│   ├── deployment/
│   └── package.json
├── todos-frontend/     # Frontend (Vue.js + TypeScript)
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── types/
│   │   └── assets/
│   ├── deployment/
│   └── package.json
└── README.md
```

## 🛠️ Instalación y Configuración

### Prerrequisitos

- Node.js 18+ 
- npm o yarn
- MongoDB (local o Atlas)
- Git

### Backend (API)

1. **Navegar al directorio del backend**
   ```bash
   cd todos-app/todos-api
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env
   ```
   
   Editar `.env` con tus configuraciones:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/todos-app
   FRONTEND_URL=http://localhost:5173
   ```

4. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   ```

   El servidor estará disponible en `http://localhost:5000`

### Frontend (Vue.js)

1. **Navegar al directorio del frontend**
   ```bash
   cd todos-app/todos-frontend
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env.local
   ```
   
   Editar `.env.local`:
   ```env
   VITE_API_URL=http://localhost:5000/api
   VITE_APP_TITLE=Todos App
   VITE_APP_VERSION=1.0.0
   ```

4. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   ```

   La aplicación estará disponible en `http://localhost:5173`

## 🌐 API Endpoints

### Tareas

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/tasks` | Obtener todas las tareas |
| GET | `/api/tasks/:id` | Obtener tarea por ID |
| POST | `/api/tasks` | Crear nueva tarea |
| PUT | `/api/tasks/:id` | Actualizar tarea |
| DELETE | `/api/tasks/:id` | Eliminar tarea |
| GET | `/api/tasks/stats` | Obtener estadísticas |

### Filtros de consulta

- `type`: Universidad, Casa, Trabajo, Personal
- `priority`: alta, media, baja
- `completed`: true, false
- `sortBy`: name, createdAt, updatedAt, deadline, priority
- `order`: asc, desc

### Ejemplo de uso

```javascript
// Obtener tareas pendientes de Universidad ordenadas por prioridad
GET /api/tasks?type=Universidad&completed=false&sortBy=priority&order=desc
```

## 🚀 Despliegue en Producción

### Backend en Railway

1. **Crear cuenta en Railway**
   - Visita [railway.app](https://railway.app)
   - Conecta tu repositorio de GitHub

2. **Configurar variables de entorno**
   ```env
   NODE_ENV=production
   MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/todos-app
   FRONTEND_URL=https://tu-app.netlify.app
   NETLIFY_URL=https://tu-app.netlify.app
   ```

3. **Desplegar**
   - Railway detectará automáticamente el `railway.json`
   - El despliegue se realizará automáticamente

### Frontend en Netlify

1. **Crear cuenta en Netlify**
   - Visita [netlify.com](https://netlify.com)
   - Conecta tu repositorio de GitHub

2. **Configurar build settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Base directory: `todos-app/todos-frontend`

3. **Configurar variables de entorno**
   ```env
   VITE_API_URL=https://tu-api.railway.app/api
   VITE_APP_TITLE=Todos App
   VITE_APP_VERSION=1.0.0
   ```

### Base de datos en MongoDB Atlas

1. **Crear cluster en MongoDB Atlas**
   - Visita [mongodb.com/atlas](https://mongodb.com/atlas)
   - Crea un cluster gratuito

2. **Configurar acceso**
   - Whitelist IP addresses (0.0.0.0/0 para desarrollo)
   - Crear usuario de base de datos

3. **Obtener connection string**
   ```
   mongodb+srv://username:password@cluster.mongodb.net/todos-app?retryWrites=true&w=majority
   ```

## 🧪 Testing

### Backend
```bash
cd todos-app/todos-api
npm test
```

### Frontend
```bash
cd todos-app/todos-frontend
npm run test
```

## 📝 Scripts Disponibles

### Backend
- `npm start`: Iniciar servidor de producción
- `npm run dev`: Iniciar servidor de desarrollo con nodemon
- `npm test`: Ejecutar tests

### Frontend
- `npm run dev`: Iniciar servidor de desarrollo
- `npm run build`: Construir para producción
- `npm run preview`: Previsualizar build de producción
- `npm run type-check`: Verificar tipos TypeScript

## 🔧 Tecnologías Utilizadas

### Backend
- **Node.js**: Runtime de JavaScript
- **Express.js**: Framework web
- **MongoDB**: Base de datos NoSQL
- **Mongoose**: ODM para MongoDB
- **express-validator**: Validación de datos
- **helmet**: Seguridad HTTP
- **cors**: Cross-Origin Resource Sharing
- **compression**: Compresión gzip

### Frontend
- **Vue.js 3**: Framework progresivo
- **TypeScript**: Tipado estático
- **Vite**: Build tool y dev server
- **Bootstrap 5**: Framework CSS
- **Bootstrap Icons**: Iconografía
- **Fetch API**: Cliente HTTP nativo

## 🎨 Características de UI/UX

- **Diseño responsive**: Adaptable a móviles, tablets y desktop
- **Tema moderno**: Colores y tipografía cuidadosamente seleccionados
- **Animaciones suaves**: Transiciones CSS para mejor experiencia
- **Feedback visual**: Estados de carga, errores y éxito
- **Accesibilidad**: Cumple estándares WCAG
- **PWA Ready**: Preparado para Progressive Web App

## 🔒 Seguridad

- **Validación de datos**: Cliente y servidor
- **Sanitización**: Prevención de XSS
- **Headers de seguridad**: Helmet.js
- **CORS configurado**: Orígenes permitidos
- **Rate limiting**: Prevención de spam (preparado)
- **HTTPS**: Forzado en producción

## 📊 Monitoreo y Analytics

- **Health checks**: Endpoints de estado
- **Logging estructurado**: Para debugging
- **Error tracking**: Preparado para Sentry
- **Performance monitoring**: Métricas de rendimiento

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👥 Autor

**Tu Nombre**
- GitHub: [@tu-usuario](https://github.com/tu-usuario)
- Email: tu-email@ejemplo.com

## 🙏 Agradecimientos

- [Vue.js](https://vuejs.org/) por el excelente framework
- [Express.js](https://expressjs.com/) por la simplicidad
- [MongoDB](https://mongodb.com/) por la flexibilidad
- [Bootstrap](https://getbootstrap.com/) por el diseño
- [Railway](https://railway.app/) por el hosting del backend
- [Netlify](https://netlify.com/) por el hosting del frontend

---

⭐ ¡No olvides dar una estrella al proyecto si te fue útil!