import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RDemosPage.css';
import backgroundImage from './assets/background.jpg';

function RDemosPage() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  const videos = [
    {
      src: "https://www.youtube.com/embed/w0Z8wgRdnIk",
      title: "RoboCup Competition",
      description: "Utilising rasberry pi, distance sensors, line sensors and cameras to complete competition challenges."
    },
    {
      src: "https://www.youtube.com/embed/pcpJtGmh6Gs",
      title: "UAV solving a maze.",
      description: "The A* algorithm is used in the UAV to solve mazes."
    },
    {
      src: "https://www.youtube.com/embed/2lYha7BQzLQ",
      title: "UAV Hoops Challenge",
      description: "Utilizing the PID controllers of the drone so that it can autonomously achieve a smooth flight path through hoops."
    }
  ];

  return (
    <div className="rdemos-page">
      <div className="background-overlay">
        <div className="content-container">
          <h1>Smart Robots Demos</h1>
        
          <section className="youtube-videos">
            <div className="video-grid">
              {videos.map((video, index) => (
                <div key={index} className="video-container">
                  <iframe 
                    src={video.src}
                    title={video.title}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                  <div className="video-description">
                    <h3>{video.title}</h3>
                    <p>{video.description}</p>
                  </div>
                </div>
              ))}
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