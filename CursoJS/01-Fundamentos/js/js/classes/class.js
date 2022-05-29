
//Recomendacion usar UpperCamelCase

//iniciarlizar una clase
class Persona {

    //Propiedad estatica
    static _conteo = 0;
    static get conteo(){

        return Persona._conteo + ' instancias';
    }

    static mensaje (){

        console.log( this.nombre); //undefined
        console.log('Hola soy un metodo estatico');

    }

    //PROPIEDADES Y METODOS ESTATICOS
    //Por defecto tiene el 'USE STRICT'
    //Propiedades de clase, estas son publicas

    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';
    //Creacion de nueva instancia de persona
    //El unico meto que retorna una instancia y no undefined

    constructor ( nombre = 'Sin nombre', codigo = 'Sin Código', frase = 'Sin frase') {

        if ( !nombre ) throw Error('Se necesita el nombre');
        this.nombre = nombre;
        this.codigo = `Personaje: ${codigo}`;
        this.frase = frase;


        Persona._conteo ++ ;
    }

    // Sets & Gets

    
    set setComidaFavorita ( comida ){

        this.comida = comida.toUpperCase();

    }

    get getComidaFavorita (){

        return `La comida favorita de ${ this.nombre} es ${ this.comida}`;
    }



    //METODOS

    quienSoy(){

        console.log(`Soy ${ this.nombre} y mi identidad es ${ this.codigo}`);

    }


    miFrase(){

        this.quienSoy();
        console.log(`${ this.codigo }  dice : ${ this.frase}`);

        
    }
}


const spiderman = new Persona(' Peter Parker', 'Spiderman' , 'Soy tu amigable vecino spiderman');
const ironman = new Persona(' Tony Stark', 'Ironman' , 'Filantropo, Famoso, Playboy , Multimillonario');
const hulk = new Persona(' Robert Bruce Banner', 'Hulk' , 'Hulk aplasta');


// Persona._conteo = 2;
console.log(ironman);

spiderman.quienSoy();
spiderman.miFrase();

ironman.quienSoy();
ironman.miFrase();

spiderman.setComidaFavorita = 'El pie de cereza de la tia May';
console.log(spiderman.getComidaFavorita);
// spiderman.comida = 'Duende Verde'

console.log(spiderman);

console.log('Conteo estatico',Persona._conteo);
console.log(Persona.conteo);


Persona.mensaje();


// Definir propiedades static fuera de la clase

Persona.propiedadExterna = 'Hola Mundo';

console.log(Persona.propiedadExterna);
console.log(Persona);