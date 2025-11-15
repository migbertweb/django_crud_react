/**
 * Archivo: TasksList.jsx
 * 
 * Descripción: Componente que obtiene y muestra la lista de todas las tareas.
 * Utiliza el hook useEffect para cargar las tareas desde la API cuando el componente
 * se monta y renderiza cada tarea usando el componente TaskCard.
 * 
 * Autor: migbertweb
 * 
 * Fecha: 2024
 * 
 * Repositorio: https://github.com/migbertweb/django_crud_react
 * 
 * Licencia: MIT License
 * 
 * Uso: Componente que se utiliza en TasksPage para mostrar todas las tareas disponibles.
 * Hace una petición GET a la API al montarse el componente y actualiza el estado local
 * con las tareas recibidas. Renderiza cada tarea usando el componente TaskCard en un
 * grid responsivo.
 * 
 * Nota: Este proyecto usa Licencia MIT. Se recomienda (no obliga) mantener 
 * derivados como código libre, especialmente para fines educativos.
 */
import { useEffect, useState } from "react";
import { getAllTasks } from "../api/tasks.api";
import { TaskCard } from "./TaskCard";

export function TasksList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function LoadTasks() {
      const res = await getAllTasks();
      setTasks(res.data);
    }
    LoadTasks();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
      {tasks.map((task) => <TaskCard key={task.id} task={task} />)}
    </div>
  );
}
