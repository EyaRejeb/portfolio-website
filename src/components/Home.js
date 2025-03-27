import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
import Typewriter from './Typewriter';
import heroImage from '../assets/Eya_Rejeb.jpeg'; // Ensure your image is in src/assets
import cvFile from '../assets/Eya_Rejeb_CV.pdf';   // Place your CV PDF in src/assets

function Home() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="greeting">
          Hello, I'm <span className="name-highlight">Eya REJEB</span>
        </h1>
        <p className="hero-description">
          I am a <span className="role-highlight"><Typewriter /></span>.
        </p>
        <p className="short-description">
          I’m a creative professional who designs, develops, and analyzes data to create innovative solutions.
          My passion is blending art and technology to deliver outstanding results.
        </p>
        {/* The button is now an anchor that downloads the CV */}
        <a className="cta-button" href={cvFile} download>
          download my CV
        </a>
        <div className="social-icons">
          <a href="https://www.instagram.com/eyarejeb02/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/eya.rejeb.02/" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.linkedin.com/in/eya-rejeb/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:eyarejeb02@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
          <a href="https://github.com/EyaRejeb" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Eya Rejeb" />
      </div>
    </section>
  );
}

export default Home;
