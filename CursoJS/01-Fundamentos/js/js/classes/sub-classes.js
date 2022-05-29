class Persona {

    static _conteo = 0;
    static get conteo(){

        return Persona._conteo + ' instancias';
    }

    static mensaje (){

        console.log( this.nombre); //undefined
        console.log('Hola soy un metodo estatico');

    }

    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';
   
    constructor ( nombre = 'Sin nombre', codigo = 'Sin Código', frase = 'Sin frase') {

        if ( !nombre ) throw Error('Se necesita el nombre');
        this.nombre = nombre;
        this.codigo = `Personaje: ${codigo}`;
        this.frase = frase;


        Persona._conteo ++ ;
    }

    set setComidaFavorita ( comida ){

        this.comida = comida.toUpperCase();

    }

    get getComidaFavorita (){

        return `La comida favorita de ${ this.nombre} es ${ this.comida}`;
    }

    quienSoy(){

        console.log(`Soy ${ this.nombre} y mi identidad es ${ this.codigo}`);

    }


    miFrase(){

        this.quienSoy();
        console.log(`${ this.codigo }  dice : ${ this.frase}`);
        
    }
}

class Heroe extends Persona{

    clan = 'Sin clan';

    constructor (nombre, codigo, frase) {
 
        //referncia a al clase que extiende, debe estar antes de los atributos de Heroe
        super(nombre, codigo, frase);
        //Siempre despues del super debe ir el this.atributo
        this.clan = 'Los Avengers';

        
    }

    quienSoy(){

        console.log(`Soy ${ this.nombre}, del clan ${ this.clan}`);
        super.quienSoy();
    }

}
const spiderman = new Heroe(' Peter Parker', 'Spiderman' , 'Soy tu amigable vecino spiderman');


console.log(spiderman);

console.log(spiderman.quienSoy());
