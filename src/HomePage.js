import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate();

  const goToDemos = () => {
    navigate('/demos');
  };

  const goToCV = () => {
    navigate('/cv');
  };

  return (
    <div className="home-page">
      <h1>Hello There!</h1>
      
      <section className="about-section">
        <h2>About me</h2>
        <p>
          MSc in Autonomous Systems @DTU.
          MSc in Production and Management Engineering.
        </p>
      </section>
      
      <section className="ai-section">
        <h2>All AI related fields</h2>
        <p>
          With projects in AI, Machine Learning and Robotics!
        </p>
      </section>

      <div className="navigation-buttons">
        <button 
          className="demos-button" 
          onClick={goToDemos}
        >
          View My Demos
        </button>
        <button 
          className="cv-button" 
          onClick={goToCV}
        >
          View My CV
        </button>
      </div>
    </div>
  );
}

export default HomePage;