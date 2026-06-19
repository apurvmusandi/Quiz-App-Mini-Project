import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './Welcome';
import Quiz from './Quiz';
import Results from './Results';

function App() {
  return (
    <Router>
      <div className="bg-light min-vh-100 d-flex flex-column">
        
        {/* Navigation Bar */}
        <nav className="navbar navbar-dark bg-dark shadow-sm">
          <div className="container">
            <span className="navbar-brand mb-0 h1"><i className="bi bi-code-slash me-2"></i>DevQuiz Pro</span>
          </div>
        </nav>
        
        {/* Main Content Area - Reduced py-5 to py-3 to move card up on mobile */}
        <main className="container flex-grow-1 d-flex justify-content-center align-items-center py-3">
          <div className="w-100" style={{ maxWidth: '600px' }}>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/results" element={<Results />} />
            </Routes>
          </div>
        </main>

        {/* Upgraded Footer with Social Logos */}
        <footer className="bg-white text-center py-3 shadow-sm mt-auto border-top">
          <div className="container d-flex flex-column align-items-center">
            
            <small className="text-muted fw-medium mb-2">
              Built with <i className="bi bi-code-slash text-primary mx-1"></i> by Apurv
            </small>
            
            {/* Social Icons Container */}
<div className="d-flex gap-3 mt-1">
  
  {/* GitHub - Standard Black/Dark */}
  <a href="https://github.com/YOUR_GITHUB_USERNAME" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
    <i className="bi bi-github fs-4 text-dark"></i>
  </a>
  
  {/* LinkedIn - Official Brand Blue */}
  <a href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
    <i className="bi bi-linkedin fs-4" style={{ color: '#0a66c2' }}></i>
  </a>
  
  {/* Email/Gmail - Official Brand Red */}
  <a href="mailto:YOUR_EMAIL@example.com" className="text-decoration-none">
    <i className="bi bi-envelope-at-fill fs-4" style={{ color: '#ea4335' }}></i>
  </a>

</div>

          </div>
        </footer>

      </div>
    </Router>
  );
}

export default App;