

const crearPersona =( nombre, apellido) => ({nombre,apellido});

const persona =crearPersona( 'Juan ', 'Marin');
console.log(persona);

function imprimeArgumentos(){

console.log(arguments);


}
const imprimeArgumentosFlecha=( edad, ... args)=> {
    // console.log( edad , args ); };
    return args;
}

const [edad,esGay,tienePadres,nombre,saludo]= imprimeArgumentosFlecha( 10, true, false, 'Juan Camilo', 'HI');


console.log({edad,esGay,tienePadres,nombre,saludo});

const {apellido: nuevoApellido}=crearPersona( 'Juan ', 'Marin');

console.log(nuevoApellido);


const tony = {
    nombre: 'Tony Stark',
    codeName : 'Iron Man',
    vivo: false,
    // edad: 40,
    cordenadas: {
        lat :34.034,
        lng: -118.70
    },
    trajes : ['Mark I','Mark V', 'Hulkbuster','mikasa'],

};

// const immprimePropiedades= (personaje)=>{


//     console.log('nombre',personaje.nombre);
//     console.log(personaje.codeName);

// }

const immprimePropiedades= ( { nombre, codeName, vivo, edad= 15, trajes})=>{

  

    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
    
    

}


immprimePropiedades(tony);
// console.log({argumentos});

// const edad =argumentos[0];

// console.log(edad);

// console.log(argumentos[0],argumentos[1]);





