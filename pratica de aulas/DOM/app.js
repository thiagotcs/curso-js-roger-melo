//? Event submit

const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
// const usernameInput = document.querySelector('#username');

const testUsername = username => /^[a-zA-Z]{6,11}$/.test(username);

form.addEventListener('submit', event => {
  event.preventDefault();
  // console.log(usernameInput.value);
  // console.log(form.username.value);
  // console.log(event.target.username.value);
  const isAvalidUsername = testUsername(event.target.username.value);

  if (isAvalidUsername) {
    feedback.textContent = 'username válido =)';
    return;
  }
  feedback.textContent =
    'o username deve conter entre 6 a 12 caracteres e deve conter apenas letras';
});

//? Regular expression (regex) to match Name
// const username = 'miguel';
// const pattern = /^[a-zA-Z]{6,}$/;
// const result = pattern.test(username);
// console.log(result);

form.username.addEventListener('keyup', event => {
  const isAvalidUsername = testUsername(event.target.value);

  console.log(event);
  if (isAvalidUsername) {
    form.username.setAttribute('class', 'success');
    console.log('é válido!');
    return;
  }
  console.log('não é válido!');
  form.username.setAttribute('class', 'error');
});
