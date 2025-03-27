import React from 'react';
import { 
  SiPython, 
  SiCplusplus, 
  SiC 
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import backgroundImage from './assets/background.jpg';
function HomePage() {
  const navigate = useNavigate();

  const goToDemos = () => {
    navigate('/demos');
  };

  const goToRDemos = () => {
    navigate('/rdemos');
  };

  const goToCV = () => {
    navigate('/cv');
  };
  return (
    <div 
      className="home-page" 
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
          <h1>Hello There</h1>
          

          <section className="ai-section">
            <h2>About me</h2>
            <div>
              <p>I am a passionate engineer with a strong background in AI-Machine Learning and Robotics.</p>
              <p>My dream is to apply my skills in a relative field and further develop my knowledge.</p>
              <p>With an open mind and hard work I desire to collaborate in creative and innovative projects.</p>
              <p>Contact Links:</p>
              <p><a 
                href="https://github.com/stefanziog" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{
                  color: '#ffffff', 
                  textDecoration: 'none', 
                  fontWeight: 'bold',
                  transition: 'color 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.color = '#60a5fa'}
                onMouseOut={(e) => e.target.style.color = '#ffffff'}
              >GitHub   </a>
              <a 
                href="https://www.linkedin.com/in/stefanosziogas/" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{
                  color: '#ffffff', 
                  textDecoration: 'none', 
                  fontWeight: 'bold',
                  transition: 'color 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.color = '#60a5fa'}
                onMouseOut={(e) => e.target.style.color = '#ffffff'}
              >LinkedIn   </a>
              <a 
                href="mailto:stefan.ziog@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{
                  color: '#ffffff', 
                  textDecoration: 'none', 
                  fontWeight: 'bold',
                  transition: 'color 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.color = '#60a5fa'}
                onMouseOut={(e) => e.target.style.color = '#ffffff'}
              >Gmail</a>
              
              </p>
            </div>
          </section>

          
          <section className="about-section">
            <h2>Searching</h2>
            <div>
              <p>Opportunities for work in the following fields:</p>
              <p>AI Engineer, Machine Learning Engineer, Software Developer.</p>
              <p>Data Scientist, Data Engineer, Data Analyst, Consultant, QA </p>

            </div>
          </section>
        

          <div className="navigation-buttons-container">
            <div className="navigation-buttons">
              <button 
                className="demos-button" 
                onClick={goToDemos}
              >
                Ai-Machine Learning Videos
              </button>
              <button 
                className="rdemos-button" 
                onClick={goToRDemos}
              >
                Smart Robot Videos
              </button>
              <button 
                className="cv-button" 
                onClick={goToCV}
              >
                CV
              </button>
            </div>

            <div className="programming-skills">
              <SiPython size={50} color="#3776AB" />
              <SiCplusplus size={50} color="#00599C" />
              <SiC size={50} color="#A8B9CC" />
              <FaJava size={50} color="#007396" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;