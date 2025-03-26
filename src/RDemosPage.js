import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RDemosPage.css';
import backgroundImage from './assets/background.jpg';

function RDemosPage() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div 
    style={{ 
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed', // Keep this
      minHeight: '100vh', // Change to min-height
      height: '100%', // Add this
      position: 'relative',
      width: '100%' // Ensure full width
    }}
    >
    
      <div className="background-overlay">
        <div className="content-container">


          <h1>Autonomous Robots Demos</h1>
        
          <section className="youtube-videos">
            <div className="video-grid">
              <iframe 
                src="https://www.youtube.com/embed/w0Z8wgRdnIk" 
                title="Robot Demonstration" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
              <iframe 
                src="https://www.youtube.com/embed/pcpJtGmh6Gs" 
                title="Robot Short 1" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
              <iframe 
                src="https://www.youtube.com/embed/2lYha7BQzLQ" 
                title="Robot Short 2" 
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

export default RDemosPage;