import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DemosPage.css';
import backgroundImage from './assets/background.jpg';

function DemosPage() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="demos-page">
    
      <div className="background-overlay">
        <div className="content-container">
          <h1>AI and Machine Learning Demos</h1>
        
          <section className="youtube-videos">
            <div className="video-grid">
              <iframe 
                src="https://www.youtube.com/embed/ppCPDzL_fAs" 
                title="First AI Demonstration" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
              <iframe 
                src="https://www.youtube.com/embed/MWIxgRXCaHA" 
                title="Second AI Demonstration" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
              <iframe 
                src="https://www.youtube.com/embed/JWVnKCrLDsc" 
                title="Third AI Demonstration" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
              <iframe 
                src="https://www.youtube.com/embed/x8jttzOtAuo" 
                title="Fourth AI Demonstration" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </section>

          <button 
            className="home-button" 
            onClick={goHome}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default DemosPage;