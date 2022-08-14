//? exemplo 1: ordenando strings
//? Metodo sort() ordena a Array mudando o array original
const names = ['Christian', 'Alfredo', 'Edson'];

names.sort();
console.log(names);

//? exemplo 2: ordenando números
const scores = [10, 50, 30, 100, 5, 7, 90];
scores.sort((score1, score2) => score1 - score2);
console.log(scores);

//? exemplo 3: ordenando objetos
const theBigFamily = [
  { name: 'Lineu', score: 20 },
  { name: 'Nenê', score: 10 },
  { name: 'Tuco', score: 50 },
  { name: 'Bebel', score: 30 },
  { name: 'Agostinho', score: 70 },
];

theBigFamily.sort((item1, item2) => {
  if (item1.score > item2.score) {
    return -1;
  } else if (item2.score > item1.score) {
    return 1;
  }
  return 0;
});
console.log(theBigFamily);

theBigFamily.sort((item1, item2) => item2.score - item1.score);

console.log(theBigFamily);

const books = [
  { name: 'Código Limpo', price: 30 },
  { name: 'O milagre da manhã', price: 5 },
  { name: 'Alice no País das Maravilhas', price: 10 },
  { name: 'Quem Pensa Enriquece', price: 50 },
  { name: 'O livro da ciência', price: 40 },
];

const booksOnSale = books
  .filter(({ price }) => price > 20)
  .map(
    ({ name, price }) => `O preço do livro ${name} caiu para ${price} reais`,
  );
console.log(booksOnSale);
