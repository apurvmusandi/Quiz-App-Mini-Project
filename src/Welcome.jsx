import React from 'react';
import { useNavigate } from 'react-router-dom';
import javaLogo from './assets/java_logo.svg'; 

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="card shadow-lg border-0 rounded-4 text-center p-3 p-md-5">
      <div className="card-body p-2 p-md-3">
        
        <img 
          src={javaLogo} 
          alt="Java Logo" 
          className="mb-2 mb-md-3" 
          style={{ width: '60px', height: 'auto' }} 
        />
        
        <h1 className="fs-2 fw-bold mb-2">Java Core Assessment</h1>
        <p className="text-muted mb-3 mb-md-4 fs-6">
          Test your Object-Oriented Programming skills. You will face 5 randomly selected questions.
        </p>
        
        <button 
          className="btn btn-primary px-4 py-2 rounded-pill shadow-sm" 
          onClick={() => navigate('/quiz')}
        >
          Begin Assessment <i className="bi bi-arrow-right ms-2"></i>
        </button>
      </div>
    </div>
  );
}

export default Welcome;