/**
 * Archivo: main.jsx
 * 
 * Descripción: Punto de entrada principal de la aplicación React. Renderiza el
 * componente App en el elemento root del DOM y envuelve la aplicación en
 * React.StrictMode para detectar problemas potenciales durante el desarrollo.
 * 
 * Autor: migbertweb
 * 
 * Fecha: 2024
 * 
 * Repositorio: https://github.com/migbertweb/django_crud_react
 * 
 * Licencia: MIT License
 * 
 * Uso: Archivo principal que inicia la aplicación React. Se ejecuta cuando la
 * página se carga y monta el componente App en el elemento HTML con id "root".
 * También importa los estilos CSS globales de la aplicación. React.StrictMode
 * ayuda a identificar problemas en el código durante el desarrollo.
 * 
 * Nota: Este proyecto usa Licencia MIT. Se recomienda (no obliga) mantener 
 * derivados como código libre, especialmente para fines educativos.
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
