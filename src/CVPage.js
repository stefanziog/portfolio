import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CVPage.css';

function CVPage() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="cv-page">
      <h1>Curriculum Vitae</h1>
      
      <section className="education">
        <h2>Education</h2>
        <div className="cv-item">
          <h3>MSc in Autonomous Systems</h3>
          <p>Technical University of Denmark (DTU)</p>
          <p>Expected Graduation: [Year]</p>
        </div>
        <div className="cv-item">
          <h3>MSc in Production and Management Engineering</h3>
          <p>[University Name]</p>
          <p>Graduated: [Year]</p>
        </div>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>Artificial Intelligence</li>
          <li>Machine Learning</li>
          <li>Robotics</li>
          <li>Python</li>
          <li>React.js</li>
        </ul>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="cv-item">
          <h3>AI/Robotics Project</h3>
          <p>Brief description of the project and your key contributions.</p>
        </div>
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

export default CVPage;