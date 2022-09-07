//? Fazendo requests HTTP
//? Status de respostas HTTP
const getTodos = (url, callback) => {
  const request = new XMLHttpRequest();
  
  request.addEventListener('readystatechange', () => {
    const isRequestOk = request.readyState === 4 && request.status === 200
    const isRequestNotOk = request.readyState === 4 
    if (isRequestOk) {
      const data = JSON.parse(request.responseText);
      callback(null, data)
    // console.log(request.responseText);
    return
    }
    if (isRequestNotOk) {
      callback('Não foi possível obter os dados', null)
    // console.log('Não foi possivel obter os dados da API');
    }
  })
  
  // request.open('GET','https://jsonplaceholder.typicode.com/todos')
  request.open('GET', url)
  request.send();
}
console.log(1)
console.log(2)
getTodos('./json/todos.json', (error, data) => {
  console.log('callback executado');
  
  if (error) {
    console.log(error);
    return
  }
  console.log(data)
})
console.log(3)
console.log(4)


