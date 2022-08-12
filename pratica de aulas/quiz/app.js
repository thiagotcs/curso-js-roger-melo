const form = document.querySelector('.quiz-form');
const finalScoreContainer = document.querySelector('.final-score-container');
const correctAnswers = ['D', 'B', 'C', 'A'];

let score = 0;

const getUserAnswers = () =>
  correctAnswers.map((_, index) => form[`inputQuestion${index + 1}`].value);

//* maneira interar pelos items com forEach
// correctAnswers.forEach((_, index) => {
//   const userAnswer = form[`inputQuestion${index + 1}`].value;
//   userAnswers.push(userAnswer);
// });
// return userAnswers;

//* maneira interar pelos items com for
// for (let i = 0; i < correctAnswers.length; i++) {
//   form[`inputQuestion${i + 1}`].value;
// }
//* maneira mocada de fazer
// const userAnswers = [
//   form.inputQuestion1.value,
//   form.inputQuestion2.value,
//   form.inputQuestion3.value,
//   form.inputQuestion4.value,
// ];
// return userAnswers;

const calculateUserScore = userAnswers => {
  userAnswers.forEach((userAnswer, index) => {
    const isUserAnswerCorrect = userAnswer === correctAnswers[index];
    if (isUserAnswerCorrect) {
      score += 25;
    }
  });
};

const showFinalScore = () => {
  scrollTo({
    top: 0,
    let: 0,
    behavior: 'smooth',
  });
  finalScoreContainer.classList.remove('d-none');
};

const animateFinalScore = () => {
  let counter = 0;

  const timer = setInterval(() => {
    if (counter === score) {
      clearInterval(timer);
    }
    finalScoreContainer.querySelector('span').textContent = `${counter++}%`;
  }, 10);
};

form.addEventListener('submit', event => {
  event.preventDefault();

  const userAnswers = getUserAnswers();

  calculateUserScore(userAnswers);
  showFinalScore();
  animateFinalScore();
});

// setTimeout(() => {
//   console.log('to aqui!');
// }, 1000);

// let counter = 0;
// const timer = setInterval(() => {
//   console.log('1 segundo se passou!');
//   counter++;
//   if (counter === 5) {
//     clearInterval(timer);
//   }
// }, 1000);
