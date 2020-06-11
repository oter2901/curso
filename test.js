// if (condicion) {
//   ejection;
// }
// if (condicion) {
//   ejection;
// } else {
//   ejecucion;
// }
// if (process.argv[2] !== "1") {
//   console.log("Argumento es igual 1");
// } else {
//   console.log("haz otra cosa");
// }
// const primerArg = Number(process.argv[2]);
// const segundoArg = Number(process.argv[3]);
// const isEqual = primerArg === segundoArg;

// if (isEqual) {
//   console.log("ambos valores son iguales");
// }

/* evaluar si los argumentos de entrada son iguales, y de ser ese el caso
   multiplicar cada uno por 5 y sumarlos, loggear el resultado
   evaluar si el primer valor es mayor que el segundo y dividirlos, logear el modulo
   resultado
*/

// if (primerArg === segundoArg) {
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

// switch (condiciones) {
//   case "foo":
//     ejecucion;
//   case "bar":
//     ejecucion;
//   default:
//     ejection;
// }
//const arreglo = ["mono", "leo"];
//console.log(arreglo[1]);

const primerArg = process.argv[2];

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

// const casos = {
//   leo: "leo es marico",
//   mono: "el mono es enano",
//   oswaldo: "es el mejor",
// };

// console.log(casos[process.argv[2]] || "No registrado");

// const pokemons = require("./pokemon");
// const types = {};
// for (let i = 0; i < pokemons.length; i++) {
//   const type = pokemons[i].type1;
//   if (!types[type]) {
//     types[type] = 1;
//   } else {
//     types[type]++;
//   }
// }

// const reversePokemonNames = (pokemonList) => {
//   return pokemonList.reduce((reversedList, pokemon) => {
//     const pokemonNameArray = pokemon.name.toLowerCase().split("");
//     const reversedName = pokemonNameArray.reverse().join("");
//     const capitalizedName =
//       reversedName.charAt(0).toUpperCase() + reversedName.slice(1);
//     reversedList.push(capitalizedName);
//     return reversedList;
//   }, []);
// };

// // console.log(reversePokemonNames(pokemons));
// const n = Number(process.argv[2]);

// const arr = [];
// for (let i = n; i > 0; i--) {
//   arr.push(i);
// }

// console.log(arr);

// Get the number n (n>0) to return the reversed sequence from n to 1.

// Example : n=5 >> [5,4,3,2,1]

// console.log(reversePokemonNames(pokemons));
// console.log(types);

// console.log(pokemonsQty);

// Iterar sobre la lista de pokemones, y agruparlos por type1 de pokemones existentes

// for (variable in objeto) {
//   ...
// }

// function reverseSeq(n, str) {
//   console.log(str);
//   let i = n;
//   const arr = [];
//   while (i > 0) {
//     arr.push(i);
//     i--;
//   }
//   return arr;
// }
// const value = reverseSeq(process.argv[2], "hello world");
// console.log(value);

// while (condicion) {
//   ejecucion;
//   break;
// }

// const japanese_map = {
//   a: "ka",
//   b: "tu",
//   c: "mi",
//   d: "te",
//   e: "ku",
//   f: "lu",
//   g: "ji",
//   h: "ri",
//   i: "ki",
//   j: "zu",
//   k: "me",
//   l: "ta",
//   m: "rin",
//   n: "to",
//   o: "mo",
//   p: "no",
//   q: "ke",
//   r: "shi",
//   s: "ari",
//   t: "chi",
//   u: "do",
//   v: "ru",
//   w: "na",
//   x: "mei",
//   y: "fu",
//   z: "ra",
// };

// function translate_name(name) {
//   if (typeof name !== "string" || !name) {
//     throw new Error("Name must be a string");
//   }

//   const name_arr = name.split("");
//   const japanese_name = name_arr.reduce((accum, val) => {
//     if (val === "_") {
//       return accum.concat(" ");
//     }
//     const japanese = japanese_map[val];
//     if (!japanese) {
//       throw new Error("caracter no encontrado");
//     }
//     return accum.concat(japanese);
//   }, "");
//   console.log(japanese_name);
// }

// translate_name(process.argv[2]);

// Recursividad
// map
// foreach
// filter
// find
// reduce

const pokemons = require("./pokemon");
// consolue.log("Hello world!".toUpperCase());

// console.log(pokemons.length);

// const pokemonsNames = pokemons.map((_, index) => index);

// let arr = [];
// pokemons.forEach((pokemon) => {
//   arr.push(pokemon.hp);
// });
// console.log(arr);

// const arr = [
//   1,
//   2,
//   3,
//   4,
//   5,
//   6,
//   7,
//   8,
//   9,
//   10,
//   11,
//   12,
//   13,
//   14,
//   15,
//   16,
//   17,
//   18,
//   19,
//   20,
// ];
// function fn(acumm, value, index) {
//   console.log(index, acumm, value);
//   return acumm + value;
// }
// const sumatoria = arr.reduce(fn, 100);

// console.log(sumatoria);

const reversePokemonNames = (pokemonList) => {
  return pokemonList.reduce((reversedList, pokemon) => {
    const pokemonNameArray = pokemon.name.toLowerCase().split("");
    const reversedName = pokemonNameArray.reverse().join("");
    const capitalizedName =
      reversedName.charAt(0).toUpperCase() + reversedName.slice(1);
    reversedList.push(capitalizedName);
    return reversedList;
  }, []);
};
// console.log(reversePokemonNames(pokemons));

// 1) Retornar una lista con todos los pokemones cuyo attaque sea mayor 55
// 2) Agrupar en un objeto todos los pokemones por habilidad ej: {Run Away: [Charizard, Chicorita], Blaze: [Blastoise]}

const foo = {
  "Solar Power": ["Charizard"],
  Blaze: ["Charizard", "Cyndaquil"],
};

const reversed2 = (pokemonList) => {
  return pokemonList.map((pokemon) => {
    const pokemonNameArray = pokemon.name.toLowerCase().split("");
    const reversedName = pokemonNameArray.reverse().join("");
    const capitalizedName =
      reversedName.charAt(0).toUpperCase() + reversedName.slice(1);
    return capitalizedName;
  });
};
console.log(reversed2(pokemons));

const mapedPokemonsType = (pokemonList) => {
  const reduceResult = pokemonList.reduce((types, pokemon) => {
    if (!types[pokemon.type1]) {
      types[pokemon.type1] = 1;
    }
    types[pokemon.type1]++;
    return types;
  }, {});

  return reduceResult;
};

console.log(mapedPokemonsType(pokemons));

// function bar(list) {
//   return list.reduce((accum, item) => {
//     item.abilities.forEach((ability) => {
//       if (!Array.isArray(accum[ability])) {
//         accum[ability] = [item.name];
//       }
//       accum[ability].push(item.name);
//     });
//     return accum;
//   }, {});
// }

console.log(bar(pokemons));
// function newMap(arr, func) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(func(arr[i], i, arr));
//   }
//   return result;
// }

// const pokemosNewMap = newMap(pokemons, (value, index, array) => value.name);
// console.log(pokemonsNames);

// let arr = [];

// for (let i = 0; i < pokemons.length; i++) {
//   arr.push(pokemons[i].name);
// }
// console.log(pokemonsNames);
// console.log(arr);
