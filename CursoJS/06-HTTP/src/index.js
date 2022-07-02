// const jokeUrl = 'https://api.chucknorris.io/jokes/random';


// // fetch (jokeUrl).then( res => {

// //     res.json().then( ({ id, value}) => {
// //         console.log(id);
// //         console.log(value);
// //     });
// // });



// fetch (jokeUrl)
// .then( res => res.json())
// .then(({ id, value}) => {
//     console.log(id, value);
// });


// import { obtenerChiste } from "./js/http-provider";

// obtenerChiste().then(console.log);


// import { init } from "./js/chistes-page";

// init();

// import { obtenerUsuarios } from "./js/http-provider";

// obtenerUsuarios().then(console.log);

// import { init } from "./js/usuarios-page";
// init();


// import * as CRUD from "./js/crud-provider";

// CRUD.getUsuario(3).then(console.log);

// CRUD.crearUsuario({
//     name: 'Juan Camilo',
//     job: 'Engineer'
// }).then(console.log);


// CRUD.actualizarUsuario( 1, {
//     name: 'Mario',
//     job: 'Lawyer'
// }).then(console.log);

// CRUD.eliminarUsuario(2).then(console.log);

import { init } from "./js/archivos-page";

init();


