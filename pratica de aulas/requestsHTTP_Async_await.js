//? Fazendo requests HTTP com Async/await
const getUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  return  await response.json();
};

const logUsers = async () => {
  const users = await getUsers();
  console.log(users)
}
console.log(1)
console.log(2)
logUsers()
console.log(3)
console.log(4)



//? Fazendo requests HTTP com fetch API

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => {
//   console.log('Response', response);
//   return response.json();
// })
// .then(users => console.log(users))
// .catch(err => console.log(err));
