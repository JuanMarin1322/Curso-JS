class Persona {


    //Creacion por OBJETO
    static porObjecto({ nombre, apellido, pais }){

        return new Persona( nombre, apellido, pais);
    

    }


    constructor ( nombre, apellido, pais){


            this.nombre   = nombre;
            this.apellido = apellido;
            this.pais     = pais;
    }

    getInfo(){

        console.log(`Informacion de la persona, Nombre: ${ this.nombre}, Apellido: ${ this.apellido}, País: ${this.pais}`);
    }



}

const nombre1 = 'Melissa',
      apellido1 = 'Florez',
      pais1 = 'Honduras';

const juank = { 
      nombre:'Juan',
      apellido2 : 'Marin ',
      pais1 : 'Colombia'   }

const persona1 = new Persona( nombre1, apellido1, pais1);
persona1.getInfo();

const persona2 = Persona.porObjecto(juank);


persona2.getInfo();