/**
 * Archivo: tasks.api.js
 * 
 * Descripción: Cliente API para interactuar con el backend Django. Configura una instancia
 * de Axios con la URL base de la API y exporta funciones para realizar operaciones CRUD
 * sobre las tareas (Create, Read, Update, Delete).
 * 
 * Autor: migbertweb
 * 
 * Fecha: 2024
 * 
 * Repositorio: https://github.com/migbertweb/django_crud_react
 * 
 * Licencia: MIT License
 * 
 * Uso: Proporciona funciones para comunicarse con la API REST del backend Django.
 * Incluye funciones para:
 * - getAllTasks() - Obtener todas las tareas
 * - getTask(id) - Obtener una tarea específica por ID
 * - createTask(task) - Crear una nueva tarea
 * - updateTask(id, task) - Actualizar una tarea existente
 * - deleteTask(id) - Eliminar una tarea por ID
 * 
 * Nota: Este proyecto usa Licencia MIT. Se recomienda (no obliga) mantener 
 * derivados como código libre, especialmente para fines educativos.
 */
import axios from "axios";

const tasksApi = axios.create({
  baseURL: "http://localhost:8000/task/api/v1/tasks/",
});

export const getAllTasks = () => tasksApi.get("/");

export const getTask = (id) => tasksApi.get(`/${id}/`);

export const createTask = (task) => tasksApi.post("/", task);

export const deleteTask = (id) => tasksApi.delete(`/${id}`);

export const updateTask = (id, task) => tasksApi.put(`/${id}/`, task);
