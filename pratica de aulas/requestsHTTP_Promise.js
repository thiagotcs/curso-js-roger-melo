//? Fazendo requests HTTP com Promise

const getPokemon = url => new Promise((resolve, reject) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    const isRequestOk = request.readyState === 4 && request.status === 200;
    const isRequestNotOk = request.readyState === 4;

    if (isRequestOk) {
      const data = JSON.parse(request.responseText);
      resolve(data);
    }
    if (isRequestNotOk) {
      reject(`Não foi possível obeter os dados da API`);
    }
  }),
    request.open('GET', url);
    request.send()
})

//? Fazendo requests HTTP encadeando a Promises
getPokemon('https://pokeapi.co/api/v2/pokemon/1')
  .then(bulbasaur => {
    console.log(bulbasaur)
    return getPokemon('https://pokeapi.co/api/v2/pokemon/4')
  })
  .then(charmander => {
    console.log(charmander)
    return getPokemon('https://pokeapi.co/api/v2/pokemon/7')
  })
  .then(console.log)
  .catch(err => console.log(err));


//? criando uma Promise
// const getData = () => {
//   return new Promise((resolve, reject) => {
//     resolve('Dados aqui')
//     // reject('Erro aqui')
//   });
// };
// getData()
//   .then(valeu => console.log(valeu))
//   .catch(err => console.log(err))