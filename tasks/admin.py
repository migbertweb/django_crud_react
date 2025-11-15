"""
Archivo: admin.py

Descripción: Configuración del panel de administración de Django para el modelo Task.
Registra el modelo Task para que sea accesible y gestionable desde el panel de administración.

Autor: migbertweb

Fecha: 2024

Repositorio: https://github.com/migbertweb/django_crud_react

Licencia: MIT License

Uso: Permite gestionar las tareas desde el panel de administración de Django en /admin/.
Facilita la creación, edición y eliminación de tareas directamente desde la interfaz
de administración sin necesidad de usar la API o el frontend React.

Nota: Este proyecto usa Licencia MIT. Se recomienda (no obliga) mantener 
derivados como código libre, especialmente para fines educativos.
"""
from django.contrib import admin
from .models import Task

admin.site.register(Task)
