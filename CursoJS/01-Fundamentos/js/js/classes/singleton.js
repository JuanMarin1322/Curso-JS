//SINGLETON INSTANCIA unica de mi clase


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
