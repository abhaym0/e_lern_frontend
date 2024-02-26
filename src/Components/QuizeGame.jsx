import React, { useState } from 'react';

const QuizGame = () => {
  // Define quiz questions and answers
  const questions = [
    {
      question: "What is Node.js?",
      options: [
        "A JavaScript framework",
        "A runtime environment for executing JavaScript code outside the browser",
        "A database management system"
      ],
      correctAnswer: "A runtime environment for executing JavaScript code outside the browser"
    },
    {
      question: "Which event-driven architecture is Node.js based on?",
      options: [
        "Observer pattern",
        "Mediator pattern",
        "Reactor pattern"
      ],
      correctAnswer: "Reactor pattern"
    },
    {
      question: "What is npm?",
      options: [
        "Node Package Manager",
        "Node Project Manager",
        "Node Process Manager"
      ],
      correctAnswer: "Node Package Manager"
    },
    {
      question: "Which of the following modules is commonly used for handling file operations in Node.js?",
      options: [
        "fs",
        "http",
        "querystring"
      ],
      correctAnswer: "fs"
    }
    // Add more questions as needed
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleAnswer = (selectedOption) => {
    setSelectedAnswer(selectedOption);

    // Check if selected answer is correct
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    // Move to the next question or show result
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="quiz-container">
      {showResult ? (
        <div className="result">
          <h2>Your Score: {score} / {questions.length}</h2>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div className="question-container">
          <h2>Question {currentQuestion + 1}:</h2>
          <p>{questions[currentQuestion].question}</p>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)}>{option}</button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizGame;
