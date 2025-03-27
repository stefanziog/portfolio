import React from 'react';
import { 
  SiPython, 
  SiCplusplus, 
  SiC 
} from 'react-icons/si';
import { FaJava, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
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

  const contactIconStyle = {
    color: '#ffffff', 
    marginRight: '15px',
    transition: 'color 0.3s ease',
    cursor: 'pointer'
  };

  const handleIconHover = (e) => {
    e.target.style.color = '#60a5fa';
  };

  const handleIconLeave = (e) => {
    e.target.style.color = '#ffffff';
  };

  return (
    <div 
      className="home-page"  >
      <div className="background-overlay">
        <div className="content-container">
          <h2>Welcome</h2>
          
          <section className="ai-section">
            <div>
              <p>Here you will find projects regarding AI, Software and Robotics.</p>

              <p>I am a passionate engineer with a strong background in AI-Machine Learning and Robotics.</p>
              <p>My dream is to apply my skills in a relative field and further develop my knowledge.</p>
              <p>With an open mind and hard work I desire to collaborate in creative and innovative projects.</p>
              <p>Contact Links:</p>
              <div>
                <a 
                  href="https://github.com/stefanziog" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaGithub 
                    size={30} 
                    style={contactIconStyle} 
                    onMouseOver={handleIconHover}
                    onMouseOut={handleIconLeave}
                  />
                </a>
                <a 
                  href="https://www.linkedin.com/in/stefanosziogas/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaLinkedin 
                    size={30} 
                    style={contactIconStyle} 
                    onMouseOver={handleIconHover}
                    onMouseOut={handleIconLeave}
                  />
                </a>
                <a 
                  href="mailto:stefan.ziog@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <SiGmail 
                    size={30} 
                    style={contactIconStyle} 
                    onMouseOver={handleIconHover}
                    onMouseOut={handleIconLeave}
                  />
                </a>
              </div>
            </div>
          </section>



        
          <div className="navigation-buttons-container">
            <div className="navigation-buttons">
              <button 
                className="demos-button" 
                onClick={goToDemos}
              >
                AI-Machine Learning Videos
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
  );
}

export default HomePage;