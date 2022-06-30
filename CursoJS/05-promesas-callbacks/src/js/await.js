import { buscarHeroeAsync, buscarHeroe} from './promesas';

const heroesIds = [ 'capi', 'iron' , 'spider'];

// const heroesPromesas = heroesIds.map( id => buscarHeroe(id) );
const heroesPromesas = heroesIds.map( buscarHeroe);

// export const obtenerHeroesArr = async () => {
//         const heroesArr = [];

//         for( const id of heroesIds){
//             const heroe = await buscarHeroeAsync(id);
//             heroesArr.push(heroe);
//         }

//         return heroesArr;
// };

export const obtenerHeroesArr = async () => {
    
    return await Promise.all( heroesIds.map( buscarHeroe));
       
    // const heroesArr = [];

    // for( const id of heroesIds){
    //     heroesArr.push( buscarHeroe(id));
       
    // }

    // return await Promise.all(heroesArr);
};



export const obtenerHeroeAwait = async( id ) => {

    try {
        const heroe = await buscarHeroeAsync ( id );
     
        return heroe;

    }catch(err){

        console.log('CATCH!!');
        return{

            nombre :'Sin Nombre',
            poder  : 'Sin Poder'
        }

    }
};

export const heroesCiclo = async () =>{

    console.time('HeroesCiclo');


    // heroesPromesas.forEach( async (p)=> console.log ( await p));


    // const heroes = await Promise.all( heroesPromesas)
    // heroes.forEach( heroe => console.log(heroe));


    for await( const heroe of heroesPromesas){

        console.log(heroe);
    }
    
    console.timeEnd('HeroesCiclo');

};

export const heroeIfAwait = async ( id ) => {

   if( (await buscarHeroeAsync(id)).nombre  === 'Ironman'){
    
        console.log('Es el mejor de todos');

    }else {


        console.log('No mejor de todos');
    }
};









