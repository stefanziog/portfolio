import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DemosPage.css';
import backgroundImage from './assets/background.jpg';

function DemosPage() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  const videos = [
    {
      src: "https://www.youtube.com/embed/ppCPDzL_fAs",
      title: "Artificial Intelligence in Multi Agent Systems",
      description: "Conflict Based Search is used in combination with A* and Dijkstra's algorithms to solve multi-agent pathfinding problems. The goal is for each agent to complete the mission without colliding with other agents."
    },
    {
      src: "https://www.youtube.com/embed/MWIxgRXCaHA",
      title: "AI Storyteller Demo Version",
      description: "ChatGPT, Dall-E and voice generators are used in the backend with Django to create a story generator. While on the frontend, React is used to create a user-friendly interface. Furthermore an AWS server is used to for cloud deployment."
    },
    {
      src: "https://www.youtube.com/embed/JWVnKCrLDsc",
      title: "3D Gaussian Splatting",
      description: "3D Gaussian Splatting is a technique where a 3D scene is represented as a point cloud. The point cloud is then rendered using a Gaussian function to create a smooth surface. With just a 30 second video of the room we where able to recreate it in 3D, adding a 3D character build in Blender with animations. Unity was used to bind everything together."
    },
    {
      src: "https://www.youtube.com/embed/x8jttzOtAuo",
      title: "Drone Simulation",
      description: "Reinforcement Learning strategies are used for Inspection purposes. The Drone inspects 50 meters inside the enclosed space and then backtracks to its initial position following the previous coordinates."
    }
  ];

  return (
    <div className="demos-page">
      <div className="background-overlay">
        <div className="content-container">
          <h1>AI and Machine Learning Demos</h1>
        
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

export default DemosPage;