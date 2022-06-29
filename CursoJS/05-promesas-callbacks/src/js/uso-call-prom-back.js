import { buscarHeroe as buscarHeroeCallback } from './js/callbacks'; 
import { buscarHeroe } from './js/promesas'; 
import './styles.css';


console.log('Hola Mundo');


const heroeId1 = 'capi';
const heroeId2 = 'spider';


// buscarHeroe( heroeId1).then( heroe => {

//     console.log(`Enviado a ${ heroe.nombre } a la misión.`);
// });


// PROMISE HELL
// buscarHeroe( heroeId1).then( heroe => {

    
//     buscarHeroe( heroeId2).then( heroe2 => {

//         console.log(`Enviando a ${heroe.nombre} y ${heroe2.nombre} a la misión `);
// })

// });

// Promise.all([true,'Hola', 123]).then( arr => {

//     console.log('promise.all',arr);
// });


// Promise.all([ buscarHeroe(heroeId1), buscarHeroe(heroeId2) ])
//     .then(([heroe1,heroe2]) => {

//     // console.log('promise.all', heroes);

//     console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión `);
// });

Promise.all([ buscarHeroe(heroeId1), buscarHeroe(heroeId2) ])
    .then(([heroe1,heroe2]) => {

    // console.log('promise.all', heroes);

    console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión `);

}).catch( err => {

    alert(err);

}).finally( () => {

    console.log('Se termino el promise.all');


});

console.log('Fin del programa');

// buscarHeroe( heroeId1, ( error, heroe ) => {

//     // console.log('Callback llamado!');
//     if ( error){return console.error( error );} 
    
  
//         console.log(`Enviando a ${heroe.nombre} y ${heroe2.nombre} a la misión `);
    
//     });

// });
