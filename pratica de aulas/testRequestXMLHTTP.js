const request = new XMLHttpRequest();

request.open('GET', './json/todos.json')
request.send();

request.addEventListener('readystatechange', () => {
  const isRequestOk = request.readyState === 4 && request.status === 200
  if (isRequestOk) {
    const data = JSON.parse(request.responseText);
  console.log(data);
  return
  }
})