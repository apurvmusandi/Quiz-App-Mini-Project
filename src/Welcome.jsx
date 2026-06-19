import React from 'react';
import { useNavigate } from 'react-router-dom';
// Import your SVG file from the assets folder
import javaLogo from './assets/java_logo.svg'; 

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="card shadow-lg border-0 rounded-4 text-center p-5">
      <div className="card-body">
        {/* Replace the Bootstrap Icon with your imported SVG */}
        <img 
          src={javaLogo} 
          alt="Java Logo" 
          className="mb-3" 
          style={{ width: '180px', height: 'auto' }} 
        />
        
        <h1 className="display-6 fw-bold mb-3">Java Core Assessment</h1>
        <p className="text-muted mb-4 pb-2 fs-5">
          Test your Object-Oriented Programming skills. You will face 5 randomly selected questions.
        </p>
        
        <button 
          className="btn btn-primary btn-lg px-5 rounded-pill shadow-sm" 
          onClick={() => navigate('/quiz')}
        >
          Begin Assessment <i className="bi bi-arrow-right ms-2"></i>
        </button>
      </div>
    </div>
  );
}

export default Welcome;