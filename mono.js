/* evaluar si los argumentos de entrada son iguales, y de ser ese el caso
   multiplicar cada uno por 5 y sumarlos, loggear el resultado
   evaluar si el primer valor es mayor que el segundo y dividirlos, logear el modulo
   resultado
*/

/*const primerArg = Number(process.argv[2]);
const segundoArg = Number(process.argv[3]);

if (primerArg === segundoArg) {
  console.log(primerArg * 5 + segundoArg * 5);
} else if (primerArg > segundoArg) {
  console.log(primerArg / segundoArg);
} else {
  console.log("mamalo");
}
*/

// Get the number n (n>0) to return the reversed sequence from n to 1.
// Example : n=5 >> [5,4,3,2,1]

/*const primerArg = Number(process.argv[2]);
const segundoArg = Number(process.argv[3]);

if (primerArg === segundoArg) {
  console.log(primerArg * 5 + segundoArg * 5);
} else if (primerArg > segundoArg) {
  console.log(primerArg / segundoArg);
} else {
  console.log("mamalo");
}
process.argv[2];
*/

/*const primerArg = Number(process.argv[2]);
let lista = [];
for (let n = primerArg; n > 0; n--) {
  lista.push(n);
}
console.log(lista);*/

// lo mismo pero con un While
/*function reverseSeq(n) {
  let i = Number(n);
  const arr = [];
  while (i > 0) {
    arr.push(i);
    i--;
  }
  return arr;
}

console.log(reverseSeq(process.argv[2]));
*/
// if (primerArg => segundoArg){
//   console.log(primerArg -1){

//     const pokemons = require("./pokemon");
//     let pokemonsQty = 0;
//     for (let i = 0; i < pokemons.length; i++) {
//       console.log(pokemons[i].name);
//       pokemonsQty++;
//     }
//     console.log(pokemonsQty);

/*const pokemons = require("./pokemon");
let types = {};
for (let i = 0; i < pokemons.length; i++) {
  const type = pokemons[i].type1;
  if (!types[type]) {
    types[type] = 1;
  } else {
    types[type]++;
  }
}
console.log(types);
*/

/*if (primerArg === segundoArg) {
  const primerValorMult = primerArg * 5;
  const segundoValorMult = segundoArg * 5;
  const resultado = primerValorMult + segundoValorMult;
  console.log(resultado);
} else if (primerArg > segundoArg) {
  const resultado = primerArg / segundoArg;
  console.log(resultado);
} else {
  console.log(
    "los argumentos no cumplen las condiciones para ejecutar una operación"
  );
}
  */

//if (primerArg === segundoArg) {
//   console.log("Ambos argumentos son iguales");
// } else if (primerArg > segundoArg) {
//   console.log("el primer argumento es mayor que el segundo");
// } else if (primerArg < segundoArg) {
//   console.log("el segundo argumento es mayor que el primero");
// } else {
//   console.log("los argumentos no son comparables");
// }
// if (condicion) {
//   ejection;
// } else if (condicion) {
//   ejection;
// } else {
//   condicion;
// }

// const primerArg = process.argv[2];

// function string(value) {
//   switch (value) {
//     case "leo":
//       return "Leo es pelon";
//     case "mono":
//       return "El mono es enano";
//     default:
//       return "No registrado";
//   }
// }
// console.log(string(primerArg));

/*function string(value) {
  if (value === "leo") {
    return "Leo es pelon";
  } else if (value === "mono") {
    return "Mono es bello";
  } else if (value === "oswaldo") {
    return "pelo e niña";
  } else {
    return "No registrado";
  }
}
const primerArg = process.argv[2];
console.log(string(primerArg));
*/

/*const pokemons = require("./pokemon");
let types = {};
for (let i = 0; i < pokemons.length; i++) {
  const type = pokemons[i].type1;
  if (!types[type]) {
    types[type] = 1;
  } else {
    types[type]++;
  }
}
console.log(types);
*/
//console.log(pokemonsQty);

/*const pokemons = require("./pokemon");
let pokemonsQty = 0;
for (let i = 0; i < pokemons.length; i++) {
  console.log(pokemons[i].name);
  pokemonsQty++;
}
console.log(pokemonsQty);*/

// Iterar sobre la lista de pokemones, y agruparlos por type1 de pokemones existentes

// 1) Retornar una lista con todos los pokemones cuyo attaque sea mayor 55

// 2) Agrupar en un objeto todos los pokemones por habilidad ej: {Run Away: [Charizard, Chicorita], Blaze: [Blastoise]}

// Recursividad
// map
// foreach
// filter
// find
// reduce
//value, index, array

const pokemons = require("./pokemon");

const pokemonsAttack = pokemons
  .filter((value, index, array) => value.attack > 170)
  .map((pokemon) => pokemon.name);

console.log(pokemonsAttack);
