//? Obtendo e setando atributos

const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://rogermelo.com.br/');

link.innerHTML = 'Website do Roger Melo';

const paragraph = document.querySelector('p');
console.log(paragraph.getAttribute('class'));

paragraph.setAttribute('class', 'success');
console.log(paragraph.getAttribute('class'));

paragraph.setAttribute('style', 'color: green');
