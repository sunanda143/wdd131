// Dynamic Tip Toggle Functionality
document.getElementById('toggleBtn').addEventListener('click', function() {
  const tipsSection = document.getElementById('tips-section');
  const isVisible = tipsSection.style.display === 'block';
  tipsSection.style.display = isVisible ? 'none' : 'block';
  this.textContent = isVisible ? 'Show More Tips' : 'Show Less Tips';
  this.setAttribute('aria-expanded', !isVisible);
});

// Populate Eco-Friendly Products List Dynamically
const products = [
  { name: 'Reusable Water Bottle', description: 'Stay hydrated, reduce plastic waste.' },
  { name: 'Bamboo Toothbrush', description: 'Eco-friendly alternative to plastic.' },
  { name: 'Compostable Plates', description: 'Perfect for eco-friendly parties.' }
];

const productList = document.getElementById('productList');
products.forEach(product => {
  const li = document.createElement('li');
  li.innerHTML = `<strong>${product.name}</strong>: ${product.description}`;
  productList.appendChild(li);
});

// Quiz Data (Questions and Answers)
const quizData = [
  {
    question: "Which of these is the best way to reduce plastic waste?",
    options: ["Using plastic bags", "Buying bottled water", "Using reusable containers"],
    correct: 2
  },
  {
    question: "What is an example of an eco-friendly product?",
    options: ["Plastic straws", "Bamboo toothbrush", "Single-use cutlery"],
    correct: 1
  },
  {
    question: "What is composting used for?",
    options: ["Recycling plastic", "Turning food waste into soil", "Cleaning oceans"],
    correct: 1
  }
];

// Function to Generate Quiz
function loadQuiz() {
  const quizContainer = document.getElementById('quiz-container');
  quizContainer.innerHTML = '';

  quizData.forEach((q, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('quiz-question');
    questionDiv.innerHTML = `<p>${index + 1}. ${q.question}</p>`;

    const optionsDiv = document.createElement('div');
    optionsDiv.classList.add('quiz-options');

    q.options.forEach((option, i) => {
      const label = document.createElement('label');
      label.innerHTML = `<input type="radio" name="question${index}" value="${i}"> ${option}`;
      optionsDiv.appendChild(label);
    });

    questionDiv.appendChild(optionsDiv);
    quizContainer.appendChild(questionDiv);
  });
}

// Function to Check Answers
document.getElementById('submitQuiz').addEventListener('click', function () {
  let score = 0;

  quizData.forEach((q, index) => {
    const selected = document.querySelector(`input[name="question${index}"]:checked`);
    if (selected && parseInt(selected.value) === q.correct) {
      score++;
    }
  });

  const resultText = `You scored ${score} out of ${quizData.length}!`;
  document.getElementById('quiz-result').textContent = resultText;
});

// Load quiz when the page loads
window.onload = loadQuiz;

