//? Booleans e comparações
console.log(true, false, 'true', 'false');

//? Métodos comuns de null e Booleans
const email = 'brucewayne@gmail.com';
const includes = email.includes('wayne');
const names = ['dio', 'roger', 'robert'];
const arrayIncludes = names.includes('rob');

//? Operadores de comparação
const age = 31

console.log('***** comparações com numbers *****');
console.log(age == 31)
console.log(age == 35)
console.log(age != 35)
console.log(age != 31)
console.log(age > 31)
console.log(age < 31)
console.log(age < 32)
console.log(age <= 31)
console.log(age >= 31)

const name = 'roger'
console.log('***** Comparações com String *****');
console.log(name == 'roger');
console.log(name == 'Roger');
console.log(name > 'belinha'); 
console.log(name > 'Roger'); // a letra minuscula é mais do que a maiuscula


//? Operadores de comparação 'igual a' e 'diferente de'
console.log("'igual a' e 'diferente de'");
console.log(age === 31)
console.log(age === '31')
console.log(age !== 31)
console.log(age !== '31')

