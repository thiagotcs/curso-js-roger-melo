//? Conversão de tipos

let score = '100';

// score = Number(score)

// console.log(score + 1);
// console.log(typeof score);

const crazyConversion = Number('Maçã')
const convertedNumber = String(97)
const booleanConversion = Boolean(10)

console.log(crazyConversion) // NaN
console.log(convertedNumber, typeof convertedNumber) // 97
console.log(booleanConversion, typeof booleanConversion) // 97

/**
 * valores falsy:
 * - false
 * - 0
 * - '', "", ``
 * - null e undefined
 * - NaN
 * 
 * valores truthy:
 * - Qualquer valor que não é falsy
 */