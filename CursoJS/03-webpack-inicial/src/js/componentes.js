import '../css/componentes.css'


//Palabra clave export para loq eu se necesita exportar 
export const saludar = ( nombre)=>{
    console.log('Creando eriqueta h1')

    const h1 = document.createElement('h1');
    h1.innerText=` !! Hola, ${nombre} !!!`;

    document.body.append( h1 );
}