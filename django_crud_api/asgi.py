"""
Archivo: asgi.py

Descripción: Configuración ASGI (Asynchronous Server Gateway Interface) para el proyecto Django.
Expone la aplicación ASGI que permite desplegar Django en servidores web asíncronos.

Autor: migbertweb

Fecha: 2024

Repositorio: https://github.com/migbertweb/django_crud_react

Licencia: MIT License

Uso: Punto de entrada ASGI para desplegar la aplicación en servidores asíncronos como
Daphne, Uvicorn, etc. ASGI permite manejar conexiones asíncronas y WebSockets si son necesarios.

Nota: Este proyecto usa Licencia MIT. Se recomienda (no obliga) mantener 
derivados como código libre, especialmente para fines educativos.

---
ASGI config for django_crud_api project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'django_crud_api.settings')

application = get_asgi_application()
