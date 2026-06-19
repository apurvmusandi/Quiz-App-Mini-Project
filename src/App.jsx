import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './Welcome';
import Quiz from './Quiz';
import Results from './Results';

function App() {
  return (
    <Router>
      {/* Background styling for the whole app */}
      <div className="bg-light min-vh-100 d-flex flex-column">
        <nav className="navbar navbar-dark bg-dark shadow-sm">
          <div className="container">
            <span className="navbar-brand mb-0 h1"><i className="bi bi-code-slash me-2"></i>DevQuiz Pro</span>
          </div>
        </nav>
        
        <main className="container flex-grow-1 d-flex justify-content-center align-items-center py-5">
          <div className="w-100" style={{ maxWidth: '600px' }}>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/results" element={<Results />} />
            </Routes>
          </div>
        </main>

        <footer className="bg-white text-center py-3 shadow-sm mt-auto border-top">
          <div className="container text-muted">
            <small className="fw-medium">
              Built with <i className="bi bi-code-slash text-primary mx-1"></i> by Apurv
            </small>
          </div>
        </footer>
        
      </div>
    </Router>
  );
}

export default App;