import React from 'react';

const Quiz = ({ quizzes }) => {
  return (
    <div>
      <h2>Quiz</h2>
      {quizzes.map((quiz, index) => (
        <div key={index}>
          <h3>{quiz.index}</h3>
          <h3>{quiz.title}</h3>
          <ul>
            {quiz.questions.map((question, qIndex) => (
              <li key={qIndex}>
                <p>{question.question}</p>
                <ul>
                  {question.options.map((option, oIndex) => (
                    <li key={oIndex}>{option}</li>
                  ))}
                </ul>
                <p>Correct Answer: {question.correctAnswer}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Quiz;
