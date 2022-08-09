//? Adicionando e modificando conteúdo em uma página

const paragraph = document.querySelector('p');
// paragraph.innerText += ' Texto inserido';

const paragraphs = document.querySelectorAll('p');
// paragraphs.forEach((paragraph, index) => {
//   // console.log('🚀 paragraphs', paragraph.innerText);
//   paragraph.innerText += ` Novo texto ${index + 1}`;
// });

const div = document.querySelector('.content');
div.innerHTML += `<h2>Novo h2</h2>`;

const people = ['thiago', 'Miguel', 'Johnson', 'Gizele'];

people.forEach(person => {
  div.innerHTML += `<p>${person}</p>`;
});

//? getters and setters
//? get = obter set = estabelecer
