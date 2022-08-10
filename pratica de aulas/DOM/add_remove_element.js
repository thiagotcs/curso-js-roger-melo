//? Criando e removendo elemento do DOM

const ul = document.querySelector('ul');
// ul.remove();

const lis = document.querySelectorAll('li');

lis.forEach(li => {
  li.addEventListener('click', event => {
    const clickedElement = event.target;
    // clickedElement.style.textDecoration = 'line-through';
    clickedElement.remove();
  });
});

const button = document.querySelector('button');
button.addEventListener('click', () => {
  // ul.innerHTML += `<li>Novo item</li>`;
  const li = document.createElement('li');
  li.textContent = 'Novo item';
  ul.append(li);
});
