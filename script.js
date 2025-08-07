const questions = [
  {
    question: "What does SDG 13 primarily focus on?",
    options: ["Life Below Water", "Climate Action", "No Poverty"],
    correctAnswer: "Climate Action",
    explanation: "SDG 13 urges action to combat climate change and its impacts.",
    funFact: "🌍 Climate change increases the frequency of extreme weather events!"
  },
  {
    question: "Which of the following contributes the most to climate change?",
    options: ["Recycling", "Carbon emissions", "Planting trees"],
    correctAnswer: "Carbon emissions",
    explanation: "Burning fossil fuels for energy releases carbon dioxide into the atmosphere.",
    funFact: "🔥 CO2 levels are at their highest in over 800,000 years!"
  },
  {
    question: "What can individuals do to help reduce climate change?",
    options: ["Use plastic bags", "Drive more", "Use public transport"],
    correctAnswer: "Use public transport",
    explanation: "Public transport reduces the number of individual cars on the road, cutting emissions.",
    funFact: "🚌 One bus can take 40 cars off the road!"
  },
  {
    question: "Which of these is a renewable energy source?",
    options: ["Coal", "Oil", "Solar"],
    correctAnswer: "Solar",
    explanation: "Solar energy is renewable and doesn't emit greenhouse gases.",
    funFact: "☀️ The sun provides more energy in an hour than the world uses in a year!"
  },
  {
    question: "How can trees help fight climate change?",
    options: ["By using up water", "By absorbing carbon dioxide", "By creating shade only"],
    correctAnswer: "By absorbing carbon dioxide",
    explanation: "Trees absorb CO2 from the atmosphere, helping reduce the greenhouse effect.",
    funFact: "🌳 A mature tree can absorb up to 48 pounds of CO2 per year!"
  },
  {
    question: "What international agreement aims to limit global warming?",
    options: ["Paris Agreement", "Kyoto Protocol", "Geneva Convention"],
    correctAnswer: "Paris Agreement",
    explanation: "The Paris Agreement is a global treaty to keep global warming well below 2°C.",
    funFact: "📜 Nearly every country on Earth is part of the Paris Agreement!"
  }
];

let currentQuestion = 0;

function showQuestion() {
  const container = document.getElementById("question-container");
  const q = questions[currentQuestion];
  let optionsHTML = "";

  q.options.forEach(option => {
    optionsHTML += `<label><input type="radio" name="answer" value="${option}"> ${option}</label><br>`;
  });

  container.innerHTML = `
    <h2>Q${currentQuestion + 1}: ${q.question}</h2>
    <form id="quiz-form">${optionsHTML}</form>
    <button onclick="checkAnswer()">Submit</button>
  `;
  document.getElementById("ai-feedback").innerHTML = "";
  document.getElementById("next-btn").style.display = "none";
}

function checkAnswer() {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (!selected) return alert("Please select an answer.");

  const answer = selected.value;
  const q = questions[currentQuestion];
  let feedback = "";

  if (answer === q.correctAnswer) {
    feedback = `
      🎉 <strong>Excellent!</strong> You got it right.<br><br>
      ✅ <strong>Explanation:</strong> ${q.explanation}<br>
      🌱 <strong>Fun Fact:</strong> ${q.funFact}
    `;
  } else {
    feedback = `
      😬 <strong>Oops!</strong> The correct answer is <strong>${q.correctAnswer}</strong>.<br><br>
      ✅ <strong>Explanation:</strong> ${q.explanation}<br>
      🌱 <strong>Fun Fact:</strong> ${q.funFact}
    `;
  }

  document.getElementById("ai-feedback").innerHTML = feedback;
  document.getElementById("next-btn").style.display = "inline-block";
}

document.getElementById("next-btn").addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    document.getElementById("question-container").innerHTML = `
      <h2>🎉 Quiz Completed! You're a climate action hero! 💪</h2>
    `;
    document.getElementById("ai-feedback").innerHTML = "";
    document.getElementById("next-btn").style.display = "none";
  }
});

showQuestion();