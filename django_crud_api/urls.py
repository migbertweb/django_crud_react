"""
Archivo: urls.py

Descripción: Configuración principal de URLs del proyecto Django. Define las rutas principales
incluyendo el panel de administración y las rutas de la aplicación de tareas.

Autor: migbertweb

Fecha: 2024

Repositorio: https://github.com/migbertweb/django_crud_react

Licencia: MIT License

Uso: Mapea las URLs principales del proyecto. Incluye:
- /admin/ para acceder al panel de administración de Django
- /task/ para incluir todas las rutas de la aplicación de tareas (definidas en tasks/urls.py)

Nota: Este proyecto usa Licencia MIT. Se recomienda (no obliga) mantener 
derivados como código libre, especialmente para fines educativos.

---
URL configuration for django_crud_api project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
"""
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('task/', include('tasks.urls')),
]
