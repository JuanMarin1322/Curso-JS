const { resolvePlugin } = require("@babel/core");
const { response } = require("express");

const jokeuRL = 'https://api.chucknorris.io/jokes/random';


// fetch(jokeuRL).then( res => {
    
//     res.json().then( ({id, value}) => {
//         console.log(id);
//         console.log(value);
//     });
// });

fetch(jokeuRL).then(res => res.json() )
.then( console.log)
