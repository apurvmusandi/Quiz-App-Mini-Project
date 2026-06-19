import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './Welcome';
import Quiz from './Quiz';
import Results from './Results';

function App() {
  return (
    <Router>
      {/* Replaced min-vh-100 with minHeight: '100dvh' to fix mobile browser UI clipping */}
      <div className="bg-light d-flex flex-column" style={{ minHeight: '100dvh' }}>
        
        {/* Compressed Navbar py-2 */}
        <nav className="navbar navbar-dark bg-dark shadow-sm py-2">
          <div className="container">
            <span className="navbar-brand mb-0 h1 fs-5"><i className="bi bi-code-slash me-2"></i>DevQuiz Pro</span>
          </div>
        </nav>
        
        {/* Compressed Main py-2 */}
        <main className="container flex-grow-1 d-flex justify-content-center align-items-center py-2">
          <div className="w-100" style={{ maxWidth: '600px' }}>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/results" element={<Results />} />
            </Routes>
          </div>
        </main>

        {/* Compressed Footer py-2 and smaller text */}
        <footer className="bg-white text-center py-2 shadow-sm mt-auto border-top">
          <div className="container d-flex flex-column align-items-center">
            
            <small className="text-muted fw-medium mb-1" style={{ fontSize: '0.8rem' }}>
              Built with <i className="bi bi-code-slash text-primary mx-1"></i> by Apurv
            </small>
            
            <div className="d-flex gap-3 mt-1">
              <a href="https://github.com/apurvmusandi" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <i className="bi bi-github fs-5 text-dark"></i>
              </a>
              <a href="https://linkedin.com/in/apurvmusandi" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <i className="bi bi-linkedin fs-5" style={{ color: '#0a66c2' }}></i>
              </a>
              <a href="mailto:apurvmusandi@gmail.com" className="text-decoration-none">
                <i className="bi bi-envelope-at-fill fs-5" style={{ color: '#ea4335' }}></i>
              </a>
            </div>

          </div>
        </footer>

      </div>
    </Router>
  );
}

export default App;