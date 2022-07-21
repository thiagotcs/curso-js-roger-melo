//* for loop
// for(let i = 0; i <= 5; i++) {
//   console.log(`Dentro do loop: ${i}`);
// }
// console.log(`Loop concluído`)

const names = ['thiago', 'silva', 'miguel']

for(let i = 0; i < names.length; i++) {
  // console.log(`Dentro do loop: ${names[i]}`);
  const HTMLTemplate = `<p>${names[i]}</p>`;
  console.log(HTMLTemplate);
}

//* While loop
// let i = 0;

// while(i < 5) {
//   console.log(`Dentro do loop: ${i}`);
//   i++;
// }

const arrayNames = ["silva", "Carvalho", "Miguel"]

let i = 0;

while (i < arrayNames.length) {
  console.log(`Dentro do loop: ${arrayNames[i]}`);
  i++;
}
