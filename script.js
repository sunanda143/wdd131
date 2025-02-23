document.addEventListener("DOMContentLoaded", function () {
    // Quiz Questions Array
    const quizData = [
        {
            question: "Which of the following is a renewable energy source?",
            options: ["Coal", "Solar", "Plastic"],
            answer: "Solar",
            image: "images/solar.jpg"
        },
        {
            question: "What is the best way to reduce plastic waste?",
            options: ["Recycle", "Burn it", "Throw it away"],
            answer: "Recycle",
            image: "images/recycle.jpg"
        },
        {
            question: "Which of these products is biodegradable?",
            options: ["Glass", "Banana Peel", "Aluminum Can"],
            answer: "Banana Peel",
            image: "images/biodegradable.jpg"
        }
    ];

    let currentQuestionIndex = 0;

    // DOM Elements
    const questionText = document.getElementById("question");
    const options = document.querySelectorAll(".quiz-btn");
    const resultText = document.getElementById("result");
    const quizImage = document.getElementById("quiz-image");

    // Function to Load a Question
    function loadQuestion() {
        let currentQuestion = quizData[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;
        quizImage.src = currentQuestion.image;

        options.forEach((button, index) => {
            button.textContent = currentQuestion.options[index];
            button.onclick = () => checkAnswer(currentQuestion.options[index], currentQuestion.answer);
        });
    }

    // Function to Check Answer
    function checkAnswer(selected, correct) {
        resultText.textContent = selected === correct ? "✅ Correct! Well done!" : "❌ Incorrect! Try again.";
        resultText.style.color = selected === correct ? "green" : "red";

        // Load Next Question after 2 Seconds
        setTimeout(() => {
            currentQuestionIndex = (currentQuestionIndex + 1) % quizData.length;
            loadQuestion();
            resultText.textContent = ""; // Clear result
        }, 2000);
    }

    // Load First Question on Page Load
    loadQuestion();
});
