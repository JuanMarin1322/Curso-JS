let juegos=['Zelda','Mario','Metroid','LoL'];
console.log('Largo',juegos.length);

let primero =  juegos[0];
let ultimo = juegos[3];
let ultimoDinamico = juegos[juegos.length -1];


console.log({primero,ultimoDinamico});

juegos.forEach( (elemento, indice, arr) =>  {


    console.log({ elemento, indice, arr });
} );

let nuevaLongitud = juegos.push( 'F-zero');
console.log({nuevaLongitud,juegos});



nuevaLongitud  =juegos.unshift('Fire Emblem' )
console.log({nuevaLongitud,juegos});

let juegoBorrado  =juegos.pop();
console.log({juegoBorrado,juegos});



let pos=1;
console.log(juegos);
let borradoPos=juegos.splice(pos,2);
console.log({borradoPos,juegos});




let metroIndex= juegos.indexOf('Metroid');

console.log({metroIndex});












