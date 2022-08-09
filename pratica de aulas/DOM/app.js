//? obtendo, adicionando, removendo e alterando classes CSS
//? OBS: innerText, exibir o texto visivel que o elemento contem
//? OBS: textContent, exibir todo o texto do elemento independente visivel ou não

const title = document.querySelector('h1');
const paragraphs = document.querySelectorAll('p');

title.classList.toggle('test');
title.classList.toggle('test');

paragraphs.forEach(paragraph => {
  if (paragraph.textContent.includes('error')) {
    paragraph.classList.add('error');
  }
  if (paragraph.textContent.includes('success')) {
    paragraph.classList.add('success');
  }
});
