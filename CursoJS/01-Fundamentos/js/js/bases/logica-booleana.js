


const regresaTrue = () => {

    console.log('Regresa True');

    return true;
}
const regresaFalse = () => {

    console.log('Regresa False');

    return false;
}

console.warn('Not o la negación');

console.log( true ); // true

console.log( !true ); // false

console.log( !regresaFalse() ); // true

console.warn('And'); //True si todos son verdaderos

console.log(true && true); //True

console.log(true && false); //False


console.log('================');

console.log( regresaFalse() && regresaTrue() ); // false

console.log( regresaTrue() && regresaFalse() );

console.log('================');

regresaTrue() && regresaFalse();

console.log('================');

regresaFalse() && regresaTrue();


console.log('4 condiciones', true && true && true && false )// flase DEBENE SER TODAS TRUE PARA CUINPLIR LA CONDICION

console.log('================');

console.warn('OR'); 

console.log(true || false); 

console.log(false || false); 

console.log('4 condiciones', true || true || true || false ) // true  Cualqueira que sea true cumplicara con la condicion por ende el resultado sera True 

console.log( regresaTrue() || regresaFalse()); 



console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull =  null;
const soyFalse = false;


const a1 = true && 'Hola Mundo' && 150 ; 

const a2 = 'Hola' && 'Mundo' && soyFalse; 

const a3 = soyFalse || 'Ya no soy Falso'; 

const a4 = soyFalse || soyUndefined ||  soyNull || 'Ya no soy Falso' || true; 

const a5 = soyFalse || soyUndefined ||  regresaTrue() || 'Ya no soy Falso' || true;  

console.log({a1,});

console.log({a2,});

console.log({a3,});

console.log('==============');

console.log({a4,});

console.log('==============');

console.log({a5,});




//LOGICA BOOLEANA 

if( true || true || true || false){

    console.log('Hacer algo');
} else {

    console.log('Otra cosa');
}


