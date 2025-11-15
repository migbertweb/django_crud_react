/**
 * Archivo: App.jsx
 * 
 * Descripción: Componente principal de la aplicación React. Configura el enrutamiento
 * usando React Router y define todas las rutas de la aplicación. También incluye el
 * componente de navegación y el sistema de notificaciones toast.
 * 
 * Autor: migbertweb
 * 
 * Fecha: 2024
 * 
 * Repositorio: https://github.com/migbertweb/django_crud_react
 * 
 * Licencia: MIT License
 * 
 * Uso: Componente raíz que configura la estructura de navegación de la aplicación.
 * Define las rutas principales:
 * - /tasks - Página que lista todas las tareas
 * - /tasks-create - Página para crear una nueva tarea
 * - /tasks/:id - Página para editar una tarea existente
 * También incluye el componente Navigation y el sistema de notificaciones Toaster.
 * 
 * Nota: Este proyecto usa Licencia MIT. Se recomienda (no obliga) mantener 
 * derivados como código libre, especialmente para fines educativos.
 */
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { TasksPage } from "./pages/TasksPage";
import { TaskFormPage } from "./pages/TaskFormPage";
import { Navigation } from "./components/Navigation";
import { Toaster } from "react-hot-toast";
// hola
function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/tasks" />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/tasks-create" element={<TaskFormPage />} />
          <Route path="/tasks/:id" element={<TaskFormPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
