let personaje = {
    nombre: 'Tony Stark',
    codeName : 'Iron Man',
    vivo: false,
    edad: 40,
    cordenadas: {
        lat :34.034,
        lng: -118.70
    },
    trajes : ['Mark I','Mark V', 'Hulkbuster','mikasa'],
    direccion: {

            zip:'10800,90265',
            ubicacion :'Malibu',
            ciduad :'California'

    },
    'ultima-pelicula': 'Infinity War'

    
};
console.log(personaje);
console.log('Nombre',personaje.nombre);
console.log('Nombre',personaje['nombre']);
console.log('Edad',personaje.edad);
console.log('Latitud',personaje.cordenadas.lat);


let numeroTrajes =personaje.trajes.length;

console.log('Numero de trajes',numeroTrajes);
console.log('Ultimo trajes',personaje.trajes[personaje.trajes.length -1]);

const x ='vivo';

console.log('Esta Vivo',personaje[x])
console.log('Ultima peli',personaje['ultima-pelicula'])

delete personaje.edad;

console.log(personaje);

personaje.casado =true;

const entriesPares = Object.entries( personaje);
console.log(entriesPares);

Object.freeze(personaje);
Object.freeze(personaje.direccion);

personaje.dinero=123456788;
personaje.casado =false;
personaje.direccion.ubicacion='Colombia';

console.log(personaje);


const propiedad= Object.getOwnPropertyNames(personaje);
const valores= Object.values(personaje);
console.log(propiedad,valores);




