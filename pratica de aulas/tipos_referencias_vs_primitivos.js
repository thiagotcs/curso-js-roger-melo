//? Tipos de refêrencia vs Tipos primitivos - Aula 03-04
//? Tipos primitivos

let scoreOne = 50
let scoreTwo = scoreOne
console.log(`ScoreOne: ${scoreOne} ScoreTwo: ${scoreTwo}`)

scoreOne = 100
console.log(`ScoreOne: ${scoreOne} ScoreTwo: ${scoreTwo}`)

//? Tipos referências
let userOne = {name: 'Thiago', age: 37}
let userTwo = userOne
console.log(userOne, userTwo)

userOne.age = 38
console.log(userOne, userTwo)



/* 
 * tipos primitivos
 *  - Numbers
 *  - Strings
 *  - Booleans
 *  - Null
 *  - Undefined
 *  - Symbol
 *  - BigInt
/* 
 * tipos de referências
 *  - Todos os tipos de objetos
 *  - Objetos literais
 *  - Arrays
 *  - Funções
 *  - Datas
 *  - Todos os outros objetos
 */