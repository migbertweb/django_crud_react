"""
Archivo: wsgi.py

Descripción: Configuración WSGI (Web Server Gateway Interface) para el proyecto Django.
Expone la aplicación WSGI que permite desplegar Django en servidores web que soporten WSGI.

Autor: migbertweb

Fecha: 2024

Repositorio: https://github.com/migbertweb/django_crud_react

Licencia: MIT License

Uso: Punto de entrada WSGI para desplegar la aplicación en servidores de producción
como Gunicorn, uWSGI, etc. El servidor WSGI utiliza esta configuración para servir
la aplicación Django.

Nota: Este proyecto usa Licencia MIT. Se recomienda (no obliga) mantener 
derivados como código libre, especialmente para fines educativos.

---
WSGI config for django_crud_api project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'django_crud_api.settings')

application = get_wsgi_application()
