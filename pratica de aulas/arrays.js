let heroes = ["Batman", "Catwoman", "Iron Man"];
const ages = [31, 25, 39, 40, 25];
const randomArray = ["Parker", "Diana", 19, 18];

//? Métodos comuns de Arrays
const joinHeroes = heroes.join("-");
const indexOf25 = ages.indexOf(25);
const lastIndexOf25 = ages.lastIndexOf(25);
const moreHeroes = heroes.concat(["Superman", "Wolverine"]);
const pushToHeroes = heroes.push("Cyclops", "Hulk");
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
