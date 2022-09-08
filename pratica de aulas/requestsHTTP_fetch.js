//? Fazendo requests HTTP com fetch API

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => {
  console.log('Response', response);
  return response.json();
})
.then(users => console.log(users))
.catch(err => console.log(err));
