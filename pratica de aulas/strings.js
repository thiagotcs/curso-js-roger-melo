//? -- strings --
  const emailTest = "teste@example.com";
  console.log(emailTest);

//? concatenação de strings
  const firstName = "Nathan";
  const lastName = "Drake";
  const fullName = firstName + " " + lastName;
  console.log(fullName);

//? acessando caracteres
  console.log(firstName[2]);

//? podemos usar a propriedade length
//? para saber o comprimento de uma string
  console.log("🚀 length",fullName.length);

//? Métodos comuns de strings
  console.log("🚀 toUpperCase", fullName.toUpperCase());

  const result = fullName.toLowerCase();
  console.log("🚀 toLowerCase", result, fullName);

  const index = emailTest.indexOf("@");
  console.log("🚀 indexOf",index);

//? Métodos lastIndexOf retorna sempre o ultimo recorrencia da string
  const email = "laracroft@rogermelo.com.br";
  const LastIndexOfA = email.lastIndexOf("a");
  console.log("🚀 LastIndexOfA", LastIndexOfA);

//? Métodos slice para pegar uma parte de uma string
  const emailSlice = email.slice(4, 9);
  console.log("🚀 emailSlice", emailSlice, email);

//? Métodos replace para substituir uma string por outro string
  const emailReplace = email.replace("l", "y");
  console.log("🚀 emailReplace", emailReplace);

  const emailReplace2 = email.replace("laracroft", "chun-li");
  console.log("🚀 emailReplace2", emailReplace2);
