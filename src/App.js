import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import DemosPage from './DemosPage';
import CVPage from './RDemosPage';

function App() {
  return (
    <Router basename="/portfolio">
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/demos" element={<DemosPage />} />
          <Route path="/rdemos" element={<CVPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;