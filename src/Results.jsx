import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const answers = location.state?.answers || [];
  
  const score = answers.filter(ans => ans.isCorrect).length;
  const isPassing = score >= 3;

  return (
    <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
      {/* Dynamic Header based on score */}
      <div className={`text-center p-5 text-white ${isPassing ? 'bg-success' : 'bg-danger'}`}>
        <i className={`bi ${isPassing ? 'bi-trophy-fill' : 'bi-exclamation-triangle-fill'} display-1 mb-3`}></i>
        <h2 className="fw-bold">{isPassing ? 'Assessment Passed!' : 'Assessment Failed'}</h2>
        <p className="fs-5 mb-0">You scored <strong>{score}</strong> out of 5</p>
      </div>

      <div className="card-body p-0">
        <ul className="list-group list-group-flush">
          {answers.map((ans, index) => (
            <li key={index} className={`list-group-item p-4 border-bottom ${ans.isCorrect ? 'bg-light' : ''}`}>
              <div className="d-flex w-100 justify-content-between align-items-start mb-2">
                <h6 className="mb-1 fw-bold text-dark w-75">{index + 1}. {ans.questionText}</h6>
                {ans.isCorrect ? 
                  <span className="badge bg-success rounded-pill px-3 py-2"><i className="bi bi-check-circle me-1"></i> Correct</span> : 
                  <span className="badge bg-danger rounded-pill px-3 py-2"><i className="bi bi-x-circle me-1"></i> Incorrect</span>
                }
              </div>
              
              <div className="mt-3 small">
                <div className="text-muted mb-1">Your answer:</div>
                <div className={`p-2 rounded ${ans.isCorrect ? 'bg-success bg-opacity-10 text-success' : 'bg-danger bg-opacity-10 text-danger'}`}>
                  <strong>{ans.selectedOption}</strong>
                </div>
                
                {!ans.isCorrect && (
                  <>
                    <div className="text-muted mt-2 mb-1">Correct answer:</div>
                    <div className="p-2 rounded bg-success bg-opacity-10 text-success">
                      <strong>{ans.correctAnswer}</strong>
                    </div>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="card-footer bg-white border-top-0 p-4 text-center">
        <button 
          className="btn btn-outline-dark btn-lg px-5 rounded-pill" 
          onClick={() => navigate('/')}
        >
          <i className="bi bi-arrow-counterclockwise me-2"></i> Retake Assessment
        </button>
      </div>
    </div>
  );
}

export default Results;