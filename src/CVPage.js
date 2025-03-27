import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CVPage.css';
import backgroundImage from './assets/background.jpg';

function CVPage() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className="demos-page">
      <div className="background-overlay">
        <div className="content-container">
        <section className="experience-section">
            <h2>Education</h2>
            <div>
              <div className="experience-item">
                <h3>MSc in Autonomous Systems</h3>
                <p>Technical University of Denmark</p>
                <ul>
                  <li>Specialized in AI algorithms, machine learning and deep learning</li>
                  <li> Hands-on experience with embedded and robotic systems.</li>
                  <li> Skilled in sensing, optimization, information technologies, and systems engineering.</li>
                  <li> Combined analysis, modeling, optimization, design, and implementation in a scientific and innovative
                  perspective.</li>

                </ul>
              </div>
              <div className="experience-item">
                <h3>Integrated MSc in Production & Management Engineering</h3>
                <p>Democritus University of Thrace</p>
                <ul>
                  <li> MSc Thesis: Quantized Deep Neural Networks.</li>
                  <li> Proficient in C, C++, and Informatics.</li>
                  <li> Able to apply principles of physics and mechanics (statics, dynamics, thermodynamics, and fluid
                    mechanics).</li>
                  <li> Understanding of electrical, electronic, and control systems.</li>
                  <li> Managing production systems and industrial processes.</li>

                </ul>
              </div>
            </div>
          </section>

          <section className="experience-section">
            <h2>Professional Experience</h2>
            <div>
              <div className="experience-item">
                <h3>MSc Thesis Researcher</h3>
                <p>Force Technology</p>
                <p>2024 - 2025</p>
                <ul>
                  <li>Evaluated Deep Reinforcement Learning techniques in Unmanned Autonomous Vehicles.</li>
                  <li>Utilized perception frameworks such as vision and depth for navigation purposes.</li>
                  <li>Integrated advanced sensor data analysis using TensorFlow.</li>
                  <li>Designed and validated photorealistic graphical environments in Gaming Engines.</li>

                </ul>
              </div>
              <div className="experience-item">
                <h3>Software Developer Intern</h3>
                <p>Membantu Aps</p>
                <p>2023 - 2024</p>
                <ul>
                  <li>Collaborated with a multidisciplinary team to develop an interactive storyteller using state-of-the-art
                  LLMs such as ChatGPT, Dall-E 2, and Eleven Labs.</li>
                  <li>Utilized Django to design scalable and secure APIs for web applications, optimizing data workflows and
                  server response times.</li>
                  <li>Configured and managed Amazon Web Services (AWS) environments.</li>
                </ul>
              </div>
              <div className="experience-item">
                <h3>Engineer</h3>
                <p>K.Y.D. Vlachodimou Despina</p>
                <p>2022 - 2023</p>
                <ul>
                  <li>Utilized GIS tools to design land sanctions and optimize agricultural planning for the Greek government.</li>
                  <li>Analyzed satellite imagery to inspect land usage and matched crops to appropriate soil types.</li>
                  <li>Organized and managed sensitive client data, ensuring accurate documentation and compliance with
                  ministry regulations.</li>
                </ul>
              </div>
              <div className="experience-item">
                <h3>Scheduling Manager</h3>
                <p>Hellenic Army</p>
                <p>2021 - 2022</p>
                <ul>
                  <li>Honed discipline and teamwork skills, demonstrating ability to perform tasks under high pressure with
                  precision and reliability.</li>
                  <li>Scheduled shifts for 300 personnel, ensuring balanced workloads.</li>
                  <li>Reduced workload by 50% automating tasks using advanced Excel functions and Macros.</li>
                </ul>
              </div>


            </div>
          </section>

          <div className="navigation-buttons-container">
            <div className="navigation-buttons">
              <button 
                className="home-button" 
                onClick={goToHome}
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CVPage;