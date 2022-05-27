function saludar(nombre){
    //console.log(arguments);

    //console.log('HOLA MUNDO ' + nombre);

    return [1,2];

    //Esto nunca se va ejecutar
    console.log('Soy un codigo que esta despues del return');
}

//FUNCION ANONIMA
const saludar2=function (nombre ){
 console.log('HOLA MUNDO 2 '+  nombre);
}
//  LANDA FUNCITON
const saludarFlecha= ()=>
{
console.log('HOLA FELCHITA');
}

//eficientes
const saludarFlecha2= (nombre)=>
{
console.log('HOLA FELCHITA '+ nombre);
}



const retornoSaludar= saludar('Juan Marin',20,false,'Colombia');
console.log(retornoSaludar[0],retornoSaludar[1]);
//saludar('El pana rabbit');
//saludar2('Lau');



//saludarFlecha2('Albertico');
//saludarFlecha();


function sumar (a,b){


    return a +b 

};

//FUNCION DE saludarFlecha

const sumar2 =(a,b)=> a +b ;






function getAleatorio(){
    return Math.random();

}

//getAleatorio2

const getAleatorio2 = () => Math.random();



console.log ( sumar(1,2));

console.log ( sumar2(4,2));
console.log ( getAleatorio());
console.log ( getAleatorio2());







