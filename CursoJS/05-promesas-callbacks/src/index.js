// import { promesaLenta, promesaMedia, promesaRapida } from './js/promesas'
// import { buscarHeroeAsync,buscarHeroe } from './js/promesas';
import { obtenerHeroesArr, obtenerHeroeAwait } from './js/await';
import { heroesCiclo, heroeIfAwait } from './js/await'

import './styles.css';

console.time('await');


// promesaLenta.then( console.log );
// promesaMedia.then( console.log );
// promesaRapida.then( console.log );


// Promise.race( [promesaLenta, promesaMedia, promesaRapida ])
// .then( console.log);


// buscarHeroe('capi')
// .then( heroe => console.log( heroe) )
// .catch( console.warn );

// buscarHeroeAsync('iron2')
// .then( heroe => console.log( heroe) )
// .catch( console.warn );

// obtenerHeroeAwait('capi2').then( heroe => {
//     console.log( heroe);

//     console.timeEnd('await');

// }).catch(console.warn);

heroesCiclo();

heroeIfAwait('iron');

 