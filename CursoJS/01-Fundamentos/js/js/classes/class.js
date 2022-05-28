
//Recomendacion usar UpperCamelCase

//iniciarlizar una clase
class Persona {
    
    //Por defecto tiene el 'USE STRICT'
    //Propiedades de clase
    nombre = '';
    codigo = '';
    frase  = '';
    //Creacion de nueva instancia de persona
    //El unico meto que retorna una isntancia y no undefined
    constructor ( nombre = 'Sin nombre', codigo = 'Sin Código', frase = 'Sin frase') {

        if ( !nombre ) throw Error('Se necesita el nombre');
        this.nombre = nombre;
        this.codigo = `Personaje: ${codigo}`;
        this.frase = frase;

    }

    //METODOS

    quienSoy(){

        console.log(`Soy ${ this.nombre} y mi identidad es ${ this.codigo}`);

    }


    miFrase(){

        console.log(`${ this.codigo }  dice : ${ this.frase}`)
    }
}


const spiderman = new Persona(' Peter Parker', 'Spiderman' , 'Soy tu amigable vecino spiderman');
const ironman = new Persona(' Tony Stark', 'Ironman' , 'Filantropo, Famoso, Playboy , Multimillonario');
console.log(spiderman);
console.log(ironman);

spiderman.quienSoy();
spiderman.miFrase();

ironman.quienSoy();
ironman.miFrase();

