import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
  // Fetching from the public folder instead of localhost
  fetch('/db.json')
    .then((res) => res.json())
    .then((data) => {
      // Because our json structure is { "questions": [...] }
      // We must access data.questions before shuffling
      const shuffled = data.questions.sort(() => 0.5 - Math.random());
      setQuestions(shuffled.slice(0, 5));
      setLoading(false);
    })
    .catch(err => console.error("Error loading questions:", err));
}, []);

  const handleAnswer = (selectedOption) => {
    const currentQ = questions[currentIndex];
    const newAnswerRecord = {
      questionText: currentQ.text,
      selectedOption,
      correctAnswer: currentQ.answer,
      isCorrect: selectedOption === currentQ.answer
    };

    const updatedAnswers = [...userAnswers, newAnswerRecord];
    setUserAnswers(updatedAnswers);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate('/results', { state: { answers: updatedAnswers } });
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}></div>
        <h5 className="mt-3 text-muted">Loading environment...</h5>
      </div>
    );
  }

  const currentQ = questions[currentIndex];
  const progressPercentage = ((currentIndex) / 5) * 100;

  return (
    <div className="card shadow-lg border-0 rounded-4">
      {/* Progress Bar Header */}
      <div className="card-header bg-white border-0 pt-3 pb-0 px-3">
        <div className="d-flex justify-content-between text-muted small mb-2 fw-bold">
          <span>Question {currentIndex + 1} of 5</span>
          <span>{Math.round(progressPercentage)}% Completed</span>
        </div>
        <div className="progress" style={{ height: '6px' }}>
          <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary" 
               role="progressbar" 
               style={{ width: `${progressPercentage}%` }}>
          </div>
        </div>
      </div>

      {/* Question Body - Compressed Padding & Spacing */}
      <div className="card-body p-3 p-md-4">
        <h5 className="card-title fw-bold mb-3" style={{ lineHeight: '1.4' }}>
          {currentQ.text}
        </h5>
        
        <div className="d-grid gap-2"> {/* Reduced gap */}
          {currentQ.options.map((option, index) => (
            <button 
              key={`${currentQ.id}-${index}`} 
              className="btn btn-outline-secondary text-start p-2 rounded-3" /* Reduced padding */
              onClick={() => handleAnswer(option)}
            >
              <span className="badge bg-light text-dark border me-2 px-2 py-1">
                {String.fromCharCode(65 + index)}
              </span>
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Quiz;