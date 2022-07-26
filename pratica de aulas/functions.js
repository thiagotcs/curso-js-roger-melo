//? Function declaration 
//? funciona para hoisting podemos assim invocar a function antes de sua declaration 

sayHi()
function sayHi(){
  console.log('Oi')
}
sayHi()

//? Function expression não são hoisting(içadas)
const showFood = function () {
  console.log('pizza')
}
showFood()

//? Argumentos, parâmetros e default parameters
const myFunc = function (name = 'silva', lastName = 'carvalho') { 
  console.log(`Oi, ${name} ${lastName}!`)
}
myFunc('Miguel', 'Carvalho')
myFunc()
myFunc('Gizele')

//? Retornando valores
const double = function (number) { 
  return number * 2;
}
const result = double(3)

const showResult = function (value) { 
  return `O resulado ${value}`
}

console.log(showResult(result));