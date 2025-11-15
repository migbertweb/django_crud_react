"""
Archivo: urls.py

Descripción: Define las rutas (URLs) de la API para la aplicación de tareas.
Configura el router de Django REST Framework para registrar los endpoints automáticos
y la documentación de la API.

Autor: migbertweb

Fecha: 2024

Repositorio: https://github.com/migbertweb/django_crud_react

Licencia: MIT License

Uso: Mapea las URLs de la API REST de tareas. Registra la vista TaskView en el router
para generar automáticamente los endpoints CRUD. También incluye la documentación
interactiva de la API en /docs/.

Nota: Este proyecto usa Licencia MIT. Se recomienda (no obliga) mantener 
derivados como código libre, especialmente para fines educativos.
"""
from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from tasks import views
# api versions
router = routers.DefaultRouter()
router.register(r'tasks', views.TaskView, 'Tasks')
urlpatterns = [
    path("api/v1/", include(router.urls)),
    path("docs/", include_docs_urls(title="Tasks API")),
]
