let a = 5;

if ( a >= 10) {

    console.log( 'A es mayor o igual  10');

} else {

console.log('A es menor a 10');
}

// console.log('Fin del programa');

const hoy = new Date();
let dia =hoy.getDay(); // 0 : Domingo, 1:Lunes , 2 : Martes ...

let dia2 = dia+3;

console.log({dia});
console.log({dia2});

//Dia 1
if (dia === 1 ){

   console.log('Hoy es Lunes') 
   
} else if(dia === 2)
            {
                console.log('Hoy es Martes') ;
            
} else {

    console.log('Hoy es Domingo');
}


// Dia 2 


// ==== EL TIPADO  es igual  tipo de archivo identico

if (dia2 === 1 ){

    console.log('Hoy es Lunes') 
    
 } else if(dia2 === 2)
             {
                 console.log('Hoy es Martes') ;
             
 } else {
 
     console.log('Hoy es Miercoles');
 }
 
 //Sin usar IF else, o Swithc 
 dia = 6; //0 Domingo ,1: Lunes ....

const diasLetras = {

       0: () => 'Domingo - 0' ,
       1: () => 'Lunes - 1' ,
       2: () => 'Martes - 2' ,
       3: () => 'Miercoles - 3' ,
       4: () => 'Jueves - 4' ,
       5: () => 'Viernes - 5' ,
       6: () => 'Sabado - 6 ' 

};

const diasLetras2 = [

    'Domingo - 0' ,
    'Lunes - 1' ,
    'Martes - 2' ,
    'Miercoles - 3' ,
    'Jueves - 4' ,
    'Viernes - 5' ,
    'Sabado - 6 ' 

];




console.log(diasLetras[dia]()|| 'Dia no definido');

console.log(diasLetras2[dia]|| 'Dia no definido');


//Dia de la semana 

