//? Event bubbing e event delegation
//? Event bubbing o evento é iniciado no target do evento do elemento e se propagar em direção ao pai desse target

const ul = document.querySelector('ul');
const button = document.querySelector('button');
// ul.remove();

button.addEventListener('click', () => {
  // ul.innerHTML += `<li>Novo item</li>`;
  const li = document.createElement('li');
  li.textContent = 'Novo item';
  ul.append(li);
});

ul.addEventListener('click', event => {
  const clickedElement = event.target;
  if (clickedElement.tagName === 'LI') {
    clickedElement.remove();
  }
});
