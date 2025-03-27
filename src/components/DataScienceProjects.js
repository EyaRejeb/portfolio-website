import React, { useState, useEffect, useRef } from 'react';
import '../DataScienceProjects.css';

// Sample image imports – replace these with your actual project images or visualizations.
import churnPrediction from '../assets/fashion-set-1.png';
import salesForecasting from '../assets/fashion-set-1.png';
import sentimentAnalysis from '../assets/fashion-set-1.png';
import dashboardExample from '../assets/fashion-set-1.png';
import recommendationSystem from '../assets/fashion-set-1.png';

function DataScienceProjects() {
  const dsProjects = [
    {
      id: 1,
      src: churnPrediction,
      alt: 'Customer Churn Prediction',
      title: 'Customer Churn Prediction',
      description: 'Predictive model using machine learning to identify customers likely to churn.',
      details: 'In this project, I used Python, scikit-learn, and Pandas to develop a model that predicts customer churn with an accuracy of 85%. The analysis helped the company reduce churn by targeting at-risk customers with personalized retention strategies.',
      link: 'https://github.com/yourusername/churn-prediction'
    },
    {
      id: 2,
      src: salesForecasting,
      alt: 'Sales Forecasting Model',
      title: 'Sales Forecasting',
      description: 'Time series analysis to forecast future sales trends.',
      details: 'Utilizing Prophet and ARIMA models, I forecasted sales trends for a retail company, enabling them to optimize inventory and marketing strategies. The dashboard provided interactive visualizations built with Plotly.',
      link: 'https://github.com/yourusername/sales-forecasting'
    },
    {
      id: 3,
      src: sentimentAnalysis,
      alt: 'Social Media Sentiment Analysis',
      title: 'Sentiment Analysis',
      description: 'Analyzed social media sentiment to gauge customer opinions.',
      details: 'I collected tweets and performed sentiment analysis using NLTK and spaCy, visualizing results with word clouds and interactive charts. This project provided insights into brand perception and market trends.',
      link: 'https://github.com/yourusername/sentiment-analysis'
    },
    {
      id: 4,
      src: dashboardExample,
      alt: 'Interactive Data Dashboard',
      title: 'Interactive Dashboard',
      description: 'Built a dashboard to visualize key performance indicators in real time.',
      details: 'Developed using Plotly Dash, this interactive dashboard aggregates real-time data to provide actionable insights for business decisions. The project includes multiple filters and dynamic charts.',
      link: 'https://your-dashboard-link.com'
    },
    {
      id: 5,
      src: recommendationSystem,
      alt: 'Recommendation System',
      title: 'Recommendation Engine',
      description: 'Developed a recommendation engine using collaborative filtering.',
      details: 'This project uses collaborative filtering and deep learning to provide personalized recommendations. Built with TensorFlow and Python, the engine significantly improved user engagement and satisfaction.',
      link: 'https://github.com/yourusername/recommendation-engine'
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  // Close modal when clicking outside modal content
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (selectedProject && modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [selectedProject]);

  return (
    <div className="ds-gallery">
      <h2 className="ds-gallery-title">Data Science Projects</h2>
      <p className="ds-gallery-subtitle">
        A selection of projects showcasing data-driven insights and predictive analytics.
      </p>
      
      <div className="ds-grid">
        {dsProjects.map((project) => (
          <div key={project.id} className="ds-item" onClick={() => openModal(project)}>
            <img src={project.src} alt={project.alt} className="ds-image" />
            <div className="ds-overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="ds-modal">
          <div className="ds-modal-content" ref={modalRef}>
            <button className="ds-close" onClick={closeModal}>&times;</button>
            <h2>{selectedProject.title}</h2>
            <img src={selectedProject.src} alt={selectedProject.alt} className="ds-modal-image" />
            <p>{selectedProject.details}</p>
            {selectedProject.link && (
              <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="ds-modal-link">
                View Project
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default DataScienceProjects;
