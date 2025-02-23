document.addEventListener("DOMContentLoaded", () => {
    const tips = [
        { 
            text: "Reduce plastic use – Carry reusable bags.", 
            image: "images/reusable bags.jpg",
            description: "Plastic bags take hundreds of years to decompose and contribute to pollution. Switching to reusable bags helps reduce plastic waste and environmental damage."
        },
        { 
            text: "Conserve water – Turn off taps.", 
            image: "images/water-saving.jpg",
            description: "Turning off taps while brushing or washing dishes can save gallons of water daily. Water conservation helps protect ecosystems and ensures clean water for future generations."
        },
        { 
            text: "Grow your own food.", 
            image: "images/home-garden.jpg",
            description: "Home gardening reduces reliance on packaged and processed foods, promotes healthier eating, and lowers carbon emissions from food transportation."
        },
        { 
            text: "Use renewable energy.", 
            image: "images/solar-panels.jpg",
            description: "Switching to renewable energy sources like solar and wind reduces dependence on fossil fuels, cuts greenhouse gas emissions, and saves money in the long run."
        },
        { 
            text: "Unplug unused devices.", 
            image: "images/energy-saving.jpg",
            description: "Electronics continue to consume power even when turned off. Unplugging them or using a smart power strip can reduce energy waste and lower electricity bills."
        },
        { 
            text: "Use public transport or cycle.", 
            image: "images/bicycle.jpg",
            description: "Using public transportation or cycling instead of driving reduces air pollution, traffic congestion, and carbon footprints while promoting a healthier lifestyle."
        },
        { 
            text: "Compost food waste.", 
            image: "images/compost-bin.jpg",
            description: "Composting converts food scraps into nutrient-rich soil, reducing landfill waste and supporting sustainable agriculture."
        },
        { 
            text: "Buy second-hand or sustainable products.", 
            image: "images/eco-shopping.jpg",
            description: "Choosing second-hand or eco-friendly products reduces demand for new resources, minimizes waste, and promotes sustainable consumer habits."
        },
    ];

    // Random Tip Generator
    document.getElementById("random-tip-btn").addEventListener("click", function() {
        const randomIndex = Math.floor(Math.random() * tips.length);
        document.getElementById("random-tip").textContent = tips[randomIndex].text;
        document.getElementById("tip-image").src = tips[randomIndex].image;
        document.getElementById("tip-description").textContent = tips[randomIndex].description;
    });

    // Quiz Section
    const quizData = [
        {
            question: "What is one way to reduce plastic waste?",
            options: ["Using single-use plastics", "Recycling more", "Buying more plastic items"],
            answer: "Recycling more"
        },
        {
            question: "Which energy source is renewable?",
            options: ["Coal", "Solar", "Gasoline"],
            answer: "Solar"
        },
        {
            question: "Why is composting beneficial?",
            options: ["It reduces food waste", "It increases plastic waste", "It pollutes water"],
            answer: "It reduces food waste"
        },
        {
            question: "Which transportation method has the lowest carbon footprint?",
            options: ["Driving alone", "Taking the bus", "Cycling"],
            answer: "Cycling"
        },
        {
            question: "What can you do to save electricity?",
            options: ["Leave lights on all day", "Unplug unused devices", "Use only old appliances"],
            answer: "Unplug unused devices"
        }
    ];

    let currentQuestionIndex = 0;
    const quizContainer = document.getElementById("quiz-container");
    const questionText = document.getElementById("question");
    const answersList = document.getElementById("answers-list");
    const submitAnswerBtn = document.getElementById("submit-answer");
    const quizResult = document.getElementById("quiz-result");

    function loadQuiz() {
        if (currentQuestionIndex < quizData.length) {
            const currentQuestion = quizData[currentQuestionIndex];
            questionText.textContent = currentQuestion.question;
            answersList.innerHTML = "";

            currentQuestion.options.forEach(option => {
                const li = document.createElement("li");
                const input = document.createElement("input");
                input.type = "radio";
                input.name = "quiz-option";
                input.value = option;
                li.appendChild(input);
                li.appendChild(document.createTextNode(option));
                answersList.appendChild(li);
            });

            quizResult.textContent = ""; // Clear previous result
        } else {
            quizContainer.innerHTML = "<p>Congratulations! You've completed the quiz!</p>";
        }
    }

    submitAnswerBtn.addEventListener("click", () => {
        const selectedOption = document.querySelector("input[name='quiz-option']:checked");
        if (selectedOption) {
            const answer = selectedOption.value;
            const correctAnswer = quizData[currentQuestionIndex].answer;

            if (answer === correctAnswer) {
                quizResult.textContent = "Correct! Well done!";
            } else {
                quizResult.textContent = "Oops! Try again.";
            }

            setTimeout(() => {
                currentQuestionIndex++;
                loadQuiz();
            }, 1000);
        } else {
            quizResult.textContent = "Please select an answer.";
        }
    });

    loadQuiz();
});
