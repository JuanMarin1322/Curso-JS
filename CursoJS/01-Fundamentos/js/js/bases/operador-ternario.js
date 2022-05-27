const hoy = new Date();
let dia =hoy.getDay(); 

let horaApertura,horaApertura2;
let mensaje,mensaje2;

const horaActual =hoy.getHours();



if (dia === 0 || dia === 6){

    if( horaActual  < 9){
        console.warn('==========');
        console.log('Abrimos a las 9 lo sentimos');
        console.warn('==========');
    } else {

                console.log ('Abrimos a las 9');
            }

}else if( horaActual  < 11){

        console.log('Abrimos a las 11 lo sentimos');
    }

    else{
    console.log('Tenemos servicios disponible SIUUU');
    }

    console.warn('==========================================');


if (dia === 0 || dia === 6){
    console.log('Fin de semana');
    horaApertura = 9;
 } else{

    console.log('Día de semana');
    horaApertura = 11;
 }


 if (horaActual >= horaApertura){

            mensaje = 'Esta abierto';

 } else{

  
    mensaje = `Esta cerrado, hoy abrimos  a las  ${ horaApertura }`;

 }

console.log({ horaApertura, mensaje });

//Manera mas corta
console.error('==========================================');

// if ([0,6].includes(dia) ){

//     console.log('Fin de semana');
//     horaApertura = 9;
  
// }else{

//     console.log('Día de semana');
//     horaApertura = 11;
//  }
 
horaApertura2= ( [0,6].includes(dia) ) ? 9 : 11;

mensaje2 = (horaActual >= horaApertura2) ? 'Esta Abierto' : `Esta cerrado, hoy abrimos  a las  ${ horaApertura }`;

console.log({horaApertura2, mensaje2});