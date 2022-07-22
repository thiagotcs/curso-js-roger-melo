//? if else | else if
//? operadores lógico "OU" || e "E" &&

let possword = 'smd2333333';

if(possword.length >= 12 && possword.includes('1')) {
  console.log("Senha maior de 12 caracteres é muito forte  " )
} else if(possword.length > 8 || possword.includes('1') && possword.length >= 5) {
  console.log("Senha Forte")
} else {
  console.log("Senha deve conter 8 caracteres ou mais")
}
