//? Fazendo requests Paralelos
const getPokemon = async () => {
  const bulbasaur = fetch('https://pokeapi.co/api/v2/pokemon/1')
  const charmander = fetch('https://pokeapi.co/api/v2/pokemon/4')
  const squirtle = fetch('https://pokeapi.co/api/v2/pokemon/7')

  const result = await Promise.all([bulbasaur, charmander, squirtle])
  result.forEach(async response => console.log(await response.json()))
}

getPokemon()


//? Fazendo requests Sequenciais
const getPokemonSequenciais = async () => {
  const bulbasaur = await fetch('https://pokeapi.co/api/v2/pokemon/1')
  const charmander = await fetch('https://pokeapi.co/api/v2/pokemon/4')
  const squirtle = await fetch('https://pokeapi.co/api/v2/pokemon/7')

  console.log(await bulbasaur.json())
  console.log(await charmander.json())
  console.log(await squirtle.json())
}

getPokemonSequenciais()
