/* evaluar si los argumentos de entrada son iguales, y de ser ese el caso
   multiplicar cada uno por 5 y sumarlos, loggear el resultado
   evaluar si el primer valor es mayor que el segundo y dividirlos, logear el modulo
   resultado
*/
// const primerArg = Number(process.argv[2]);
// const segundoArg = Number(process.argv[3]);

// if (primerArg === segundoArg) {
//   const primerValorMult = primerArg * 5;
//   const segundoValorMult = segundoArg * 5;
//   const resultado = primerValorMult + segundoValorMult;
//   console.log(resultado);
// } else if (primerArg > segundoArg) {
//   const resultado = primerArg / segundoArg;
//   console.log(resultado);
// } else {
//   console.log(
//     "los argumentos no cumplen las condiciones para ejecutar una operación"
//   );
// }

//function string(value) {
//  if (value === "leo") {
//    return "Leo es pelon";
//  } else if (value === "mono") {
//    return "el mono es enano";
//  } else if (value === "oswaldo") {
//    return "samurai con tetas";
//  } else {
//    return "no registrado";
//  }
//}
//const primerArg = process.argv[2];
//console.log(string(primerArg));
//

// Iterar sobre la lista de pokemones, y agruparlos por type1 de pokemones existentes

// const values = [];
// for (let i = Number(process.argv[2]); i > 0; i--) {
//   values.push(i);
// }
// console.log(values);

// const pokemons = require("./pokemon");
// let pokemonsQty = 0;
// const types = {};
// for (let i = 0; i < pokemons.length; i++) {
//   let type = pokemons[i].type1;
//   console.log(pokemons[i].type1);
//   if (!types[pokemons[i].type1]) {
//     types[type] = 1;
//   } else {
//     types[type]++;
//   }

//   pokemonsQty++;
// }
// console.log(types);

//if (type === "fire") {
//  fire++;
//}
//switch (type) {
//  case "fire":
//    let fire = 0;
//    fire++;
//  case "water":
//    water++;
//  default:
//    resto++;
//    console.log("se encontraron pokemones que no existen");
//}

// 1) Retornar una lista con todos los pokemones cuyo attaque sea mayor 55
// 2) Agrupar en un objeto todos los pokemones por habilidad ej: {Run Away: [Charizard, Chicorita], Blaze: [Blastoise]}

const pokemons = require("./pokemon");

const attackArr = pokemons
  .filter(function (pokemon) {
    return pokemon.attack > 170;
  })
  .map((pokemon, index, arr) => {
    return pokemon.name;
  });
console.log(attackArr);
