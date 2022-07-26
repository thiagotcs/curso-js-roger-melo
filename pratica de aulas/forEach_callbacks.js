//? forEach e callbacks
// const myFunc = callback => {
//   const value = 77;

//   callback(value);
// } 

// myFunc(number => {
//   console.log(number);
// });


const socialNetworks = ['youtube', 'facebook', 'twitter', 'google', 'linkedin']

//? forEach 1
//? function de callbacks são função que passamos como argumentos da invocação de outras funções ou métodos
socialNetworks.forEach((socialNetwork, index, array ) => {
  console.log(index, socialNetwork,  array)
});

//? forEach 2 desacoplando a function de callback aula etapa 03 métodos forEach e callbacks
//? function de callbacks são função que passamos como argumentos da invocação de outras funções ou métodos
const logArrayInfo = (socialNetwork, index, array ) => {
  console.log(index, socialNetwork,  array)
}
socialNetworks.forEach(logArrayInfo);