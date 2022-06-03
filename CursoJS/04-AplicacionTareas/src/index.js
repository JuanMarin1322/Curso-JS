import '../src/styles.css';

import { Todo, TodoList} from '../classes/index.js';
import { crearTodoHtml } from './js/componentes.js';


export const todoList = new TodoList();

const tarea  = new Todo('Aprender Javascript');
const tarea2  = new Todo('Comprar un unicornio');

todoList.nuevoTodo(tarea);
todoList.nuevoTodo(tarea2);
console.log(todoList);

crearTodoHtml(tarea);