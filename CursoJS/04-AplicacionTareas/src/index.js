import '../src/styles.css';

import { Todo, TodoList} from '../classes/index.js';
import { crearTodoHtml } from './js/componentes.js';


export const todoList = new TodoList();

// todoList.todos.forEach(todo => crearTodoHtml(todo));
todoList.todos.forEach( crearTodoHtml);

console.log('Todos', todoList.todos);


// const tarea  = new Todo('Aprender Javascript');
// const tarea2  = new Todo('Comprar un unicornio');

// todoList.nuevoTodo(tarea);
// // todoList.nuevoTodo(tarea2);
// console.log(todoList);

// crearTodoHtml(tarea);

// localStorage.setItem('mi-key','ABC123');
// sessionStorage.setItem('mi-key','ABC123');

// setTimeout( ()=> {

// localStorage.removeItem('mi-key');

// }, 1500);