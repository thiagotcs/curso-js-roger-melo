
//? função tradicional
const double = function (number) { 
  return number * 2;
}

//? arrow function 

const doubleArrow1 = (number) => { 
  return number * 2;
}

const doubleArrow2 = number => number * 2;


const result = double(4)
const result1 = doubleArrow1(3)
const result2 = doubleArrow2(5)
console.log(`O resulado ${result} ${result1} ${result2}`);