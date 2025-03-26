import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DemosPage.css';

function DemosPage() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="demos-page">
      <h1>My Demos</h1>
      
      <section className="demos-list">
        <h2>Ongoing Projects</h2>
        <ul>
          <li>AI Machine Learning Project</li>
          <li>Robotics Simulation</li>
          <li>Autonomous Systems Research</li>
        </ul>
      </section>

      <button 
        className="home-button" 
        onClick={goHome}
      >
        Back to Home
      </button>
    </div>
  );
}

export default DemosPage;