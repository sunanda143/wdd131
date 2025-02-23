// Array of products
const products = [
    {
        name: "Solar-Powered Lights",
        image: "images/solar-lights.jpg",
        description: "Save energy by using solar lights for outdoor spaces.",
        price: "$25"
    },
    {
        name: "Reusable Water Bottle",
        image: "images/water-bottle.png",
        description: "Reduce plastic waste by using a durable, refillable bottle.",
        price: "$15"
    },
    {
        name: "Compostable Plates",
        image: "images/compostable-plates.jpg",
        description: "Perfect for eco-friendly parties, fully biodegradable.",
        price: "$10"
    }
];

// Function to display products dynamically
function displayProducts() {
    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML = ""; // Clear existing content

    products.forEach((product, index) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        // Preload image to prevent layout shifts
        const img = new Image();
        img.src = product.image;
        img.alt = product.name;
        img.onload = () => productDiv.appendChild(img); // Append image after loading

        productDiv.innerHTML += `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">${product.price}</p>
            <button onclick="showDetails(${index})">View Details</button>
        `;

        productContainer.appendChild(productDiv);
    });
}

// Function to show product details in an alert
function showDetails(index) {
    alert(`Product: ${products[index].name}\nPrice: ${products[index].price}\n\n${products[index].description}`);
}

// **Quiz Section**
const quizQuestions = [
    {
        question: "Which of these materials is biodegradable?",
        options: ["Plastic", "Glass", "Bamboo",],
        correct: "Bamboo"
    },
    {
        question: "What is the best way to reduce plastic waste?",
        options: ["Use more plastic", "Recycle only", "Use reusable items",],
        correct: "Use reusable items"
    },
    {
        question: "What energy source is renewable?",
        options: ["Coal", "Nuclear", "Solar",],
        correct: "Solar"
    }
];

// Display "Loading..." before questions load
function displayQuiz() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = "<p>Loading quiz...</p>"; // Prevent layout shift

    setTimeout(() => {
        quizContainer.innerHTML = ""; // Remove "Loading..."

        quizQuestions.forEach((q, index) => {
            const questionDiv = document.createElement("div");
            questionDiv.classList.add("quiz-question");

            let optionsHtml = q.options.map(option =>
                `<label><input type="radio" name="question${index}" value="${option}"> ${option}</label>`
            ).join("");

            questionDiv.innerHTML = `<p><strong>${q.question}</strong></p>${optionsHtml}`;
            quizContainer.appendChild(questionDiv);
        });
    }, 500); // Small delay to prevent jumping
}

// Function to check quiz answers
function checkQuizAnswers() {
    let score = 0;
    let unanswered = 0;

    quizQuestions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);

        if (selectedOption) {
            if (selectedOption.value === q.correct) {
                score++;
            }
        } else {
            unanswered++;
        }
    });

    let resultMessage = `You got ${score} out of ${quizQuestions.length} correct! 🎉`;
    if (unanswered > 0) {
        resultMessage += `\n\n⚠️ You left ${unanswered} question(s) unanswered.`;
    }

    document.getElementById("quiz-result").textContent = resultMessage;
}

// Load products and quiz when the page loads
document.addEventListener("DOMContentLoaded", () => {
    displayProducts();
    displayQuiz();

    document.getElementById("submit-quiz").addEventListener("click", checkQuizAnswers);
});
