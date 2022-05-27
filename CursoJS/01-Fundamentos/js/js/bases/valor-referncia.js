
let a = 10;
let b = a;

a = 30;

console.log({a,b});

let juan = { nombre: 'Juan'};
let ana = { ... juan };

ana.nombre = 'Ana';

console.log({ juan , ana })

const cambiaNombre = ({ ... persona}) => {


    persona.nombre = 'Milo';
    return persona;
}
 
let peter = { nombre: 'Peter' };
let milo = cambiaNombre ( peter );

console.log({ peter, milo})



const frutas = ['Pera','Mora','Melon'];

console.time( 'spread');
const otrasFrutas2 = [...frutas]
console.timeEnd('spread')


console.time( 'slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice')




otrasFrutas.push( 'Mango');

console.table({frutas,otrasFrutas});



