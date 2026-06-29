import React, { useState, useEffect, useRef } from 'react';
import '../DataScienceProjects.css';

// Sample image imports – replace these with your actual project images or visualizations.
import hospital from '../assets/hospital.png';
import hospitalAdvanced from '../assets/hospitalAdvanced.png';
import marathon from '../assets/marathon.png';
import mnist from '../assets/mnist.png';
import epidemic from '../assets/epidemic.png';
import mri from '../assets/MRI.png';

function DataScienceProjects() {
  const dsProjects = [
    {
      id: 1,
      src: hospitalAdvanced, // Replace with a medical/diabetes-related image if available
      alt: 'Diabetes Prediction with DNN',
      title: 'Diabetes Prediction with Neural Networks',
      description: 'DNN classifier for predicting diabetes from health data.',
      details: 'This project used the Pima Indians Diabetes dataset to build and evaluate a deep neural network classifier. After data normalization and cleaning, the model was trained using Keras and TensorFlow and evaluated with accuracy metrics, confusion matrix, and ROC-AUC. The model supports healthcare use cases for early diabetes detection.',
      link: 'https://github.com/EyaRejeb/diabetes-dnn-prediction',
    },
    {
      id: 2,
      src: marathon,
      alt: 'Ultra-Marathon Analysis Project',
      title: 'Ultra-Marathon Analysis',
      description: 'Deep dive into 50KM & 50MI races in the USA in 2020.',
      details: 'This data analysis project explores a rich dataset of ultra-marathon races spanning over 200 years. Focusing on 50KM and 50MI races held in the USA in 2020, the project involved cleaning and filtering data, analyzing athlete demographics, and visualizing key performance metrics using Python. Key visualizations include race distribution, athlete age histograms, and performance time comparisons.',
      link: 'https://github.com/EyaRejeb/marathon-analysis-project'
    },
    {
      id: 3,
      src: mnist,
      alt: 'Handwritten Digit Recognition',
      title: 'Digit Recognition with CNN (MNIST)',
      description: 'CNN models for classifying handwritten digits.',
      details: 'Developed and evaluated CNN models (LeNet-5 and a custom architecture) for classifying handwritten digits using the MNIST dataset. Included data preprocessing, convolutional operations, and comparative evaluation against traditional classifiers like MLP and k-NN.',
      link: 'https://github.com/EyaRejeb/mnist-digit-recognition'
    },
    {
      id: 4,
      src: epidemic,
      alt: 'Epidemic Spread Simulation',
      title: 'Epidemic Spread Modeling (SIR/SEIR)',
      description: 'Simulated the spread of infectious diseases.',
      details: 'Modeled and visualized the spread of epidemics using SIR and SEIR models. Implemented differential equation solvers to explore the effects of infection rate, incubation period, and recovery rate under multiple scenarios. Visualized dynamics with Matplotlib.',
      link: 'https://github.com/EyaRejeb/epidemic-simulation-model'
    },
    {
      id: 5,
      src: hospitalAdvanced,
      alt: 'Hospital Services Comparison and Visualization',
      title: 'Advanced Hospital Analytics & Visualization',
      description: 'Integrated hospital datasets with comparative visual analysis.',
      details: 'Unified structured (CSV) and semi-structured (JSON) hospital data to build visual comparisons between institutions. Highlighted differences in service usage, department activity, and potential operational bottlenecks using advanced visualizations.',
      link: 'https://github.com/EyaRejeb/hospital-data-visualization'
    },
    {
      id: 6,
      src: mri,
      alt: 'Parallel MRI Image Reconstruction',
      title: 'Parallel MRI Reconstruction (Tikhonov)',
      description: 'Reconstructed MRI images with noise and regularization.',
      details: 'Simulated parallel MRI image acquisition using sensitivity maps from an 8-antenna system. Tested multiple subsampling rates (R=2, R=4) and noise levels, then applied Tikhonov regularization to improve image quality. Evaluated results via SNR and visual inspection.',
      link: 'https://github.com/EyaRejeb/parallel-mri-reconstruction'
    }
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

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
        <h2 className="ds-gallery-title">Data Analysis Projects</h2>
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

        {selectedProject && (
            <div className="ds-modal">
              <div className="ds-modal-content" ref={modalRef}>
                <button className="ds-close" onClick={closeModal}>
                  &times;
                </button>
                <h2>{selectedProject.title}</h2>
                <img src={selectedProject.src} alt={selectedProject.alt} className="ds-modal-image" />
                <p>{selectedProject.details}</p>


                {/*{selectedProject.link && (*/}
                {/*    <a*/}
                {/*        href={selectedProject.link}*/}
                {/*        target="_blank"*/}
                {/*        rel="noopener noreferrer"*/}
                {/*        className="ds-modal-link"*/}
                {/*    >*/}
                {/*      View Project*/}
                {/*    </a>*/}
                {/*)}*/}


              </div>
            </div>
        )}
      </div>
  );
}

export default DataScienceProjects;
