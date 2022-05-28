const juank = 
{
    nombre: 'Juan Camilo',
    edad : 20,
    imprimir(){

            console.log(`Nombre : ${ this.nombre} - edad : ${this.edad}`)
    }
}

//juank.imprimir();


//INSTANCIAS
//Compativilidad con navegadores web viejos
function Persona ( nombre, edad) {

    console.log('Se ejecuto esta LINEA');

    this.nombre = nombre;
    this.edad   = edad;

    this.imprimir = function() {

        console.log(`Nombre : ${ this.nombre} - edad : ${this.edad}`)
}
}

//Nueva instancia
const maria = new Persona( 'Maria' , 22);
const laura = new Persona( 'Laura' , 21);

console.log(maria);
maria.imprimir();

console.log(laura);
laura.imprimir();



