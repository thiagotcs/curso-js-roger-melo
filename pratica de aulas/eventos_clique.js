//? Eventos de CLique
// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//   console.log('clicou')
// });

const lis = document.querySelectorAll('li');

//! removendo elementos no DOM
lis.forEach((li) => {
  li.addEventListener('click', event => {
     const clickedElement = event.target

    //  clickedElement.style.textDecoration = 'line-through';
     clickedElement.remove();
  });
})

//? Criando e removendo elementos do DOM
//! removendo elementos no DOM
const ul = document.querySelector('ul');
// ul.remove();


//! adicionando elementos no DOM
const button = document.querySelector('button');

button.addEventListener('click', () => {
  // ul.innerHTML += `<li>Novo item</li>`
  const li = document.createElement('li');
  li.textContent = 'Novo item';
  // ul.append(li);
  ul.prepend(li);
});