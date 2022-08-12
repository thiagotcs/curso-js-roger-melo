let heroes = ['Batman', 'Catwoman', 'Iron Man'];
const ages = [31, 25, 39, 40, 25];
const randomArray = ['Parker', 'Diana', 19, 18];

//? Métodos comuns de Arrays
const joinHeroes = heroes.join('-');
const indexOf25 = ages.indexOf(25);
const lastIndexOf25 = ages.lastIndexOf(25);
const moreHeroes = heroes.concat(['Superman', 'Wolverine']);
const pushToHeroes = heroes.push('Cyclops', 'Hulk');
const popToHeroes = heroes.pop();

console.log(joinHeroes); // Batman-Catwoman-Iron Man
console.log(indexOf25); // 1
console.log(lastIndexOf25); // 4
console.log(moreHeroes); // (5) ['Batman', 'Catwoman', 'Iron Man', 'Superman', 'Wolverine']
console.log(pushToHeroes);
console.log(popToHeroes);

// null e undefined

let emptiness = null;

console.log(emptiness, emptiness + 3, `o valor é ${emptiness}`);

//? Métodos comuns de Arrays Map

const numbers = [1, 2, 3, 4, 5, 6, 7];
const doubleNumbers = numbers.map(number => number * 2);

const products = [
  { name: 'Mouse sem fio', price: 30 },
  { name: 'Pen drive', price: 25 },
  { name: 'Cartucho de tinta', price: 50 },
  { name: 'Suporte de notebooks', price: 23 },
  { name: 'Repetidor de sinal Wi-Fi', price: 44 },
];

const saleProducts = products.map(product => {
  if (product.price >= 30) {
    return { name: product.name, price: product.price / 2 };
  }
  return product;
});
console.log(saleProducts);

//? Métodos comuns de Arrays FIlter

const randomNumbers = [36, 99, 37, 63, 55, 6, 7];
const numbersGreaterThan37 = randomNumbers.filter(number => number > 37);
console.log('🚀 numbersGreaterThan37 Map', numbersGreaterThan37);

const users = [
  { name: 'Ada Lovelace', premium: true },
  { name: 'Grace Hopper', premium: false },
  { name: 'Alan Turing', premium: true },
  { name: 'Linus Torvalds', premium: false },
  { name: 'Margaret Hamilton', premium: true },
];

const premiumUsers = users.filter(user => user.premium);
console.log('🚀 premiumUsers filter', premiumUsers);

//? Métodos comuns de Arrays reduce tem o pode transformar o output não necessariamente em um array
const numbersReduce = [1, 2, 3];

const sumResult = numbersReduce.reduce(
  (accumulator, item) => accumulator + item,
  0,
);

console.log('🚀 sumResult Reduce', sumResult);

const phaseScores = [
  { name: 'Vinicius Costa', score: 337 },
  { name: 'Roger Melo', score: 43 },
  { name: 'Alfredo Braga', score: 234 },
  { name: 'Pedro H. Silva', score: 261 },
  { name: 'Ana Paula Rocha', score: 491 },
  { name: 'Vinicius Costa', score: 167 },
  { name: 'Roger Melo', score: 137 },
  { name: 'Alfredo Braga', score: 135 },
  { name: 'Ana Paula Rocha', score: 359 },
  { name: 'Pedro H. Silva', score: 133 },
];

const rogerScore = phaseScores.reduce((accumulator, phaseScores) => {
  if (phaseScores.name === 'Roger Melo') {
    accumulator += phaseScores.score;
  }
  return accumulator;
}, 0);
console.log('🚀 rogerScore Reduce', rogerScore);
