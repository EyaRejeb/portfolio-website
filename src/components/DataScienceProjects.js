import React, { useState, useEffect, useRef } from 'react';
import '../DataScienceProjects.css';

// Sample image imports – replace these with your actual project images or visualizations.
import hospital from '../assets/hospital.png';
import marathon from '../assets/marathon.png';

function DataScienceProjects() {
  const dsProjects = [
    {
      id: 1,
      src: hospital, // Placeholder image; replace with an appropriate image for your project
      alt: 'Hospital Datasets Cleaning and Merging',
      title: 'Hospital Datasets Cleaning & Merging',
      description: 'Data cleaning and merging of two hospital datasets.',
      details: 'This project involved cleaning and merging two hospital datasets to create a comprehensive dataset for further analysis. Techniques included handling missing values, data normalization, and merging data on common keys. The final dataset supports advanced analytics in healthcare operations.',
      link: 'https://github.com/EyaRejeb/data_cleaning_merging_hospital_datasets'
    },
    {
      id: 2,
      src: marathon, // Replace this with a more appropriate image if available
      alt: 'Ultra-Marathon Analysis Project',
      title: 'Ultra-Marathon Analysis',
      description: 'Deep dive into 50KM & 50MI races in the USA in 2020.',
      details:
        'This data analysis project explores a rich dataset of ultra-marathon races spanning over 200 years. Focusing on 50KM and 50MI races held in the USA in 2020, the project involved cleaning and filtering data, analyzing athlete demographics, and visualizing key performance metrics using Python. Key visualizations include race distribution, athlete age histograms, and performance time comparisons.',
      link: 'https://github.com/EyaRejeb/marathon-analysis-project',
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
            <button className="ds-close" onClick={closeModal}>
              &times;
            </button>
            <h2>{selectedProject.title}</h2>
            <img src={selectedProject.src} alt={selectedProject.alt} className="ds-modal-image" />
            <p>{selectedProject.details}</p>
            {selectedProject.link && (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="ds-modal-link"
              >
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
