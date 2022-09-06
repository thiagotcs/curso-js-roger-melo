//? Fazendo requests HTTP
//? Funções de callback

const getTodos = (url, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    const isRequestOk = request.readyState === 4 && request.status === 200;
    const isRequestNotOk = request.readyState === 4;

    if (isRequestOk) {
      const data = JSON.parse(request.responseText);
      callback(null, data);
      return;
    }

    if (isRequestNotOk) {
      callback(`Não foi possível obeter os dados da API`, null);
    }
  }),
    // request.open('GET', 'http://jsonplaceholder.typicode.com/todos');
    request.open('GET', url);
  request.send();
};

console.log(1);
console.log(2);
getTodos('./json/todos.json', (error, data) => {
  console.log(data);
  getTodos('./json/todos-02.json', (error, data) => {
    console.log(data);
    getTodos('./json/todos-03.json', (error, data) => {
      console.log(data);
    });
  });
});

console.log(3);
console.log(4);
