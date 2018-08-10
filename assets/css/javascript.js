// (function () {
//     const questions = [
//         {
//             question: "Toonami originally aired during what years on Cartoon Network?",
//             answers: {
//                 a: "1996-2005",
//                 b: "1997-2008",
//                 c: "1999-2003",
//                 d: "1995-2004",
//             },
//             correctAnswer: "b"
//         },
    
//         {
//             question: "What Cartoon Network block of shows did Toonami replace?",
//             answers: {
//                 a: "Power Zone",
//                 b: "Super Adventures",
//                 c: "Adult Swim",
//                 d: "Cartoon Specials",
//             },
//             correctAnswer: "a"
//         },
    
//         {
//             question: "Which antagonist destroyed T.O.M., Toonami's original cartoon host?",
//             answers: {
//                 a: "The Predator",
//                 b: "The Perpetrator",
//                 c: "The Imposter",
//                 d: "The Intruder",
//             },
//             correctAnswer: "d"
//         }
//     ];

// function buildQuiz() {
//         const output = [];
//         questions.forEach(
//             (currentQuestion, questionNumber) => {
//                 const answers = [];
//                 for (letter in currentQuestion.answers) {
//                     answers.push(
//                         `<label>
//                         <input type="radio" name="question${questionNumber}" value="${letter}">
//                         ${letter} : 
//                         ${currentQuestion.answers[letter]}
//                         </label>`
//                     );
//                 }
    
//                 output.push(
//                     `<div class="slide">
//                     <div class="question"> ${currentQuestion.question} </div>
//                     <div class="answers"> ${answers.join("")} </div>
//                     </div>`
//                 );
//             });
    
//         quizContainer.innerHTML = output.join("");
    
//     }
    
//     function showResults() {
//         const answerContainers = quizContainer.querySelectorAll(".answers");
//         let numCorrect = 0;
//         questions.forEach((currentQuestion, questionNumber) => {
    
//             const answerContainer = answerContainers[questionNumber];
//             const selector = `input[name=question${questionNumber}]:checked`;
//             const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    
//             if (userAnswer === currentQuestion.correctAnswer) {
//                 numCorrect++;
//                 answerContainers[questionNumber].style.color = 'lightgreen';
//             } else {
//                 answerContainers[questionNumber].style.color = 'red';
//             }
//         });
    
//         resultsContainer.innerHTML = `${numCorrect} out of ${questions.lenth}`;
//     }

//     function showSlide(n) {
//         slides[currentSlide].classList.remove("active-slide");
//         slides[n].classList.add("active-slide");
//         currentSlide = n;
        
//         if (currentSlide === 0) {
//             previousButton.style.display = "none";
//         }
//         else {
//             previousButton.style.display = "inline-block";
//         }
//         if (currenSlide === slides.length - 1) {
//             nextButton.style.display = "none";
//             submitButton.style.display = "inline-block";
//         }
//         else {
//             nextButton.style.display = "inline-block";
//             submitButton.style.display = "none";
//         }
//     }

//     function showNextSlide() {
//         showSlide(currentSlide + 1);
//     }
    
//     function showPreviousSlide() {
//         showSlide(currentSlide - 1);
//     }

// const quizContainer = document.getElementById("quiz");
// const resultsContainer = document.getElementById("results");
// const submitButton = document.getElementById("submit");

// buildQuiz();

// const previousButton = document.getElementById("previous");
// const nextButton = document.getElementById("next");
// const slides = document.querySelectorAll(".slide");
// let currentSlide = 0;

// showSlide(0);

// submitButton.addEventListener("click", showResults);
// previousButton.addEventListener("click", showPreviousSlide);
// nextButton.addEventListener("click", showNextSlide);

// })();












