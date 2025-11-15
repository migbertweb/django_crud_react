# Django CRUD React

Aplicación CRUD (Create, Read, Update, Delete) desarrollada con Django REST Framework como backend y React con Vite como frontend.

## 📋 Descripción

Este proyecto es una aplicación web completa para gestión de tareas que demuestra la integración entre Django y React. El backend proporciona una API RESTful para manejar las operaciones CRUD sobre tareas, mientras que el frontend ofrece una interfaz moderna y responsiva construida con React.

## 🚀 Características

- ✅ **Backend REST API** con Django REST Framework
- ⚛️ **Frontend moderno** con React y Vite
- 🎨 **Diseño responsivo** con Tailwind CSS
- 📱 **Navegación fluida** con React Router
- 🔔 **Notificaciones** con React Hot Toast
- 📝 **Formularios** con React Hook Form
- 🔄 **CORS configurado** para comunicación entre frontend y backend
- 🗄️ **Base de datos SQLite** (fácil de cambiar a PostgreSQL/MySQL)

## 🛠️ Tecnologías

### Backend
- **Django 4.2.1** - Framework web de Python
- **Django REST Framework 3.14.0** - API REST
- **django-cors-headers 3.14.0** - Manejo de CORS
- **CoreAPI** - Documentación automática de API

### Frontend
- **React 18.2.0** - Biblioteca de JavaScript para interfaces
- **Vite 4.2.2** - Herramienta de construcción rápida
- **React Router DOM 6.11.1** - Enrutamiento
- **React Hook Form 7.43.9** - Manejo de formularios
- **Axios 1.4.0** - Cliente HTTP
- **React Hot Toast 2.4.1** - Notificaciones
- **Tailwind CSS 3.3.2** - Framework de CSS utilitario

## 📦 Instalación

### Requisitos previos

- Python 3.8 o superior
- Node.js 16 o superior
- npm o yarn

### Backend (Django)

1. Clona el repositorio:
```bash
git clone https://github.com/migbertweb/django_crud_react.git
cd django_crud_react
```

2. Crea un entorno virtual:
```bash
python -m venv venv
```

3. Activa el entorno virtual:

**Linux/Mac:**
```bash
source venv/bin/activate
```

**Windows:**
```bash
venv\Scripts\activate
```

4. Instala las dependencias:
```bash
pip install -r requeriments.txt
```

5. Ejecuta las migraciones:
```bash
python manage.py migrate
```

6. (Opcional) Crea un superusuario:
```bash
python manage.py createsuperuser
```

7. Inicia el servidor de desarrollo:
```bash
python manage.py runserver
```

El backend estará disponible en `http://localhost:8000`

### Frontend (React)

1. Navega a la carpeta del cliente:
```bash
cd client
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

El frontend estará disponible en `http://localhost:5173`

## 📁 Estructura del Proyecto

```
django_crud_react/
│
├── django_crud_api/          # Configuración principal de Django
│   ├── settings.py           # Configuración del proyecto
│   ├── urls.py               # URLs principales
│   ├── wsgi.py               # Configuración WSGI
│   └── asgi.py               # Configuración ASGI
│
├── tasks/                    # Aplicación de tareas (Django)
│   ├── models.py             # Modelo de datos Task
│   ├── views.py              # Vistas de la API
│   ├── serializer.py         # Serializadores de REST Framework
│   ├── urls.py               # URLs de la aplicación
│   └── admin.py              # Configuración del admin
│
├── client/                   # Aplicación React
│   ├── src/
│   │   ├── api/
│   │   │   └── tasks.api.js  # Cliente API para tareas
│   │   ├── components/
│   │   │   ├── Navigation.jsx
│   │   │   ├── TaskCard.jsx
│   │   │   └── TasksList.jsx
│   │   ├── pages/
│   │   │   ├── TasksPage.jsx
│   │   │   └── TaskFormPage.jsx
│   │   ├── App.jsx           # Componente principal
│   │   └── main.jsx          # Punto de entrada
│   └── package.json
│
├── manage.py                 # Script de gestión de Django
├── db.sqlite3                # Base de datos SQLite
├── requeriments.txt          # Dependencias de Python
└── README.md                 # Este archivo
```

## 🔌 API Endpoints

La API está disponible en `http://localhost:8000/task/api/v1/`

- `GET /tasks/` - Lista todas las tareas
- `GET /tasks/{id}/` - Obtiene una tarea específica
- `POST /tasks/` - Crea una nueva tarea
- `PUT /tasks/{id}/` - Actualiza una tarea existente
- `DELETE /tasks/{id}/` - Elimina una tarea

### Documentación de la API

La documentación interactiva está disponible en:
```
http://localhost:8000/task/docs/
```

## 📝 Modelo de Datos

### Task
- `id` (Integer, Primary Key)
- `title` (CharField, max_length=200)
- `description` (TextField, opcional)
- `done` (BooleanField, default=False)

## 🎯 Uso

1. **Ver tareas**: Navega a la página principal para ver todas las tareas
2. **Crear tarea**: Haz clic en "Create Task" y completa el formulario
3. **Editar tarea**: Haz clic en una tarea existente para editarla
4. **Eliminar tarea**: En la página de edición, haz clic en "Delete"
5. **Marcar como completada**: Usa el checkbox "Done" en el formulario

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

### Recomendación Especial

Se recomienda encarecidamente, aunque no es obligatorio, que las obras derivadas mantengan este mismo espíritu de código libre y abierto, especialmente cuando se utilicen con fines educativos o de investigación.

## 👤 Autor

**Migbertweb**

- GitHub: [@migbertweb](https://github.com/migbertweb)
- Repositorio: https://github.com/migbertweb/django_crud_react

## 🙏 Agradecimientos

- Django y Django REST Framework por el excelente framework backend
- React y la comunidad por las herramientas frontend
- Todos los mantenedores de las librerías utilizadas

## 📚 Recursos Adicionales

- [Documentación de Django](https://docs.djangoproject.com/)
- [Documentación de Django REST Framework](https://www.django-rest-framework.org/)
- [Documentación de React](https://react.dev/)
- [Documentación de Vite](https://vitejs.dev/)
