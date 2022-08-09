//? Usando querySelector
const h1 = document.querySelector("body > h1");
const paragraph = document.querySelector("p");
const paragraphError = document.querySelector(".error");
const paragraphDivError = document.querySelector("div.error");
console.log(h1);

//? Usando querySelectorAll
//? NodeList gerar uma list de nós tem forma de array mais não é array
const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);
paragraphs.forEach((paragraph) => console.log(paragraph));

const errors = document.querySelectorAll(".error");
console.log(errors);

// button.addEventListener("click", () => {
//   popup.style.display = "block";
// });

// popup.addEventListener("click", (event) => {
//   const classNameOfClickedElement = event.target.classList[0];
//   const classNames = ["popup-close", "popup-link", "popup-wrapper"];
//   const shouldClosePopup = classNames.some(
//     (className) => className === classNameOfClickedElement
//   );
//   if (shouldClosePopup) {
//     popup.style.display = "none";
//   }
// });
