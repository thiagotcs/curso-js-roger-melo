const title = document.querySelector('h1');
console.log(title);

title.classList.toggle('test')
title.classList.toggle('test')

// const paragraph = document.querySelector('p');
// console.log(paragraph.classList);

// paragraph.classList.add('error');
// paragraph.classList.remove('error');
// paragraph.classList.add('success');

const paragraphs = document.querySelectorAll('p');
  paragraphs.forEach(paragraph => {
    if(paragraph.innerText.includes('error')) {
      paragraph.classList.add('error');
    }
    if(paragraph.innerText.includes('success')) {
      paragraph.classList.add('success');
    }
})
console.log(paragraphs);