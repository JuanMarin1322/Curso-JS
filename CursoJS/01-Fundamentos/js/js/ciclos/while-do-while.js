

const carros =  [
        'Ford',
        'Kia',
        'Chevrolet',
        'Mazda'

]
let i = 0;
while ( i  < carros.length ) {

    console.log( carros[i] );

    i ++;
}

//Condiciones falsas 

//undefined
//null
//false


while ( carros[i]) {
    
        if( i === 1){

            i ++;
            continue;
        }
    console.log( carros[i] );

    i ++;
}

console.warn('Do While');

let j = 10;
do {
    console.log( carros[j]);
    j ++;


} while( carros[j]);



